export const ALERT_TITLE = {};

export const ALERT_CONTENT = {
  ACCESS_DENIED: (apartmentName: string, accountManager: string) => `사진보드판을 사용할 수 없는 사용자입니다.\n ${apartmentName} 계정관리 담당자 ${accountManager}님에게 XpERP 계정을 확인해보세요.`,
  PHOTO_REGIST_OUT: '사진을 저장하지 않고 종료할까요?',
  CAPACITY_EXCEEDED: 'Xp문서함 저장 용량을 초과했습니다.\n사용하지 않는 파일을 삭제해 주세요.',
  FILE_DELETE: (fileName: string) => `${fileName}을 삭제할까요?`,
  MULTI_FILE_DELETE: (count: number) => `${count}개를 삭제할까요?`,
  SELECT_PHOTO_SAVE_COMPLETE_IOS: '선택한 사진을 휴대폰 갤러리에 저장했습니다.',
  SELECT_PHOTO_SAVE_COMPLETE_ANDROID: '선택한 사진을 휴대폰 갤러리 > 사진보드판에 저장했습니다.',
  SEARCH: '검색어를 입력해주세요.',
  MIN_LENGTH_CHECK: '두 글자 이상 입력해주세요.',
} as const;

export const ALERT_BUTTON = {
  OK: '확인',
  CANCEL: '취소',
} as const;
