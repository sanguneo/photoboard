<script setup lang="ts">
const imageSrc = ref<string>('');
const texts = [
  { title: '단지명', content: '아파트아이' },
  { title: '위치', content: '110동 101호' },
  { title: '내용', content: '소방 점검 소방 점검' },
  { title: '날짜', content: '2025.10.01' },
];

const handleFile = (e: Event) => {
  const file = (e.target as HTMLInputElement).files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    imageSrc.value = reader.result as string;
  };
  reader.readAsDataURL(file);
};
</script>
<template>
  <div class="canvas-wrap">
    <input type="file" accept="image/*" @change="handleFile" />
    <div class="canvas">
      <Canvas v-if="imageSrc" :image-src="imageSrc" :text-list="texts" :width="360" :height="720" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.canvas-wrap {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .canvas {
    flex: 1;
    overflow: auto;
  }
}
</style>
