import type { IRadioOption } from '@/types/radio.types.ts';

export const FILE_ALIGN_OPTIONS: IRadioOption[] = [
  {
    id: '1',
    value: 'dateDesc',
    label: '날짜 최신순',
  },
  {
    id: '2',
    value: 'dateAsc',
    label: '날짜 오래된순',
  },
  {
    id: '3',
    value: 'fileNameDesc',
    label: '파일 이름 (내림차순)',
  },
  {
    id: '4',
    value: 'fileNameAsc',
    label: '파일 이름 (오름차순)',
  },
];

export const FOLDER_ALIGN_OPTIONS: IRadioOption[] = [
  {
    id: '1',
    value: 'folderNameDesc',
    label: '폴더 이름 (내림차순)',
  },
  {
    id: '2',
    value: 'folderNameAsc',
    label: '폴더 이름 (오름차순)',
  },
];
