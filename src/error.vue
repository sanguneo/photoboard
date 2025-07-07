<script setup lang="ts">
import type { NuxtError } from '#app';

withDefaults(defineProps<{ error: NuxtError; }>(), {
  error: ()=> ({} as NuxtError),
});

const resetError = () => clearError({ redirect:'/' });

</script>

<template>
  <div class="container m-auto h-screen pb-10 px-4">
  </div>
</template>

<style lang="scss" scoped>
.container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
