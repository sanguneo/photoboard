export const useKonvaStore = defineStore('konva', () => {
  const originalImage = ref<string | undefined>(undefined);

  const setOriginalImage = (image: string) => {
    originalImage.value = image;
  };

  return {
    originalImage,
    setOriginalImage,
  };
});
