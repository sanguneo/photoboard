<script setup lang="ts">
</script>

<template>
  <main aria-label="사진보드판 메인 콘텐츠">
    <section class="board-edit-area" aria-label="이미지 편집 프리뷰">
      <div class="board-preview" aria-hidden="false">
        <div class="crop-tool" style="position: absolute" data-target="download" aria-hidden="true" aria-label="자르기 도구">...</div>
        <div class="rotate-tool" style="position: absolute" data-target="boardEdit" aria-hidden="true" aria-label="회전 도구">...</div>
        <img src="@/assets/images/board-view.png" alt="편집할 이미지 미리보기" >
      </div>
    </section>

    <section class="edit-button-box" aria-label="편집 도구 버튼">
      <button type="button" class="button edit-btn" data-role="delete" aria-pressed="false" aria-label="화살표 도구 켜기">
        <span class="icon btn-arrow">
          <img src="@/assets/images/delete-white.svg" alt="삭제 아이콘" >
        </span>
        <span class="btn-icon-title">파일 삭제</span>
      </button>

      <button type="button" class="button edit-btn" data-role="download" aria-pressed="false" aria-label="자르기 도구 켜기">
        <img src="@/assets/images/download-white.svg" alt="다운로드 아이콘" >
        <span class="btn-icon-title">다운로드</span>
      </button>

      <button type="button" class="button edit-btn" data-role="boardEdit" aria-pressed="false" aria-label="회전 도구 켜기">
        <img src="@/assets/images/panel-white.svg" alt="보드판 수정 아이콘" >
        <span class="btn-icon-title">보드판 수정</span>
      </button>
    </section>
  </main>
</template>

<style lang="scss">
@use '@/assets/scss/pages/_xpdoc.scss' as *;
</style>
