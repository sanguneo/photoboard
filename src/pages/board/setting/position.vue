<template>
  <main aria-label="메인 콘텐츠">
    <section class="setting-box" aria-label="사진 등록 작성 영역">
      <div class="setting-info">
        <div class="board-preview-position">
          <img id="imgPosition" class="rightBottom" src="@/assets/images/board-position-img.svg" alt="보드판 위치 안내 이미지">
        </div>
      </div>
      <ul class="setting-list" role="radiogroup" aria-label="설정 항목 선택">
        <li class="setting-list-item">
          <div class="radio-box">
            <input id="radio1" type="radio" class="radio-box_btn" name="radio" aria-labelledby="label1" checked>
            <label id="label1" class="radio-box_name" for="radio1">
              <span class="r_circle"/>
              오른쪽 아래
            </label>
          </div>
        </li>
        <li class="setting-list-item">
          <div class="radio-box">
            <input id="radio2" type="radio" class="radio-box_btn" name="radio" aria-labelledby="label2">
            <label id="label2" class="radio-box_name" for="radio2">
              <span class="r_circle"/>
              왼쪽 아래
            </label>
          </div>
        </li>
        <li class="setting-list-item">
          <div class="radio-box">
            <input id="radio3" type="radio" class="radio-box_btn" name="radio" aria-labelledby="label3">
            <label id="label3" class="radio-box_name" for="radio3">
              <span class="r_circle"/>
              왼쪽 위
            </label>
          </div>
        </li>
        <li class="setting-list-item">
          <div class="radio-box">
            <input id="radio4" type="radio" class="radio-box_btn" name="radio" aria-labelledby="label4">
            <label id="label4" class="radio-box_name" for="radio4">
              <span class="r_circle"/>
              오른쪽 위
            </label>
          </div>
        </li>
      </ul>
    </section>
  </main>
</template>
<style lang="scss" src="@/assets/scss/pages/_boardSetting.scss"></style>

<!--<script>-->

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
<!--            mainContent.setAttribute('aria-hidden', 'true');-->

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

<!--            mainContent.setAttribute('aria-hidden', 'false');-->

<!--            // 포커스 원래 위치 복귀-->
<!--            if (lastFocusedElement) lastFocusedElement.focus();-->
<!--        }-->

<!--        // 이미지셀렉터 버튼 클릭 -> 모달 열기-->
<!--        openModalBtn.addEventListener('click', openModal);-->

<!--        // 모달 버튼 클릭 -> 닫기 + preview 보이기-->
<!--        modalButtons.forEach(btn => {-->
<!--            btn.addEventListener('click', () => {-->
<!--                closeModal();-->
<!--            });-->
<!--        });-->

<!--        // ESC키 눌렀을 때 모달 닫기-->
<!--        document.addEventListener('keydown', e => {-->
<!--            if (e.key === 'Escape' && modalDim.style.display === 'flex') {-->
<!--                e.preventDefault();-->
<!--                closeModal();-->
<!--            }-->
<!--        });-->

<!--        // 모달 바깥 영역 클릭 시 모달 닫기 (optional)-->
<!--        modalDim.addEventListener('click', e => {-->
<!--            if (e.target === modalDim) {-->
<!--                closeModal();-->
<!--            }-->
<!--        });-->
<!--    });-->

<!--    const img = document.getElementById("imgPosition");-->
<!--    // 라디오 아이디와 대응되는 클래스명 매핑-->
<!--    const classMap = {-->
<!--        radio1: "rightBottom",-->
<!--        radio2: "leftBottom",-->
<!--        radio3: "leftTop",-->
<!--        radio4: "rightTop"-->
<!--    };-->

<!--    document.querySelectorAll('input[name="radio"]').forEach(radio => {-->
<!--        radio.addEventListener("change", e => {-->
<!--            if (e.target.checked) {-->
<!--                // 이전에 있던 위치 클래스들 제거-->
<!--                img.classList.remove("leftTop", "rightTop", "leftBottom", "rightBottom");-->
<!--                // 새 위치 클래스 추가-->
<!--                img.classList.add(classMap[e.target.id]);-->
<!--            }-->
<!--        });-->
<!--    });-->

<!--</script>-->
