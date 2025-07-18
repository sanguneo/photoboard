<script setup lang="ts">
import dayjs from 'dayjs';
import heic2any from 'heic2any';
import * as yup from 'yup';

import { REGEX } from '@/shared/constants/regex.constant.ts';
import { ALERT_CONTENT } from '@/shared/constants/alert.constant.ts';

const { openToast } = useToastStore();
const { openAlert, openConfirm } = useAlertStore();
const { useLargeFont, useCellular, boardPosition } = storeToRefs(useSettingStore());

const { checkWifiAsBoolean } = useNative();
const { openUploadCompleteModal, openUploadWaitModal } = useOpenModal();
const { file, previewUrl, clear } = useFile();

const router = useRouter();

const schema = yup.object().shape({
  title: yup.string().min(2).max(30).matches(REGEX.NOT_ALLOWED_SPECIAL, ':/*?<>|는 입력할 수 없습니다.').required(),
  location: yup.string().min(2).max(30).matches(REGEX.NOT_ALLOWED_SPECIAL, ':/*?<>|는 입력할 수 없습니다.').required(),
  description: yup.string().min(2).max(30).matches(REGEX.NOT_ALLOWED_SPECIAL, ':/*?<>|는 입력할 수 없습니다.').required(),
  date: yup.mixed().required(),
});

const { values, defineField, validate, errors, meta } = useForm<{
  title: string;
  location: string;
  description: string;
  date?: string;
}>({
  validationSchema: schema,
  initialValues: {
    title: '',
    location: '',
    description: '',
    date: dayjs(new Date()).format('YYYY-MM-DD'),
  },
});

const [ title ] = defineField('title');
const [ location ] = defineField('location');
const [ description ] = defineField('description');
const [ date ] = defineField('date');

const dateString = computed(() => dayjs(date.value ? date.value : meta.value.initialValues?.date).format('YYYY년 MM월 DD일'));
const hasErrorName = ref('');

watch(() => values, () => {
  hasErrorName.value = '';
}, { deep: true });

/**
 * @description formInput에 있는 validation값 검증하기
 *
 * 1. valid가 true이면 성공 반환, false이면 2번부터 실행
 * 2. errors의 첫번째에 있는 항목 hasErrorName에 넣기
 * 3. 해당에러메세지 토스트로 보여주기
 */
const validateForm = async () => {
  const { valid } = await validate();

  if (valid) return true;

  const error = Object.entries(errors.value)[0];
  hasErrorName.value = error[0];
  // 여기에 토스트 오픈
  openToast(error[1], { type: 'validation', position: 'bottom', duration: 3500 });
  return false;
};

const onClickSelectImage = () => {
  const boardFileInput = document.getElementById('boardFileInput');
  boardFileInput?.click();
};

const onFileChange = async (event: Event) => {
  const input = event.target as HTMLInputElement;
  let selected = input.files?.[0];
  if (selected) {
    if (selected.name.includes('.heic') || selected.name.includes('.heif')) {
      selected = (await heic2any({ blob: selected, toType: 'image/jpeg', quality: 1 })) as File;
    }
    file.value = selected;
    input.value = '';
  }
};

/**
 * @description 문서함 전송
 *
 * 1. useCellular가 false면 전송대기목록 저장 및 전송대기중 알림팝업 호출 후 종료
 * 2. useCellular가 true면 문서함 전송 API 요청
 * 2-1. 성공일경우 저장 완료 알림팝업 후 종료
 * 2-2. 실패일경우 실패 알림 팝업 - *그중 필수 확인 > 저장 용량 초과시 초과 알림팝업
 */
const sendPhotoBoard = async () => {
  console.log('후에 fetch함수 전송');

  const wifiStatus = await checkWifiAsBoolean();
  alert(wifiStatus ? 'Wifi' : '셀룰러');

  if (!useCellular.value){
    // TODO 1. 전송 대기 목록 저장 (IDB) 추후에 로직 연결

    // 2. 전송대기중 알림팝업 호출
    openUploadWaitModal();
    return;
  }

  // 1. 전송 성공시
  openUploadCompleteModal();

  // TODO 2. 전송 실패시 알림창 호출(api연동시 추후 로직 연결)
  openAlert({ content: 'Xp문서함 저장 용량을 초과했습니다.\n사용하지 않는 파일을 삭제해 주세요.' });
};


const onSubmit = async () => {
  if (!await validateForm()) return;
  sendPhotoBoard();
};

onBeforeRouteLeave(async (to) => {
  if (to.path.startsWith('/board')) return true;
  const result = await openConfirm({ content: ALERT_CONTENT.PHOTO_REGIST_OUT });
  if (result){
    clear();
  }
  return result;
});

onMounted(() => {
  // TODO 최근 보드판 등록한 적이 있으면 보드판 위치, 내용 가져와서 input에 세팅하기

});

</script>

<template>
  <main aria-label="사진 등록 메인 콘텐츠">
    <section class="board-register-top" aria-label="사진 정보 입력 영역">
      <ul class="form-list" role="list">
        <li class="form-list-item">
          <label for="title">단지명</label>
          <AtomInput
            name="title"
            type="text"
            placeholder="광교자이더클래스"
            :has-error="hasErrorName === 'title'"
          />
        </li>
        <li class="form-list-item">
          <label for="location">위치</label>
          <AtomInput
            name="location"
            type="text"
            placeholder="사진 위치를 작성해 주세요."
            :has-error="hasErrorName === 'location'"
          />
        </li>
        <li class="form-list-item">
          <label for="description">내용</label>
          <AtomInput
            name="description"
            type="text"
            placeholder="예시) 소방 점검"
            :has-error="hasErrorName === 'description'"
          />
        </li>
        <li class="form-list-item">
          <label>날짜</label>
          <AtomInput
            name="date"
            type="date"
            :has-error="hasErrorName === 'date'"
          >
            <label for="date">{{ dateString }}</label>
          </AtomInput>
        </li>
      </ul>
    </section>
    <section class="board-register-body" aria-label="사진 미리보기 및 선택">
      <input
        id="boardFileInput"
        type="file"
        :aria-hidden="true"
        accept="image/png, image/jpeg, image/gif, image/svg+xml, image/bmp, image/webp, image/avif, image/heif, image/heic"
        capture="environment"
        @change="onFileChange"
      >
      <div v-if="!previewUrl" class="images-selector" :aria-hidden="Boolean(previewUrl) !== false">
        <button type="button" class="images-selector-btn icon-btn" aria-label="사진 등록 및 갤러리 선택" @click="onClickSelectImage">
          <img src="@/assets/images/images-select.svg" alt="사진 선택 아이콘" >
        </button>
        <p class="images-selector-guide">사진 촬영 또는 갤러리에서<br >사진을 선택해 주세요.</p>
      </div>
      <div v-else class="board-preview" :aria-hidden="Boolean(previewUrl) !== true">
        <div class="board-preview-warp">
          <div class="board-preview-panel" :class="[boardPosition]">
            <table :class="{'large': useLargeFont }">
              <tbody>
                <tr>
                  <th scope="row">단지명</th>
                  <td>
                    <span id="preview-title">{{ title }}</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">위치</th>
                  <td>
                    <span id="preview-location">{{ location }}</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">내용</th>
                  <td>
                    <span id="preview-description">{{ description }}</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">날짜</th>
                  <td>
                    <span id="preview-date">{{ dateString }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <img :src="previewUrl" alt="선택된 사진 미리보기" >
        </div>
      </div>
    </section>
    <section class="board-register-footer" aria-label="사진 등록 제출 버튼 영역">
      <Button type="submit" @click="onSubmit">
        사진 보드판 저장
      </Button>
      <Button type="submit" variant="icon" :disabled="!previewUrl" aria-label="화살표 편집 페이지 이동" @click="router.push('/board/edit')">
        <img v-if="previewUrl" src="@/assets/images/btn-arrow.svg" alt="화살표 아이콘">
        <img v-else src="@/assets/images/btn-arrow-disabled.svg" alt="화살표 아이콘">
        <span class="btn-icon-title">화살표</span>
      </Button>
    </section>
  </main>
</template>

<style lang="scss">
  @use '@/assets/scss/pages/_board.scss' as *;
</style>

<style lang="scss" scoped>
.clear-btn {
  visibility: visible;
  pointer-events: auto;
  &[aria-hidden='true'] {
    visibility: hidden;
    pointer-events: none;
  }
}
</style>

