<script setup lang="ts">
defineEmits(['closeModal']);
</script>

<template>
  <ul class="file-options-list">
    <li class="file-options-item">
      <button type="button" class="file-options-button">
        <img src="@/assets/images/name-edit.svg" alt="이름 변경" />
        <span>이름 변경</span>
      </button>
    </li>
    <li class="file-options-item">
      <button type="button" class="file-options-button">
        <img src="@/assets/images/board-edit.svg" alt="보드판 수정" />
        <span>보드판 수정</span>
      </button>
    </li>
    <li class="file-options-item">
      <button type="button" class="file-options-button">
        <img src="@/assets/images/download.svg" alt="다운로드" />
        <span>다운로드</span>
      </button>
    </li>
  </ul>
  <button type="button" class="file-options-button file-delete" @click="$emit('closeModal')">
    <img src="@/assets/images/delete.svg" alt="파일 삭제" />
    <span>파일 삭제</span>
  </button>
</template>
