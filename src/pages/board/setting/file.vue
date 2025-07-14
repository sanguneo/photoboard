<script setup lang="ts">
import { FILENAME_TEMPLATES } from '@/shared/constants/setting.constants.ts';

const settingStore = useSettingStore();
const { filenameTemplate } = storeToRefs(settingStore);

</script>

<template>
  <main aria-label="메인 콘텐츠">
    <section class="setting-box" aria-label="사진 등록 작성 영역">
      <ul class="setting-list" role="radiogroup" aria-label="설정 항목 선택">
        <li v-for="(item, key) of FILENAME_TEMPLATES" :key="key" class="setting-list-item">
          <div class="radio-box">
            <input :id="`radio_${key}`" v-model="filenameTemplate" type="radio" class="radio-box_btn" name="radio" :aria-labelledby="`label_${key}`" :value="key">
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
