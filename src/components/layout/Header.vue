<script setup lang="ts">
import type { IHeaderMeta } from '@/shared/constants/route.constants.ts';

const router = useRouter();
const { checkWifiAsBoolean } = useNative();

const { options } = defineProps<{ options: IHeaderMeta }>();

const settingStore = useSettingStore();
const { connection } = storeToRefs(settingStore);

const isOnTop = ref<boolean>(true);
const isTipActive = ref<boolean>(false);

const activateTip = (e: Event) => {
  isTipActive.value = e.type === 'focus';
};

const onClickSelectImage = () => {
  const boardFileInput = document.getElementById('boardFileInput');
  boardFileInput?.click();
};

onMounted(() => {
  let scrollRaf: number = 0;
  const setIsOnTop = () => {
    isOnTop.value = window.scrollY === 0;
  };
  const onScroll = () => {
    if (scrollRaf) cancelAnimationFrame(scrollRaf);
    scrollRaf = requestAnimationFrame(setIsOnTop);
  };
  setIsOnTop();
  window.addEventListener('scroll', onScroll);

  setInterval(async () => {
    connection.value = await checkWifiAsBoolean().then(res => res ? 'wifi' : 'cellular').catch(() => null);
  }, 3000);
});
</script>

<template>
  <div style="position: absolute;z-index: 10;top: 100px;right: 20px;width: 50px;height: 40px;background-color: white;">{{connection}}</div>
  <header v-if="options.type === 'main'" class="header" :class="{ shadow: !isOnTop }" aria-label="앱 상단 헤더">
    <div class="header-title">
      <h1>사진보드판</h1>
      <div class="doc-head-btn" aria-hidden="false">
        <button type="button" class="doc-tip-btn" aria-label="문서 저장 경로 안내" tabindex="1" @focus="activateTip" @blur="activateTip">
          <img src="@/assets/images/info-big.svg" alt="도움말 아이콘" class="icon icon-20">
        </button>
        <div class="doc-tip-content" :aria-hidden="!isTipActive ? 'true' : 'false'">
          <p>
            등록한 파일은 ‘Xp문서함(PC) &gt; 단지문서함 &gt; <strong>사진보드판</strong>’ 폴더에 자동 저장됩니다.
          </p>
        </div>
      </div>
    </div>
    <button type="button" class="icon-btn close-btn" aria-label="닫기">
      <img src="@/assets/images/close-btn.svg" alt="">
    </button>
  </header>

  <header v-else class="header" :class="{shadow: !isOnTop}" aria-label="앱 상단 헤더">
    <a v-if="options.back" type="button" class="icon-btn" aria-label="뒤로가기" @click="router.back()">
      <img src="@/assets/images/back.svg" alt="뒤로가기 아이콘">
    </a>
    <h2 v-if="options.title">{{ options.title }}</h2>
    <div v-if="options.type === 'photo'" class="board-head-btn">
      <button type="button" class="icon-btn" aria-label="카메라" @click="onClickSelectImage">
        <img src="@/assets/images/camera.svg" alt="카메라 아이콘">
      </button>
      <NuxtLink to="/board/setting" class="icon-btn" aria-label="사진 등록 설정" >
        <img src="@/assets/images/setting.svg" alt="설정 아이콘">
      </NuxtLink>
      <button
        v-if="options.boardBtn" type="button" class="button text-btn primary"
        :aria-label="options.boardBtn?.label">{{ options.boardBtn?.text }}</button>
    </div>
    <div v-else-if="options.type === 'help'" class="doc-head-btn" aria-hidden="false">
      <button
        type="button" class="doc-tip-btn" aria-label="문서 저장 경로 안내" tabindex="1"
        @focus="activateTip" @blur="activateTip">
        <img src="@/assets/images/info.svg" alt="도움말 아이콘">
        저장위치
      </button>
      <div class="doc-tip-content" :aria-hidden="!isTipActive ? 'true' : 'false'">
        <p>
          등록한 파일은 ‘Xp문서함(PC) &gt; 단지문서함 &gt; <strong>사진보드판</strong>’ 폴더에 자동 저장됩니다.
        </p>
      </div>
    </div>
  </header>
</template>
