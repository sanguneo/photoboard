/**
 * @description 토스트
 * @schema message = 토스트 메시지
 * @schema duration = 토스트 지속시간
 */
interface IToastOption {
  message: string;
  duration?: number;
}

export const useToastStore = defineStore('toast', () => {
  const isVisible = ref<boolean>(false);

  const toastOption = ref<IToastOption>({
    duration: 3000,
    message: '',
  });

  let toastTimer: ReturnType<typeof setTimeout> | null = null;

  /**
   * @description 토스트 메시지 출력
   * @param message = 토스트 메시지
   * @param duration = 토스트 지속시간
   */
  const openToast = (message = toastOption.value.message, duration = toastOption.value.duration) => {
    if (toastTimer) {
      clearTimeout(toastTimer);
    }

    isVisible.value = true;
    toastOption.value.message = message;

    toastTimer = setTimeout(() => {
      isVisible.value = false;
      toastOption.value = {
        duration: 3000,
        message: '',
      };
      toastTimer = null;
    }, duration);
  };

  return { toastOption, isVisible, openToast };
});
