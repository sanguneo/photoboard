<script setup lang="ts">
import { FILENAME_TEMPLATES, BOARD_POSITIONS, CONNECTION } from '@/shared/constants/setting.constants.ts';

const settingStore = useSettingStore();
const { filenameTemplate, useLargeFont, useCellular, boardPosition } = storeToRefs(settingStore);

</script>

<template>
  <!-- 📝 메인 콘텐츠 -->
  <main aria-label="사진 등록 메인 콘텐츠">
    <section class="setting-box" aria-label="사진 등록 설정 영역">
      <ul class="setting-list" role="list">
        <!-- 📁 파일명 설정 -->
        <li class="setting-list-item">
          <strong class="setting-title">파일 이름</strong>
          <NuxtLink to="/board/setting/file" class="text-link" aria-label="파일이름 설정 페이지 이동">
            <span>{{FILENAME_TEMPLATES[filenameTemplate]}}</span>
            <span class="icon">
              <img src="@/assets/images/text-arrow.svg" alt="화살표 아이콘" >
            </span>
          </NuxtLink>
          <p class="setting-list-item-info">파일 이름 형식을 선택해 주세요.</p>
        </li>

        <!-- 🔠 보드판 큰 글씨 여부 -->
        <li class="setting-list-item">
          <strong class="setting-title">보드판 큰 글씨</strong>
          <label class="switch">
            <input v-model="useLargeFont" type="checkbox" class="switch-input" aria-label="스위치">
            <span class="switch-slider" />
          </label>
          <p class="setting-list-item-info">큰 글씨로 설정하면 보드판 크기가 커집니다.</p>
        </li>

        <!-- 📤 Wi-Fi 전송 설정 -->
        <li class="setting-list-item">
          <strong class="setting-title">Xp문서함 사진 전송</strong>
          <NuxtLink to="/board/setting/wifi" class="text-link" aria-label="Xp문서함 전송 설정 페이지 이동">
            <span>{{ CONNECTION(useCellular) }}</span>
            <span class="icon">
              <img src="@/assets/images/text-arrow.svg" alt="화살표 아이콘" >
            </span>
          </NuxtLink>
          <p class="setting-list-item-info">저장한 사진을 Xp문서함으로 자동 전송합니다.</p>
        </li>

        <!-- 📍 노출 위치 설정 -->
        <li class="setting-list-item">
          <strong class="setting-title">보드판 노출 위치</strong>
          <NuxtLink to="/board/setting/position" class="text-link" aria-label="보드판 위치 설정 페이지 이동">
            <span>{{BOARD_POSITIONS[boardPosition]}}</span>
            <span class="icon">
              <img src="@/assets/images/text-arrow.svg" alt="화살표 아이콘" >
            </span>
          </NuxtLink>
        </li>
      </ul>
    </section>
  </main>
</template>

<style lang="scss">
@use '@/assets/scss/pages/_boardSetting.scss' as *;
</style>
