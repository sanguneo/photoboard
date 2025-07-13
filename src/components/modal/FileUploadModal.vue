<script setup lang="ts"></script>

<template>
  <div class="modal-text">
    <p>
      파일 업로드가 완료되기 전에 화면을 닫거나,<br />
      앱을 종료하는 경우 업로드가 중단될 수 있습니다.
    </p>
  </div>
  <div class="upload-progress">
    <progress class="progressbar" value="20" max="100" aria-label="진행률" />
    <div class="upload-counting">
      <strong>175</strong>
      <span>/ 1,748개</span>
    </div>
  </div>
</template>
