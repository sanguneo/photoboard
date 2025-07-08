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
  title: yup.string().required(),
  location: yup.string().required(),
  description: yup.string().required(),
  date: yup.mixed().required(),
});

const { values, defineField, setFieldValue } = useForm<{
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
    date: '',
  },
});

const [ title ] = defineField('title');
const [ location ] = defineField('location');
const [ description ] = defineField('description');
const [ date ] = defineField('date');
const dateString = computed(()=>date.value ? dayjs(date.value).format('YYYY년 MM월 DD일') : '');
const allFilled = computed(()=>Object.values(values).every(Boolean));

const view = ref<'select'|'preview'>('select');



</script>

<template>
  <main aria-label="사진 등록 메인 콘텐츠">
    <section class="board-register-top" aria-label="사진 정보 입력 영역">
      <ul class="form-list" role="list">
        <li class="form-list-item">
          <label for="input-title">단지명</label>
          <div class="form-wrap">
            <input id="input-title" v-model="title" class="error" type="text" placeholder="광교자이더클래스" >
            <button type="button" class="icon-btn clear-btn" :aria-hidden="title.trim().length <= 0" aria-label="초기화" @click="setFieldValue('title', '')">
              <img src="@/assets/images/clear.svg" alt="초기화">
            </button>
          </div>
        </li>
        <li class="form-list-item">
          <label for="input-location">위치</label>
          <div class="form-wrap">
            <input id="input-location" v-model="location" type="text" placeholder="사진 위치를 작성해 주세요." >
            <button type="button" class="icon-btn clear-btn" :aria-hidden="location.trim().length <= 0" aria-label="초기화" @click="setFieldValue('location', '')">
              <img src="@/assets/images/clear.svg" alt="초기화">
            </button>
          </div>
        </li>
        <li class="form-list-item">
          <label for="input-description">내용</label>
          <div class="form-wrap">
            <input id="input-description" v-model="description" type="text" placeholder="예시) 소방 점검" >
            <button type="button" class="icon-btn clear-btn" :aria-hidden="description.trim().length <= 0" aria-label="초기화" @click="setFieldValue('description', '')">
              <img src="@/assets/images/clear.svg" alt="초기화">
            </button>
          </div>
        </li>
        <li class="form-list-item">
          <label >날짜</label>
          <div class="form-wrap">
            <input id="input-date" v-model="date" type="date">
            <label for="input-date">{{date? dateString : ''}}</label>
            <button type="button" class="icon-btn clear-btn" :aria-hidden="!date" aria-label="초기화" @click="setFieldValue('date', undefined)">
              <img src="@/assets/images/clear.svg" alt="초기화">
            </button>
          </div>
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
      <button type="submit" class="button primary-fill" :disabled="!allFilled" aria-disabled="true">
        사진 보드판 저장
      </button>
      <button class="button button--icon" :disabled="!allFilled" aria-label="화살표 편집 페이지 이동" @click="router.push('/board/edit')">
        <img v-if="allFilled" src="@/assets/images/btn-arrow.svg" alt="화살표 아이콘">
        <img v-else src="@/assets/images/btn-arrow-disabled.svg" alt="화살표 아이콘">
        <span class="btn-icon-title">화살표</span>
      </button>
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

<!--<script>-->
<!--    document.addEventListener("DOMContentLoaded", function () {-->
<!--        // -&#45;&#45; 입력 및 프리뷰 연결 -&#45;&#45;-->
<!--        const inputs = {-->
<!--            title: document.getElementById("input-title"),-->
<!--            location: document.getElementById("input-location"),-->
<!--            description: document.getElementById("input-description"),-->
<!--            date: document.getElementById("input-date"),-->
<!--        };-->

<!--        const previews = {-->
<!--            title: document.getElementById("preview-title"),-->
<!--            location: document.getElementById("preview-location"),-->
<!--            description: document.getElementById("preview-description"),-->
<!--            date: document.getElementById("preview-date"),-->
<!--        };-->

<!--        const toast = document.querySelector(".toast-container");-->
<!--        const submitBtn = document.querySelector(".button.primary-fill");-->
<!--        const iconBtn = document.querySelector(".button.button&#45;&#45;icon");-->

<!--        // -&#45;&#45; 클리어 버튼 클릭시 해당 input 비우기 -&#45;&#45;-->
<!--        document.querySelectorAll('.clear-btn').forEach(btn => {-->
<!--            // mousedown 사용: 클릭 전에 input blur 안 일어나게!-->
<!--            btn.addEventListener('mousedown', function (e) {-->
<!--                e.preventDefault(); // 버튼에 포커스 방지-->
<!--                const input = btn.parentElement.querySelector('input[type="text"], input[type="date"]');-->
<!--                if (input) {-->
<!--                    input.value = "";-->
<!--                    input.dispatchEvent(new Event("input")); // 상태 즉시 반영-->
<!--                    // input.blur(); // 필요하면 포커스 아웃-->
<!--                }-->
<!--            });-->
<!--        });-->

<!--        // -&#45;&#45; 클리어 버튼 show/hide (포커스 상태에서만 노출!) -&#45;&#45;-->
<!--        function updateClearBtns() {-->
<!--            Object.values(inputs).forEach(input => {-->
<!--                const clearBtn = input.parentElement.querySelector('.clear-btn');-->
<!--                if (!clearBtn) return;-->

<!--                if (document.activeElement === input && input.value.trim() !== "") {-->
<!--                    clearBtn.style.visibility = "visible";-->
<!--                    clearBtn.setAttribute("aria-hidden", "false");-->
<!--                    clearBtn.style.pointerEvents = "auto";-->
<!--                } else {-->
<!--                    clearBtn.style.visibility = "hidden";-->
<!--                    clearBtn.setAttribute("aria-hidden", "true");-->
<!--                    clearBtn.style.pointerEvents = "none";-->
<!--                }-->
<!--            });-->
<!--        }-->

<!--        // -&#45;&#45; 프리뷰/버튼 활성화/클리어 버튼 -&#45;&#45;-->
<!--        function updatePreview() {-->
<!--            previews.title.textContent = inputs.title.value;-->
<!--            previews.location.textContent = inputs.location.value;-->
<!--            previews.description.textContent = inputs.description.value;-->
<!--            previews.date.textContent = formatDate(inputs.date.value);-->

<!--            updateClearBtns();-->

<!--            // 버튼 활성화 조건-->
<!--            const allFilled = Object.values(inputs).every(input => input.value.trim() !== '');-->
<!--            submitBtn.disabled = !allFilled;-->
<!--            iconBtn.disabled = !allFilled;-->

<!--            const iconImg = iconBtn.querySelector('img');-->
<!--            if (allFilled) {-->
<!--                iconImg.src = '@/assets/images/btn-arrow.svg';-->
<!--            } else {-->
<!--                iconImg.src = '@/assets/images/btn-arrow-disabled.svg';-->
<!--            }-->
<!--        }-->

<!--        // 날짜 형식 변환 (예: 2025년 09월 21일)-->
<!--        function formatDate(dateStr) {-->
<!--            if (!dateStr) return "";-->
<!--            const date = new Date(dateStr);-->
<!--            return `${date.getFullYear()}년 ${String(date.getMonth() + 1).padStart(2, '0')}월 ${String(date.getDate()).padStart(2, '0')}일`;-->
<!--        }-->

<!--        // input 이벤트 연결 (업데이트+클리어 버튼 동기화)-->
<!--        Object.values(inputs).forEach(input => {-->
<!--            input.addEventListener("input", updatePreview);-->
<!--            input.addEventListener("focus", updateClearBtns);-->
<!--            input.addEventListener("blur", updateClearBtns);-->
<!--        });-->

<!--        // 타이틀 입력시 토스트-->
<!--        inputs.title.addEventListener("input", () => {-->
<!--            toast.setAttribute("aria-hidden", "false");-->
<!--            clearTimeout(toast.timer);-->
<!--            toast.timer = setTimeout(() => {-->
<!--                toast.setAttribute("aria-hidden", "true");-->
<!--            }, 1000);-->
<!--        });-->

<!--        // 최초 상태 세팅-->
<!--        updatePreview();-->
<!--    });-->

<!--    // &#45;&#45;&#45;&#45; 여기까지 form/프리뷰/클리어 버튼 관리 &#45;&#45;&#45;&#45;-->

<!--    document.addEventListener('DOMContentLoaded', () => {-->
<!--        const modalDim = document.querySelector('.modal-dim');-->
<!--        const imagesSelector = document.querySelector('.images-selector');-->
<!--        const boardPreview = document.querySelector('.board-preview');-->
<!--        const openModalBtn = document.querySelector('.images-selector-btn');-->
<!--        const modalButtons = document.querySelectorAll('.modal-list-btn');-->
<!--        // 모달 외 영역 (메인 콘텐츠) - aria-hidden 처리용-->
<!--        const mainContent = document.querySelector('main');-->
<!--        // 포커스 복귀용 저장-->
<!--        let lastFocusedElement = null;-->

<!--        function openModal() {-->
<!--            lastFocusedElement = document.activeElement;-->
<!--            modalDim.style.display = 'flex';-->
<!--            modalDim.setAttribute('aria-hidden', 'false');-->
<!--            imagesSelector.setAttribute('aria-hidden', 'true');-->
<!--            // mainContent.setAttribute('aria-hidden', 'true');-->
<!--            // 모달 내 첫 버튼 포커스-->
<!--            modalButtons[0].focus();-->
<!--            boardPreview.setAttribute('aria-hidden', 'true');-->
<!--        }-->

<!--        function closeModal() {-->
<!--            modalDim.style.display = 'none';-->
<!--            modalDim.setAttribute('aria-hidden', 'true');-->
<!--            imagesSelector.style.display = 'none';-->
<!--            imagesSelector.setAttribute('aria-hidden', 'true');-->
<!--            boardPreview.style.display = 'block';-->
<!--            boardPreview.setAttribute('aria-hidden', 'false');-->
<!--            // mainContent.setAttribute('aria-hidden', 'false');-->
<!--            // 포커스 원래 위치 복귀-->
<!--            if (lastFocusedElement) lastFocusedElement.focus();-->
<!--        }-->

<!--        // 이미지셀렉터 버튼 클릭 -> 모달 열기-->
<!--        if (openModalBtn) openModalBtn.addEventListener('click', openModal);-->

<!--        // 모달 버튼 클릭 -> 닫기 + preview 보이기-->
<!--        modalButtons.forEach(btn => {-->
<!--            btn.addEventListener('click', () => {-->
<!--                closeModal();-->
<!--            });-->
<!--        });-->

<!--        // ESC키 눌렀을 때 모달 닫기-->
<!--        document.addEventListener('keydown', e => {-->
<!--            if (e.key === 'Escape' && modalDim && modalDim.style.display === 'flex') {-->
<!--                e.preventDefault();-->
<!--                closeModal();-->
<!--            }-->
<!--        });-->

<!--        // 모달 바깥 영역 클릭 시 모달 닫기 (optional)-->
<!--        if (modalDim) {-->
<!--            modalDim.addEventListener('click', e => {-->
<!--                if (e.target === modalDim) {-->
<!--                    closeModal();-->
<!--                }-->
<!--            });-->
<!--        }-->
<!--    });-->

<!--    // &#45;&#45;&#45;&#45; 날짜 input 라벨 관련 &#45;&#45;&#45;&#45;-->

<!--    document.addEventListener("DOMContentLoaded", function () {-->
<!--        const input = document.getElementById('input-date');-->
<!--        const label = document.querySelector('label[for="input-date"]');-->
<!--        // 오늘 날짜 구하기 (YYYY-MM-DD)-->
<!--        const today = new Date();-->
<!--        const yyyy = today.getFullYear();-->
<!--        const mm = String(today.getMonth() + 1).padStart(2, '0');-->
<!--        const dd = String(today.getDate()).padStart(2, '0');-->
<!--        const todayStr = `${yyyy}-${mm}-${dd}`;-->
<!--        // ✅ input 기본값 설정-->
<!--        if (input) input.value = todayStr;-->
<!--        // ✅ label에도 오늘 날짜 표시-->
<!--        if (label) label.textContent = today.toLocaleDateString('ko-KR', {-->
<!--            year: 'numeric',-->
<!--            month: 'long',-->
<!--            day: 'numeric',-->
<!--        });-->
<!--        // ✅ 날짜 변경 시 label 업데이트-->
<!--        if (input && label) {-->
<!--            input.addEventListener('input', () => {-->
<!--                if (input.value) {-->
<!--                    const selectedDate = new Date(input.value);-->
<!--                    label.textContent = selectedDate.toLocaleDateString('ko-KR', {-->
<!--                        year: 'numeric',-->
<!--                        month: 'long',-->
<!--                        day: 'numeric',-->
<!--                    });-->
<!--                } else {-->
<!--                    label.textContent = '';-->
<!--                }-->
<!--            });-->
<!--        }-->
<!--    });-->


<!--</script>-->

