/**
 * @description 토스트 옵션
 * @schema duration = 토스트 지속시간
 * @schema type = 토스트 타입(validation, message)
 * @schema position = 토스트 위치(top, middle, bottom)
 */
interface IToastOption {
  duration?: number;
  type?: 'validation' | 'message';
  position?: 'top' | 'middle' | 'bottom';
}

export const useToastStore = defineStore('toast', () => {
  const isVisible = ref<boolean>(false);
  const toastMessage = ref<string>('');
  const toastOption = ref<IToastOption>({
    duration: 3000,
    type: 'message',
    position: 'middle',
  });

  let toastTimer: ReturnType<typeof setTimeout> | null = null;

  const DEFAULT_TOAST_OPTIONS: IToastOption = {
    duration: 3000,
    type: 'message',
    position: 'middle',
  };

  const mergeOptions = (options?: IToastOption): IToastOption => ({
    ...DEFAULT_TOAST_OPTIONS,
    ...options,
  });

  const resetToast = () => {
    isVisible.value = false;
    toastMessage.value = '';
    toastOption.value = { ...DEFAULT_TOAST_OPTIONS };
    toastTimer = null;
  };

  /**
   * @description 토스트 메시지 출력
   * @param message = 토스트 메시지
   * @param options = 토스트 옵션
   * @param options.duration = 토스트 지속시간
   * @param options.type = 토스트 타입(validation, message)
   * @param options.position = 토스트 위치(top, middle, bottom)
   */
  const openToast = (message: string, options?: IToastOption) => {
    if (toastTimer) {
      clearTimeout(toastTimer);
    }

    const mergedOptions = mergeOptions(options);

    isVisible.value = true;
    toastMessage.value = message;
    toastOption.value = mergedOptions;

    toastTimer = setTimeout(resetToast, mergedOptions.duration);
  };

  return { toastMessage, toastOption, isVisible, openToast };
});
