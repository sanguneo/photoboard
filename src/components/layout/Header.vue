<script setup lang="ts">
import type { IHeaderMeta } from '@/shared/constants/route.constants.ts';

const router = useRouter();

const { options } = defineProps<{ options: IHeaderMeta }>();

const isOnTop = ref<boolean>(true);
const isTipActive = ref<boolean>(false);

const activateTip = (e: Event) => {
  isTipActive.value = e.type === 'focus';
};

onMounted(() => {
  let scrollRaf:number = 0;
  const setIsOnTop = () => {
    isOnTop.value = window.scrollY === 0;
  }
  const onScroll = () => {
    if (scrollRaf) cancelAnimationFrame(scrollRaf);
    scrollRaf = requestAnimationFrame(setIsOnTop);
  }
  setIsOnTop();
  window.addEventListener('scroll', onScroll);
});
</script>

<template>
  <header v-if="options.type === 0" class="header" :class="{shadow: !isOnTop}" aria-label="앱 상단 헤더">
    <h1 class="header-title">
      사진보드판
      <div class="doc-head-btn" aria-hidden="false">
        <button
          type="button" class="doc-tip-btn" aria-label="문서 저장 경로 안내" tabindex="1"
          @focus="activateTip" @blur="activateTip">
          <img src="@/assets/images/info-big.svg" alt="도움말 아이콘" class="icon icon-20">
        </button>
        <div class="doc-tip-content" :aria-hidden="!isTipActive ? 'true' : 'false'">
          <p>
            등록한 파일은 ‘Xp문서함(PC) &gt; 단지문서함 &gt; <strong>사진보드판</strong>’ 폴더에 자동 저장됩니다.
          </p>
        </div>
      </div>
    </h1>
    <button type="button" class="icon-btn close-btn" aria-label="닫기">
      <img src="@/assets/images/close-btn.svg" alt="">
    </button>
  </header>


  <header v-else class="header" :class="{shadow: !isOnTop}" aria-label="앱 상단 헤더">
    <a v-if="options.back" type="button" class="icon-btn" aria-label="뒤로가기" @click="router.back()">
      <img src="@/assets/images/back.svg" alt="뒤로가기 아이콘">
    </a>

    <h2 v-if="options.title">{{ options.title }}</h2>

    <div v-if="options.type === 1" class="board-head-btn">
      <button v-if="options.boardBtn?.isEdit" type="button" class="icon-btn" aria-label="카메라" aria-hidden="true">
        <img src="@/assets/images/camera.svg" alt="카메라 아이콘">
      </button>
      <NuxtLink v-if="options.boardBtn?.isEdit" to="/board/setting" class="icon-btn" aria-label="사진 등록 설정" aria-hidden="true">
        <img src="@/assets/images/setting.svg" alt="설정 아이콘">
      </NuxtLink>
      <button
        v-if="options.boardBtn" type="button" class="button text-btn primary"
        :aria-label="options.boardBtn?.label">{{ options.boardBtn?.text }}</button>
    </div>
    <div v-else-if="options.type === 2" class="doc-head-btn" aria-hidden="false">
      <button type="button" class="doc-tip-btn" aria-label="문서 저장 경로 안내" tabindex="1"
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

