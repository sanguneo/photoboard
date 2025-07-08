<script setup lang="ts">
</script>

<template>
  <!-- ================================
         📌 [컨펌(confirm) 모달 팝업]
         ================================ -->
  <div class="toast-container" aria-live="polite" aria-hidden="false">
    <div class="toast-validation">
      <span class="icon">
        <img src="@/assets/images/error.svg" alt="경고 아이콘">
      </span>
      <span>2자 이상 작성해 주세요.</span>
    </div>
    <div class="toast-message">
      <span>‘소방 정기 점검’ 삭제 완료</span>
    </div>
    <div class="toast-message">
      <span>
        ‘20250905 주차장 전기자동차 충전 구역<br>
        안전 관리에 대한 민원관리’ 삭제 완료
      </span>
    </div>
    <div class="toast-message">
      <span>5개 삭제 완료</span>
    </div>
  </div>
</template>

<style lang="scss">
  @use '@/assets/scss/components/_modal.scss' as *;
</style>
