import type { FILENAME_TEMPLATES, BOARD_POSITIONS } from '@/shared/constants/setting.constants.ts';

export const useSettingStore = defineStore('setting', () => {
  const filenameTemplate = ref<keyof typeof FILENAME_TEMPLATES>('datecontent');
  const useLargeFont = ref<boolean>(false);
  const useCellular = ref<boolean>(true);
  const boardPosition = ref<keyof typeof BOARD_POSITIONS>('rightBottom');

  const connection = ref<'wifi'|'cellular'|null>(null);

  return {
    filenameTemplate,
    useLargeFont,
    useCellular,
    boardPosition,
    connection,
  };

}, {
  persist: [
    {
      key: 'photoboard-settings',
      storage: localStorage,
      pick: ['filenameTemplate', 'useLargeFont', 'useCellular', 'boardPosition'],
    },
  ],
});
