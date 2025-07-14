<script setup lang="ts">
const router = useRouter();

const TOTAL_STEPS = 5;
const currentStep = ref<number>(1);
const percent = computed(() => Math.round((currentStep.value / TOTAL_STEPS) * 100));
const isLast = computed(() => currentStep.value === TOTAL_STEPS);

const onClickPrevBtn = () => {
  if (currentStep.value > 1) currentStep.value -= 1;
};

const onClickNextBtn = () => {
  if (isLast.value) return router.push('/');
  if (currentStep.value < TOTAL_STEPS) currentStep.value += 1;
};

</script>

<template>
  <main class="preview-content" aria-label="서비스 미리보기 안내" tabindex="-1">
    <div class="preview-progress" role="progressbar" :aria-valuenow="percent" aria-valuemin="0" aria-valuemax="100" aria-label="진행률">
      <div class="progressbar-bar" :class="{ full: currentStep === TOTAL_STEPS }" :style="{ width: `${percent}%` }" />
    </div>
    <div class="preview-step-box" data-step="1" role="tabpanel" aria-labelledby="step-label-1" :hidden="currentStep !== 1">
      <div class="preview-step">
        <span id="step-label-1" class="step-count" aria-current="step" tabindex="-1">1 / 5</span>
      </div>
      <div class="preview-text">
        <p>현장에서 보드판 작성이<br >어려웠나요?</p>
      </div>
      <div class="preview-img" role="img" aria-label="현장 사진 예시 이미지1">
        <img src="@/assets/images/img_preview_1.png" alt="미리보기1 이미지" >
      </div>
    </div>
    <div class="preview-step-box" data-step="2" role="tabpanel" aria-labelledby="step-label-2" :hidden="currentStep !== 2">
      <div class="preview-step"><span id="step-label-2" class="step-count" tabindex="-1">2 / 5</span></div>
      <div class="preview-text">
        <p>
          이제 사진보드판으로<br >
          간편하게 보드판을 작성하고
        </p>
      </div>
      <div class="preview-img" role="img" aria-label="현장 사진 예시 이미지2">
        <img src="@/assets/images/img_preview_2.png" alt="미리보기1 이미지" >
      </div>
    </div>
    <div class="preview-step-box" data-step="3" role="tabpanel" aria-labelledby="step-label-3" :hidden="currentStep !== 3">
      <div class="preview-step"><span id="step-label-3" class="step-count" tabindex="-1">3 / 5</span></div>
      <div class="preview-text">
        <p>
          현장에서 촬영해서<br >
          사진 보드판을 완성할 수 있어요.
        </p>
      </div>
      <div class="preview-img" role="img" aria-label="현장 사진 예시 이미지3">
        <img src="@/assets/images/img_preview_3.png" alt="미리보기1 이미지" >
      </div>
    </div>
    <div class="preview-step-box" data-step="4" role="tabpanel" aria-labelledby="step-label-4" :hidden="currentStep !== 4">
      <div class="preview-step"><span id="step-label-4" class="step-count" tabindex="-1">4 / 5</span></div>
      <div class="preview-text">
        <p>
          저장한 사진보드판은<br >
          Xp문서함에 자동 저장돼요.
        </p>
      </div>
      <div class="preview-img" role="img" aria-label="현장 사진 예시 이미지4">
        <img src="@/assets/images/img_preview_4.png" alt="미리보기1 이미지" >
      </div>
    </div>
    <div class="preview-step-box" data-step="5" role="tabpanel" aria-labelledby="step-label-5" :hidden="currentStep !== 5">
      <div class="preview-step"><span id="step-label-5" class="step-count" tabindex="-1">5 / 5</span></div>
      <div class="preview-text">
        <div class="preview-error-badge">
          <span class="icon">
            <img src="@/assets/images/error-line.svg" alt="경고 아이콘" >
          </span>
          <span>데이터 사용이 걱정된다면</span>
        </div>
        <p>
          Wi-Fi 모드에서만 전송되도록<br >
          설정을 변경해 주세요.
        </p>
      </div>
      <div class="preview-img" role="img" aria-label="현장 사진 예시 이미지5">
        <img src="@/assets/images/img_preview_5.png" alt="미리보기1 이미지" >
      </div>
    </div>
    <nav class="foot-button-box" aria-label="진행 버튼">
      <Button size="large" variant="line" :disabled="currentStep === 1" @click="onClickPrevBtn">이전</Button>
      <Button size="large" @click="onClickNextBtn">{{ isLast ? '닫기' : '다음' }}</Button>
    </nav>
  </main>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/pages/_preview.scss' as *;
</style>
