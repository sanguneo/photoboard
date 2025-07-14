<script setup lang="ts">
definePageMeta({
  header: {
    type: 'photo',
    boardBtn: {
      isEdit: true,
      label: '편집 완료 확인',
      text: '확인',
    },
    back: true,
  },
  container: 'board-edit',
});
</script>

<template>
  <main aria-label="사진보드판 메인 콘텐츠">
    <section class="board-edit-area" aria-label="이미지 편집 프리뷰">
      <div class="board-preview" aria-hidden="false">
        <div class="arrow-sticker" data-target="arrow" aria-hidden="false">
          <button class="arrow-sticker-close" type="button" aria-label="화살표 스티커 닫기">
            <img src="@/assets/images/arrow-close-btn.svg" alt="닫기 아이콘" >
          </button>
          <img src="@/assets/images/arrow-icon.svg" alt="화살표 아이콘" class="arrow-icon" >
        </div>

        <div class="crop-tool" style="position: absolute" data-target="crop" aria-hidden="true" aria-label="자르기 도구">...</div>

        <div class="rotate-tool" style="position: absolute" data-target="rotate" aria-hidden="true" aria-label="회전 도구">...</div>

        <img src="@/assets/images/test-img.png" alt="편집할 이미지 미리보기" >
      </div>
    </section>

    <section class="edit-button-box" aria-label="편집 도구 버튼">
      <button type="button" class="button edit-btn" data-role="arrow" aria-pressed="false" aria-label="화살표 도구 켜기">
        <span class="icon btn-arrow">
          <img src="@/assets/images/btn-arrow-white.svg" alt="화살표 아이콘" >
        </span>
        <span class="btn-icon-title">화살표</span>
      </button>

      <button type="button" class="button edit-btn" data-role="crop" aria-pressed="false" aria-label="자르기 도구 켜기">
        <img src="@/assets/images/crop-white.svg" alt="자르기 아이콘" >
        <span class="btn-icon-title">자르기</span>
      </button>

      <button type="button" class="button edit-btn" data-role="rotate" aria-pressed="false" aria-label="회전 도구 켜기">
        <img src="@/assets/images/rotate-white.svg" alt="회전 아이콘" >
        <span class="btn-icon-title">사진 회전</span>
      </button>
    </section>
  </main>
</template>

<style lang="scss">
@use '@/assets/scss/pages/_board.scss' as *;
</style>
