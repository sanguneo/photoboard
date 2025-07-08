<script setup lang="ts">
</script>

<template>
  <div class="modal-dim" aria-label="알림창 영역" aria-hidden="false">
    <!-- ▷ [1] 사진 저장 완료 알럿 -->
    <div class="modal modal-confirm" role="alertdialog" aria-modal="true" aria-labelledby="modal-title1">
      <div class="modal-body">
        <p id="modal-title1" class="content">
          선택한 사진을<br>
          휴대폰 갤러리에 저장했습니다.
        </p>
      </div>
      <div class="modal-foot">
        <button type="button" class="button primary-fill" aria-label="확인">확인</button>
      </div>
    </div>
    <!-- ▷ [2] 검색어 미입력 알럿 -->
    <div class="modal modal-confirm" role="alertdialog" aria-modal="true" aria-labelledby="modal-title2">
      <div class="modal-body">
        <p id="modal-title2" class="content">
          검색어를 입력해 주세요.
        </p>
      </div>
      <div class="modal-foot">
        <button type="button" class="button primary-fill" aria-label="확인">확인</button>
      </div>
    </div>
    <!-- ▷ [3] 검색어 두 글자 이상 알럿 -->
    <div class="modal modal-confirm" role="alertdialog" aria-modal="true" aria-labelledby="modal-title3">
      <div class="modal-body">
        <p id="modal-title3" class="content">
          두 글자 이상 입력해 주세요.
        </p>
      </div>
      <div class="modal-foot">
        <button type="button" class="button primary-fill" aria-label="확인">확인</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use '@/assets/scss/components/_modal.scss' as *;
</style>
