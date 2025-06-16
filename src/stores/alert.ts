import type { IAlertOptions } from '@/types/alert.types.ts';

const INIT_VALUE = {
  title: '',
  content: '',
  subContent: '',
  cancelText: '취소',
  confirmText: '확인',
};

export const useAlertStore = defineStore('alert', () => {
  const type = ref<string>('alert');
  const isVisible = ref<boolean>(false);
  const alertOptions = ref<IAlertOptions>(INIT_VALUE);
  const result = ref<((value: boolean) => void) | null>(null);
  const activeElement = ref<HTMLElement | null>(null);

  const openHandler = (options: IAlertOptions, openType: string) => {
    type.value = openType;
    activeElement.value = document.activeElement as HTMLElement;
    activeElement.value?.blur();
    return new Promise<boolean>((resolve) => {
      alertOptions.value = {
        ...alertOptions.value,
        ...options,
      };
      isVisible.value = true;
      result.value = resolve;
    });
  };

  const onClose = () => {
    isVisible.value = false;
    alertOptions.value = INIT_VALUE;
    result.value = null;
    activeElement.value?.focus();
  };

  const openAlert = (alertOptions: IAlertOptions) => openHandler(alertOptions, 'alert');
  const openConfirm = (alertOptions: IAlertOptions) => openHandler(alertOptions, 'confirm');

  const confirm = () => {
    if (result.value) {
      result.value(true);
      onClose();
    }
  };

  const cancel = () => {
    if (result.value) {
      result.value(false);
      onClose();
    }
  };

  return { isVisible, type, alertOptions, openAlert, openConfirm, confirm, cancel };
});
