<script setup lang="ts">
const imageFile = ref<File | null>(null);
const imageSrc = ref<string>('');

interface IInputList {
  title: string;
  value: string;
  placeholder?: string;
}

const inputList = ref<IInputList[]>([
  { title: '단지명', value: '', placeholder: '단지명' },
  { title: '위치', value: '', placeholder: '위치' },
  { title: '내용', value: '', placeholder: '내용' },
  { title: '날짜', value: '', placeholder: '날짜' },
]);

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
    <input type="file" accept="image/*" @change="handleFile" />
    <button @click="update">완료</button>
  </div>

  <KonvaCanvas :width="500" :height="500" :image-src="imageSrc" :photo-info-list="photoInfoList" />
</template>

<style lang="scss" scoped>
.input-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;

  .input-group {
    input {
      width: 300px;
      height: 40px;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  }

  button {
    width: 100px;
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
</style>
