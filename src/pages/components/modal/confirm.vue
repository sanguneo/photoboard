<script setup lang="ts">
</script>

<template>
  <!-- ================================
         📌 [컨펌(confirm) 모달 팝업]
         ================================ -->
  <div class="modal-dim" aria-label="컨펌창 영역" aria-hidden="false">
    <!-- ▷ [1] 항목 삭제 컨펌 -->
    <div class="modal modal-confirm" role="dialog" aria-modal="true" aria-labelledby="modal-title1">
      <div class="modal-body">
        <p id="modal-title1" class="content">
          ‘재해 예방’ 항목을 삭제할까요?
        </p>
      </div>
      <div class="modal-foot">
        <button type="button" class="button primary-line" aria-label="취소">취소</button>
        <button type="button" class="button primary-fill" aria-label="확인">확인</button>
      </div>
    </div>
    <!-- ▷ [2] 특정 항목 삭제 컨펌 -->
    <div class="modal modal-confirm" role="dialog" aria-modal="true" aria-labelledby="modal-title2">
      <div class="modal-body">
        <p id="modal-title2" class="content">
          ‘20250915 B2지하주차장 C7 천장 누수’ 항목을 삭제할까요?
        </p>
      </div>
      <div class="modal-foot">
        <button type="button" class="button primary-line" aria-label="취소">취소</button>
        <button type="button" class="button primary-fill" aria-label="확인">확인</button>
      </div>
    </div>
    <!-- ▷ [3] 다중 항목 삭제 컨펌 -->
    <div class="modal modal-confirm" role="dialog" aria-modal="true" aria-labelledby="modal-title3">
      <div class="modal-body">
        <p id="modal-title3" class="content">
          5개를 삭제할까요?
        </p>
      </div>
      <div class="modal-foot">
        <button type="button" class="button primary-line" aria-label="취소">취소</button>
        <button type="button" class="button primary-fill" aria-label="확인">확인</button>
      </div>
    </div>
    <!-- ▷ [4] Wi-Fi 연결 해제/중단 컨펌 -->
    <div class="modal modal-confirm" role="dialog" aria-modal="true" aria-labelledby="modal-title4">
      <div class="modal-body">
        <p id="modal-title4" class="content">
          Wi-Fi 연결이 끊어졌습니다.<br>
          데이터로 전환되면 요금이<br>
          발생할 수 있습니다.<br>
          전송을 중단할까요?
        </p>
      </div>
      <div class="modal-foot">
        <button type="button" class="button primary-line" aria-label="취소">취소</button>
        <button type="button" class="button primary-fill" aria-label="확인">확인</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use '@/assets/scss/components/_modal.scss' as *;
</style>
