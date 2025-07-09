<script setup lang="ts">
import Header from '@/components/layout/Header.vue';
import { getRouteInfo } from '@/shared/constants/route.constants.ts';

const route = useRoute();
const routeOptions = computed(() => getRouteInfo(route.path));


onMounted(() => {
  let resizeRaf:number = 0;
  function setAppHeight() {
    document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`);
  }
  function onResize() {
    if (resizeRaf) cancelAnimationFrame(resizeRaf);
    resizeRaf = requestAnimationFrame(setAppHeight);
  }
  setAppHeight();
  window.addEventListener('resize', onResize);
});
</script>

<template>
  <div class="container" :class="routeOptions?.container || 'bg-content'">
    <Header v-if="routeOptions?.header" :options="routeOptions.header"/>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
</style>
