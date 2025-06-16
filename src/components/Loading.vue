<script setup lang="ts">
const loadingStore = useLoadingStore();
const { loading } = storeToRefs(loadingStore);

const isLoading = computed(() => loading.value);
</script>

<template>
  <section v-if="isLoading" class="loading_area">
    <span class="loader"/>
  </section>
</template>

<style lang="scss" scoped>
.loading_area {
  z-index: 100;
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  background-color: rgba(0,0,0,0.1);
}

.loader {
  width: 40px;
  height: 40px;
  border: 6px solid #f4f4f4;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  animation: rotation 1s linear infinite;
  background-color: rgba(0,0,0,0);
}

@keyframes rotation {
  0% {
      transform: rotate(0deg)
  }

  100% {
      transform: rotate(360deg)
  }
}
</style>
