/**
 * @description 토스트
 * @schema message = 토스트 메시지
 * @schema duration = 토스트 지속시간
 * @schema type = 토스트 타입(validation, message)
 */
interface IToastOption {
  message: string;
  duration?: number;
  type?: 'validation' | 'message';
}

export const useToastStore = defineStore('toast', () => {
  const isVisible = ref<boolean>(false);

  const toastOption = ref<IToastOption>({
    duration: 3000,
    message: '',
    type: 'message',
  });

  let toastTimer: ReturnType<typeof setTimeout> | null = null;

  /**
   * @description 토스트 메시지 출력
   * @param message = 토스트 메시지
   * @param duration = 토스트 지속시간
   * @param type = 토스트 타입(validation, message)
   */
  const openToast = (message = toastOption.value.message, duration = toastOption.value.duration, type = toastOption.value.type) => {
    if (toastTimer) {
      clearTimeout(toastTimer);
    }

    isVisible.value = true;
    toastOption.value.message = message;
    toastOption.value.type = type;

    toastTimer = setTimeout(() => {
      isVisible.value = false;
      toastOption.value = {
        duration: 3000,
        message: '',
        type: 'message',
      };
      toastTimer = null;
    }, duration);
  };

  return { toastOption, isVisible, openToast };
});
