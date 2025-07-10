import type { IModalOption } from '@/types/modal.types.ts';

export const ALIGN: IModalOption = {
  title: '정렬 기준',
  closeOnClickDimmed: true,
};

export const FILE_OPTION: IModalOption = {
  title: '파일 옵션',
  isBottomSheet: true,
  closeOnClickDimmed: true,
};

export const FILE_UPLOAD: IModalOption = {
  title: '파일 전송중',
  isBottomSheet: true,
};

export const NAME_CHANGE: IModalOption = {
  title: '이름 변경',
};

export const PHOTO_SELECT: IModalOption = {
  title: '보드판 사진 선택',
  closeOnClickDimmed: true,
};

export const UPLOAD_COMPLETE: IModalOption = {
  title: '저장 완료',
  isTitleCenter: true,
};

export const UPLOAD_WAIT: IModalOption = {
  title: '전송 대기중',
  isTitleCenter: true,
};
