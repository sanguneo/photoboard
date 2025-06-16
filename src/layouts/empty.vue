<script setup lang="ts">
</script>

<template>
  <div class="wrap">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  min-height: 100%;
  height: auto;
  gap: 20px;
  display: flex;
  flex-direction: column;
}
</style>
