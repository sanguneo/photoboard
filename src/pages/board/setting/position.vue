<script setup lang="ts">
import { BOARD_POSITIONS } from '@/shared/constants/setting.constants.ts';

const settingStore = useSettingStore();
const { boardPosition } = storeToRefs(settingStore);

</script>

<template>
  <main aria-label="메인 콘텐츠">
    <section class="setting-box" aria-label="사진 등록 작성 영역">
      <div class="setting-info">
        <div class="board-preview-position">
          <img id="imgPosition" :class="boardPosition" src="@/assets/images/board-position-img.svg" alt="보드판 위치 안내 이미지" >
        </div>
      </div>
      <ul class="setting-list" role="radiogroup" aria-label="설정 항목 선택">
        <li v-for="(item, key) of BOARD_POSITIONS" :key="key" class="setting-list-item">
          <div class="radio-box">
            <input :id="`radio_${key}`" v-model="boardPosition" type="radio" class="radio-box_btn" name="radio" :aria-labelledby="`label_${key}`" :value="key" >
            <label :id="`label_${key}`" class="radio-box_name" :for="`radio_${key}`">
              <span class="r_circle" />
              {{ item }}
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
