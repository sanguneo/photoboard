<script setup lang="ts">
import dayjs from 'dayjs';
import * as yup from 'yup';

definePageMeta({
  header: {
    type: 1,
    title: '사진 등록',
    back: true,
  },
  container: 'bg-content regist-type',
});

const router = useRouter();

const schema = yup.object().shape({
  title: yup.string().required().min(2).max(30),
  location: yup.string().required().min(2).max(30),
  description: yup.string().required().min(2).max(30),
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
const allFilled = computed(() => Object.values(values).every(Boolean));

const hasErrorName = ref('');
const view = ref<'select'|'preview'>('select');

watch(() => values, () => {
  hasErrorName.value = '';
}, { deep: true });

/**
 * formInput에 있는 validation값 검증하기
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
  return false;
};

const onSubmit = async () => {
  if (!await validateForm()) return;
  console.log('후에 fetch함수 전송');
};


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
      <!--
        TODO: 사진선택버튼 누르면 모달 띄워서 처리
              현재는 사진선택버튼 누르면 프리뷰로, 프리뷰에서 보드판 패널 누르면 돌아옴. -->
      <div class="images-selector" :aria-hidden="view === 'preview'">
        <button type="button" class="images-selector-btn icon-btn" aria-label="사진 등록 및 갤러리 선택" @click="view = 'preview'">
          <img src="@/assets/images/images-select.svg" alt="사진 선택 아이콘">
        </button>
        <p class="images-selector-guide">
          사진 촬영 또는 갤러리에서<br>사진을 선택해 주세요.
        </p>
      </div>
      <div class="board-preview" :aria-hidden="view === 'select'">
        <div class="board-preview-warp">
          <div class="board-preview-panel" @click="view = 'select'">
            <table>
              <tbody>
                <tr>
                  <th scope="row">단지명</th>
                  <td><span id="preview-title">{{title}}</span></td>
                </tr>
                <tr>
                  <th scope="row">위치</th>
                  <td><span id="preview-location">{{location}}</span></td>
                </tr>
                <tr>
                  <th scope="row">내용</th>
                  <td><span id="preview-description">{{description}}</span></td>
                </tr>
                <tr>
                  <th scope="row">날짜</th>
                  <td><span id="preview-date">{{dateString}}</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <img src="@/assets/images/test-img.png" alt="선택된 사진 미리보기">
        </div>
      </div>
    </section>
    <section class="board-register-footer" aria-label="사진 등록 제출 버튼 영역">
      <Button type="submit" @click="onSubmit">
        사진 보드판 저장
      </Button>
      <Button type="submit" variant="icon" aria-label="화살표 편집 페이지 이동" @click="router.push('/board/edit')">
        <img v-if="allFilled" src="@/assets/images/btn-arrow.svg" alt="화살표 아이콘">
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
  &[aria-hidden="true"] {
    visibility: hidden;
    pointer-events: none;
  }
}
</style>

