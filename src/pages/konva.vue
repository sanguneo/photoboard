<script setup lang="ts">
const imageFile = ref<File | null>(null);
const imageSrc = ref<string>('');
const route = useRoute();
const router = useRouter();

interface IInputList {
  title: string;
  content: string;
  placeholder?: string;
}

const inputList = ref<IInputList[]>([
  { title: '단지명', content: '단지명', placeholder: '단지명' },
  { title: '위치', content: '위치', placeholder: '위치' },
  { title: '내용', content: '내용', placeholder: '내용' },
  { title: '날짜', content: '날짜', placeholder: '날짜' },
]);

const konvaCanvas = ref();

const handleFile = (e: Event) => {
  const file = (e.target as HTMLInputElement)?.files?.[0];
  if (!file) return;
  imageFile.value = file;
  const reader = new FileReader();
  reader.onload = () => {
    imageSrc.value = reader.result as string;
  };
  reader.readAsDataURL(imageFile.value);
};

onMounted(() => {
  const imageSrcQuery = route.query.imageSrc;
  if (imageSrcQuery) {
    imageSrc.value = imageSrcQuery as string;
  }
});
</script>

<template>
  <div class="input-container">
    <div v-for="input in inputList" :key="input.title" class="input-group">
      <input v-model="input.content" :placeholder="input.placeholder" maxlength="30" />
    </div>
    <input type="file" accept="image/*" class="file-input" @change="handleFile" />
    <div class="button-group">
      <button @click="konvaCanvas.rotateImage">회전</button>
      <button @click="router.push({ path: '/crop', query: { imageSrc: imageSrc } })">자르기</button>
    </div>
  </div>
  <div class="canvas-container">
    <h3>캔버스</h3>
    <KonvaCanvas ref="konvaCanvas" :width="500" :height="500" :image-src="imageSrc" :photo-info-list="inputList" />
  </div>
</template>

<style lang="scss" scoped>
.input-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;

  .input-group {
    width: 500px;
    input {
      width: 100%;
      height: 40px;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  }

  .button-group {
    display: flex;
    gap: 10px;
  }

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
}

.canvas-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.cropped-image {
  width: 500px;
  height: 500px;
  border: 1px solid #ccc;
}

.file-input {
  width: 500px;
  margin-bottom: 20px;
  padding: 10px 20px;
  background: #fff;
  border: none;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgb(0 0 0 / 0.1);
}
</style>
