<script setup lang="ts"></script>

<template>
  <div class="modal-form">
    <div class="form-wrap">
      <input class="modal-input error" type="text" value="20250915 101동 정문 앞" />
      <button type="button" class="icon-btn clear-btn" aria-label="초기화">
        <img src="@/assets/images/clear.svg" alt="초기화" />
      </button>
    </div>
    <span class="form-vail">:/*?<>|는 입력할 수 없습니다.</span>
  </div>
  <div class="modal-foot">
    <button type="button" class="button primary-line" aria-label="취소">취소</button>
    <button type="button" class="button primary-fill" aria-label="이름 변경">이름 변경</button>
  </div>
</template>
