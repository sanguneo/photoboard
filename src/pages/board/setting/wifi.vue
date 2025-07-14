<script setup lang="ts">
</script>

<template>
  <main aria-label="메인 콘텐츠">
    <section class="setting-box" aria-label="사진 등록 작성 영역">
      <div class="setting-info">
        <p>
          저장한 사진을 Xp문서함(PC) 으로 자동 전송합니다.<br >
          단, 네트워크 상태에 따라 데이터 요금이 부과될 수 있습니다.
        </p>
      </div>
      <ul class="setting-list" role="radiogroup" aria-label="설정 항목 선택">
        <li class="setting-list-item">
          <div class="radio-box">
            <input id="radio2" type="radio" class="radio-box_btn" name="radio" aria-labelledby="label2" checked >
            <label id="label2" class="radio-box_name" for="radio2">
              <span class="r_circle" />
              항상
            </label>
          </div>
        </li>
        <li class="setting-list-item">
          <div class="radio-box">
            <input id="radio1" type="radio" class="radio-box_btn" name="radio" aria-labelledby="label1" >
            <label id="label1" class="radio-box_name" for="radio1">
              <span class="r_circle" />
              Wi-Fi에서만 전송
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
