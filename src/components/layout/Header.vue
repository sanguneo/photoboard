<script setup lang="ts">
interface IHeaderMeta {
  type: 0|1|2|3;
  title?: string;
  boardBtn?: {
    isEdit?: boolean;
    label?: string;
    text?: string;
  };
  back?: boolean;
}

const route = useRoute();
const router = useRouter();

const headerOptions = route.meta.header as IHeaderMeta;

const isOnTop = ref<boolean>(true);
onMounted(() => {
  window.addEventListener('scroll', function () {
    isOnTop.value = window.scrollY === 0;
  });
});
</script>

<template>
  <header v-if="headerOptions.type === 0" class="header" :class="{shadow: !isOnTop}" aria-label="앱 상단 헤더">
    <h1 class="header-title">
      사진보드판
      <div class="doc-head-btn" aria-hidden="false">
        <button type="button" class="doc-tip-btn" aria-label="문서 저장 경로 안내">
          <img src="@/assets/images/info-big.svg" alt="도움말 아이콘" class="icon icon-20">
        </button>
        <div class="doc-tip-content" aria-hidden="true">
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


  <header v-else class="header" aria-label="앱 상단 헤더">
    <a v-if="headerOptions.back" type="button" class="icon-btn" aria-label="뒤로가기" @click="router.back()">
      <img src="@/assets/images/back.svg" alt="뒤로가기 아이콘">
    </a>

    <h2 v-if="headerOptions.title">{{ headerOptions.title }}</h2>

    <div v-if="headerOptions.type === 1" class="board-head-btn">
      <button v-if="headerOptions.boardBtn?.isEdit" type="button" class="icon-btn" aria-label="카메라" aria-hidden="true">
        <img src="@/assets/images/camera.svg" alt="카메라 아이콘">
      </button>
      <NuxtLink v-if="headerOptions.boardBtn?.isEdit" to="/board/setting" class="icon-btn" aria-label="사진 등록 설정" aria-hidden="true">
        <img src="@/assets/images/setting.svg" alt="설정 아이콘">
      </NuxtLink>
      <button
        v-if="headerOptions.boardBtn" type="button" class="button text-btn primary"
        :aria-label="headerOptions.boardBtn?.label">{{ headerOptions.boardBtn?.text }}</button>
    </div>
    <div v-else-if="headerOptions.type === 2" class="doc-head-btn" aria-hidden="false">
      <button type="button" class="doc-tip-btn" aria-label="문서 저장 경로 안내">
        <img src="@/assets/images/info.svg" alt="도움말 아이콘">
        저장위치
      </button>
      <div class="doc-tip-content" aria-hidden="true">
        <p>
          등록한 파일은 ‘Xp문서함(PC) &gt; 단지문서함 &gt; <strong>사진보드판</strong>’ 폴더에 자동 저장됩니다.
        </p>
      </div>
    </div>
  </header>
</template>

