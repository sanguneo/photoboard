<script setup lang="ts">
const emit = defineEmits(['closeModal']);

</script>

<template>
  <div class="modal-text-box">
    <p>Xp문서함(PC) > 단지문서함 > 사진보드판</p>
  </div>
  <div class="modal-foot">
    <button type="button" class="button primary-line" aria-label="추가 촬영">추가 촬영</button>
    <button type="button" class="button primary-fill" aria-label="확인" @click="emit('closeModal')">확인</button>
  </div>
</template>
