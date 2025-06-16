<script setup lang="ts">
import type { NuxtError } from '#app';

withDefaults(defineProps<{ error: NuxtError; }>(), {
  error: ()=> ({} as NuxtError),
});

const resetError = () => clearError({ redirect:'/' });

</script>

<template>
  <div class="container m-auto h-screen pb-10 px-4">
    <img title="에러이미지" src="@/assets/images/error.svg" class="w-[50%]">
    <h3 class="text-xl font-bold p-4">
      페이지를 찾을 수 없습니다!
    </h3>
    <h4> {{ error?.statusCode }}</h4>
    <p class="text-center mb-6">
      주소를 잘못 입력하셨거나<br>
      페이지의 주소가 변경, 삭제되어 찾을 수 없습니다 <br>
      다시 확인해 주세요
    </p>
    <button class="border rounded-lg py-2 px-4" @click.prevent="resetError">
      홈으로 이동
    </button>
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
