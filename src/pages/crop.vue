<script setup lang="ts">
import KonvaCropper from '@/components/KonvaCropper.vue';

const route = useRoute();
const router = useRouter();

const imageSrc = computed(() => route.query.imageSrc as string);
const cropperRef = ref();
const cropImage = () => {
  router.push({
    path: '/konva',
    query: {
      imageSrc: cropperRef.value?.cropImage(),
    },
  });
};
</script>

<template>
  <KonvaCropper ref="cropperRef" :image-src="imageSrc" />
  <button @click="cropImage">확인</button>
</template>

<style lang="scss" scoped>
button {
  width: 150px;
  height: 40px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #45a049;
  }
}
</style>
