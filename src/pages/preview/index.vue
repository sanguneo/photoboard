<template>
  <main class="preview-content" aria-label="서비스 미리보기 안내" tabindex="-1">
    <div
      class="preview-progress" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"
      aria-label="진행률">
      <div class="progressbar-bar"/>
    </div>
    <div class="preview-step-box" data-step="1" role="tabpanel" aria-labelledby="step-label-1">
      <div class="preview-step">
        <span id="step-label-1" class="step-count"  aria-current="step" tabindex="-1">1 / 5</span>
      </div>
      <div class="preview-text">
        <p>현장에서 보드판 작성이<br>어려웠나요?</p>
      </div>
      <div class="preview-img" role="img" aria-label="현장 사진 예시 이미지1">
        <img src="@/assets/images/img_preview_1.png" alt="미리보기1 이미지">
      </div>
    </div>
    <div class="preview-step-box" data-step="2" role="tabpanel" aria-labelledby="step-label-2" hidden>
      <div class="preview-step"><span id="step-label-2" class="step-count"  tabindex="-1">2 / 5</span></div>
      <div class="preview-text">
        <p>이제 사진보드판으로<br>
          간편하게 보드판을 작성하고</p>
      </div>
      <div class="preview-img" role="img" aria-label="현장 사진 예시 이미지2">
        <img src="@/assets/images/img_preview_2.png" alt="미리보기1 이미지">
      </div>
    </div>
    <div class="preview-step-box" data-step="3" role="tabpanel" aria-labelledby="step-label-3" hidden>
      <div class="preview-step"><span id="step-label-3" class="step-count"  tabindex="-1">3 / 5</span></div>
      <div class="preview-text">
        <p>현장에서 촬영해서<br>
          사진 보드판을 완성할 수 있어요.</p>
      </div>
      <div class="preview-img" role="img" aria-label="현장 사진 예시 이미지3">
        <img src="@/assets/images/img_preview_3.png" alt="미리보기1 이미지">
      </div>
    </div>
    <div class="preview-step-box" data-step="4" role="tabpanel" aria-labelledby="step-label-4" hidden>
      <div class="preview-step"><span id="step-label-4" class="step-count"  tabindex="-1">4 / 5</span></div>
      <div class="preview-text">
        <p>저장한 사진보드판은<br>
          Xp문서함에 자동 저장돼요.</p>
      </div>
      <div class="preview-img" role="img" aria-label="현장 사진 예시 이미지4">
        <img src="@/assets/images/img_preview_4.png" alt="미리보기1 이미지">
      </div>
    </div>
    <div class="preview-step-box" data-step="5" role="tabpanel" aria-labelledby="step-label-5" hidden>
      <div class="preview-step"><span id="step-label-5" class="step-count"  tabindex="-1">5 / 5</span></div>
      <div class="preview-text">
        <div class="preview-error-badge ">
          <span class="icon">
            <img src="@/assets/images/error-line.svg" alt="경고 아이콘">
          </span>
          <span>데이터 사용이 걱정된다면</span>
        </div>
        <p>Wi-Fi 모드에서만 전송되도록<br>
          설정을 변경해 주세요.</p>
      </div>
      <div class="preview-img" role="img" aria-label="현장 사진 예시 이미지5">
        <img src="@/assets/images/img_preview_5.png" alt="미리보기1 이미지">
      </div>
    </div>
    <nav class="foot-button-box" aria-label="진행 버튼">
      <button id="prevBtn" type="button" class="button button-large primary-line">이전</button>
      <button id="nextBtn" type="button" class="button button-large primary-fill">다음</button>
      <button id="closeBtn" type="button" class="button button-large primary-fill" style="display:none;">닫기</button>
    </nav>
  </main>
</template>
<style lang="scss" src="@/assets/scss/pages/_preview.scss"></style>
<!--<script>-->
<!--    document.addEventListener('DOMContentLoaded', () => {-->
<!--        const totalStep = 5;-->
<!--        let currentStep = 1;-->
<!--        let prevStep = 1; // 이전 step 기억-->

<!--        const bar = document.querySelector('.progressbar-bar');-->
<!--        const progressWrap = document.querySelector('.preview-progress');-->
<!--        const stepBoxes = document.querySelectorAll('.preview-step-box');-->
<!--        const prevBtn = document.getElementById('prevBtn');-->
<!--        const nextBtn = document.getElementById('nextBtn');-->
<!--        const closeBtn = document.getElementById('closeBtn');-->
<!--        const main = document.querySelector('.preview-content');-->

<!--        // 숫자 카운트 애니메이션 함수-->
<!--        function animateStepCount(targetSpan, from, to, total) {-->
<!--            if (!targetSpan) return;-->
<!--            if (from === to) {-->
<!--                targetSpan.textContent = `${to} / ${total}`;-->
<!--                return;-->
<!--            }-->
<!--            let start = null;-->
<!--            const duration = 350;-->
<!--            function step(ts) {-->
<!--                if (!start) start = ts;-->
<!--                const progress = Math.min((ts - start) / duration, 1);-->
<!--                const current = Math.round(from + (to - from) * progress);-->
<!--                targetSpan.textContent = `${current} / ${total}`;-->
<!--                if (progress < 1) {-->
<!--                    requestAnimationFrame(step);-->
<!--                }-->
<!--            }-->
<!--            requestAnimationFrame(step);-->
<!--        }-->

<!--        function updateProgress() {-->
<!--            // 프로그래스바 진행도-->
<!--            const percent = Math.round((currentStep / totalStep) * 100);-->
<!--            bar.style.width = percent + '%';-->
<!--            progressWrap.setAttribute('aria-valuenow', percent);-->

<!--            // .full 클래스 제어 (마지막이면 border-radius 0)-->
<!--            if (currentStep === totalStep) {-->
<!--                bar.classList.add('full');-->
<!--            } else {-->
<!--                bar.classList.remove('full');-->
<!--            }-->

<!--            // step box show/hide + step number 애니메이션 + a11y-->
<!--            stepBoxes.forEach((box, idx) => {-->
<!--                const stepCountSpan = box.querySelector('.step-count');-->
<!--                if (idx === currentStep - 1) {-->
<!--                    box.removeAttribute('hidden');-->
<!--                    if (stepCountSpan) {-->
<!--                        animateStepCount(stepCountSpan, prevStep, currentStep, totalStep);-->
<!--                        stepCountSpan.setAttribute('aria-current', 'step');-->
<!--                        setTimeout(() => { stepCountSpan.focus(); }, 100);-->
<!--                    }-->
<!--                } else {-->
<!--                    box.setAttribute('hidden', '');-->
<!--                    if (stepCountSpan) stepCountSpan.removeAttribute('aria-current');-->
<!--                }-->
<!--            });-->

<!--            // 버튼 상태-->
<!--            prevBtn.disabled = currentStep === 1;-->
<!--            nextBtn.style.display = (currentStep === totalStep) ? 'none' : '';-->
<!--            closeBtn.style.display = (currentStep === totalStep) ? '' : 'none';-->

<!--            // 업데이트 끝나면 prevStep 값 갱신-->
<!--            prevStep = currentStep;-->
<!--        }-->

<!--        nextBtn.addEventListener('click', () => {-->
<!--            if (currentStep < totalStep) currentStep++;-->
<!--            updateProgress();-->
<!--        });-->

<!--        prevBtn.addEventListener('click', () => {-->
<!--            if (currentStep > 1) currentStep&#45;&#45;;-->
<!--            updateProgress();-->
<!--        });-->

<!--        closeBtn.addEventListener('click', () => {-->
<!--            alert('온보딩 종료!');-->
<!--            // 모달 닫기, 페이지 이동 등 원하는 동작 추가-->
<!--        });-->

<!--        // 최초 1회 실행 (접근성: 메인 포커스)-->
<!--        updateProgress();-->
<!--        main.focus();-->
<!--    });-->


<!--</script>-->
