<script setup lang="ts">
definePageMeta({
  header: {
    type: 3,
    title: '보드판 노출 위치',
    back: true,
  },
});
type TPosition = 'rightBottom'|'leftBottom'|'leftTop'|'rightTop'
const position = ref<TPosition>('rightBottom');
</script>

<template>
  <main aria-label="메인 콘텐츠">
    <section class="setting-box" aria-label="사진 등록 작성 영역">
      <div class="setting-info">
        <div class="board-preview-position">
          <img id="imgPosition" :class="position" src="@/assets/images/board-position-img.svg" alt="보드판 위치 안내 이미지">
        </div>
      </div>
      <ul class="setting-list" role="radiogroup" aria-label="설정 항목 선택">
        <li class="setting-list-item">
          <div class="radio-box">
            <input id="radio1" v-model="position" type="radio" class="radio-box_btn" name="radio" aria-labelledby="rightBottom" value="rightBottom">
            <label id="label1" class="radio-box_name" for="radio1">
              <span class="r_circle"/>
              오른쪽 아래
            </label>
          </div>
        </li>
        <li class="setting-list-item">
          <div class="radio-box">
            <input id="radio2" v-model="position" type="radio" class="radio-box_btn" name="radio" aria-labelledby="leftBottom" value="leftBottom">
            <label id="label2" class="radio-box_name" for="radio2">
              <span class="r_circle"/>
              왼쪽 아래
            </label>
          </div>
        </li>
        <li class="setting-list-item">
          <div class="radio-box">
            <input id="radio3" v-model="position" type="radio" class="radio-box_btn" name="radio" aria-labelledby="leftTop" value="leftTop">
            <label id="label3" class="radio-box_name" for="radio3">
              <span class="r_circle"/>
              왼쪽 위
            </label>
          </div>
        </li>
        <li class="setting-list-item">
          <div class="radio-box">
            <input id="radio4" v-model="position" type="radio" class="radio-box_btn" name="radio" aria-labelledby="rightTop" value="rightTop">
            <label id="label4" class="radio-box_name" for="radio4">
              <span class="r_circle"/>
              오른쪽 위
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
