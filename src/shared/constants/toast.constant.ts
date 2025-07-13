export const MESSAGE = {
  MIN_LENGTH_CHECK: '2자 이상 작성해 주세요.',
  MAX_LENGTH_CHECK: '30자 이하로 작성해 주세요.',
  SPECIAL_CHAR_CHECK: ' : / * ? < > | 는 입력할 수 없습니다.',
  PHOTO_BOARD_TOOLTIP: '보드판을 움직여 위치를 조정할 수 있습니다.',
  FILE_DELETE_COMPLETE: (fileName: string) => `${fileName} 삭제 완료`,
  MULTI_FILE_DELETE_COMPLETE: (fileLength: number) => `${fileLength}개 삭제 완료`,
  FILE_UPLOAD_COMPLETE: '파일 전송 완료',
  WIFI_MODE_OFF: '네트워크 환경에 관계없이 파일이 전송됩니다.',
} as const;
