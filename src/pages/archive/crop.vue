<script setup lang="ts">
import KonvaCropper from '@/components/archive/KonvaCropper.vue';

const router = useRouter();
const konvaStore = useKonvaStore();
const { originalImage } = storeToRefs(konvaStore);

const cropperRef = ref();
const cropImage = () => {
  if (!originalImage.value) return;
  cropperRef.value?.cropImage();
  router.push({
    path: '/konva',
  });
};
</script>

<template>
  <KonvaCropper ref="cropperRef" :image-src="originalImage" />
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
