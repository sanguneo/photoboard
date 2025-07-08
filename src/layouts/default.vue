<script setup lang="ts">
import Header from '@/components/layout/Header.vue';

const route = useRoute();

onMounted(() => {
  function setAppHeight() {
    document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`);
  }

  window.addEventListener('resize', setAppHeight);
  setAppHeight();

})
</script>

<template>
  <div class="container" :class="route.meta?.container || 'bg-content'">
    <Header/>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
</style>
