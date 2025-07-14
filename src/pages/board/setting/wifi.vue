<script setup lang="ts">
import { CONNECTION } from '@/shared/constants/setting.constants.ts';

const settingStore = useSettingStore();
const { useCellular } = storeToRefs(settingStore);

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
            <input id="radio_true" v-model="useCellular" type="radio" class="radio-box_btn" name="radio" aria-labelledby="label_true" :value="true" >
            <label id="label_true" class="radio-box_name" for="radio_true">
              <span class="r_circle" />
              {{ CONNECTION(true) }}
            </label>
          </div>
        </li>
        <li class="setting-list-item">
          <div class="radio-box">
            <input id="radio_false" v-model="useCellular" type="radio" class="radio-box_btn" name="radio" aria-labelledby="label_false" :value="false" >
            <label id="label_false" class="radio-box_name" for="radio_false">
              <span class="r_circle" />
              {{ CONNECTION(false) }}
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
