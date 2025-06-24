<script setup lang="ts">
const imageFile = ref<File | null>(null);
const imageSrc = ref<string>('');

interface IInputList {
  title: string;
  value: string;
  placeholder?: string;
}

const inputList = ref<IInputList[]>([
  { title: '단지명', value: '단지명', placeholder: '단지명' },
  { title: '위치', value: '위치', placeholder: '위치' },
  { title: '내용', value: '내용', placeholder: '내용' },
  { title: '날짜', value: '날짜', placeholder: '날짜' },
]);

const konvaCanvas = ref();
const croppedImage = ref<string | null>(null);
const cropImage = () => {
  croppedImage.value = konvaCanvas.value.cropImage();
};

const photoInfoList = ref<{ title: string; content: string }[]>([]);

const handleFile = (e: Event) => {
  const file = (e.target as HTMLInputElement)?.files?.[0];
  if (!file) return;
  imageFile.value = file;
};

const update = () => {
  if (imageFile.value) {
    const reader = new FileReader();
    reader.onload = () => {
      imageSrc.value = reader.result as string;
    };
    reader.readAsDataURL(imageFile.value);
  }

  photoInfoList.value = inputList.value.map((field) => ({
    title: field.title,
    content: field.value,
  }));
};
</script>

<template>
  <div class="input-container">
    <div v-for="input in inputList" :key="input.title" class="input-group">
      <input v-model="input.value" :placeholder="input.placeholder" maxlength="30" />
    </div>
    <input type="file" accept="image/*" class="file-input" @change="handleFile" />
    <div class="button-group">
      <button @click="update">캔버스 업데이트</button>
      <button @click="konvaCanvas.rotateImage">회전</button>
      <button @click="cropImage">자르기</button>
    </div>
  </div>
  <div class="canvas-container">
    <h3>캔버스</h3>
    <KonvaCanvas ref="konvaCanvas" :width="500" :height="500" :image-src="imageSrc" :photo-info-list="photoInfoList" />
    <h3>자른 이미지</h3>
    <div class="cropped-image">
      <img v-if="croppedImage" :src="croppedImage" alt="" />
    </div>
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
