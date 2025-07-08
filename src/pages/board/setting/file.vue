<script setup lang="ts">
definePageMeta({
  header: {
    type: 3,
    title: '파일 이름',
    back: true,
  },
});
</script>

<template>
  <main aria-label="메인 콘텐츠">
    <section class="setting-box" aria-label="사진 등록 작성 영역">
      <ul class="setting-list" role="radiogroup" aria-label="설정 항목 선택">
        <li class="setting-list-item">
          <div class="radio-box">
            <input id="radio1" type="radio" class="radio-box_btn" name="radio" aria-labelledby="label1">
            <label id="label1" class="radio-box_name" for="radio1">
              <span class="r_circle"/>
              날짜+내용
            </label>
          </div>
        </li>
        <li class="setting-list-item">
          <div class="radio-box">
            <input id="radio2" type="radio" class="radio-box_btn" name="radio" aria-labelledby="label2">
            <label id="label2" class="radio-box_name" for="radio2">
              <span class="r_circle"/>
              날짜+위치
            </label>
          </div>
        </li>
        <li class="setting-list-item">
          <div class="radio-box">
            <input id="radio3" type="radio" class="radio-box_btn" name="radio" aria-labelledby="label3">
            <label id="label3" class="radio-box_name" for="radio3">
              <span class="r_circle"/>
              내용
            </label>
          </div>
        </li>
        <li class="setting-list-item">
          <div class="radio-box">
            <input id="radio4" type="radio" class="radio-box_btn" name="radio" aria-labelledby="label4">
            <label id="label4" class="radio-box_name" for="radio4">
              <span class="r_circle"/>
              위치
            </label>
          </div>
        </li>
      </ul>
    </section>
  </main>
</template>


<style lang="scss">
@use '@/assets/scss/pages/_boardSetting.scss' as *;
</style>
