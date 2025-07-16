export const useFile = () => {
  const file = ref<File | null>(null);

  /**
   * file이 움직이면 그 파일 image를 imageurl로 변경하여 내려주는 변수
   */
  const previewUrl = computed<string | null>((oldValue) => {
    try {
      if (oldValue) URL.revokeObjectURL(oldValue);
      if (file.value?.type.startsWith('image/')) {
        return URL.createObjectURL(file.value);
      }
      return null;
    } catch {
      return null;
    }
  });

  /**
   * router를 이동할때 메모리 누수 방지를 위해 clear를 꼭 진행하여주시기 바랍니다.
   */
  const clear = () => {
    if (previewUrl.value) URL.revokeObjectURL(previewUrl.value);
    file.value = null;
  };

  return {
    file,
    previewUrl,
    clear,
  };
};
