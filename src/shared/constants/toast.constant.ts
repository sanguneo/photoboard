export const MESSAGE = {
  ACCOUNT_REGIST: '발송자 계정 생성을 완료하였습니다.',
  ACCOUNT_EDIT: '계정 수정을 완료하였습니다.',
  ACCOUNT_DELETE: '계정을 삭제하였습니다.',
  AGENCY_REGIST: '기관 생성을 완료하였습니다.',
  AGENCY_EDIT: '기관 수정을 완료하였습니다.',
  SEND_EDIT: '공문 수정을 완료하였습니다.',
  SEND_DELETE: '공문 삭제를 완료하였습니다.',
  SEND_REGIST: '공문 발송을 완료하였습니다.',
  PASSWORD_RESET: '비밀번호를 초기화하였습니다.',
  FILE_SIZE_ERROR: '파일 용량을 확인해주세요.',
  FILE_TYPE_ERROR: '파일 형식을 확인해주세요.',
  DELETE_CANDIDATE_COMPLETE: (count: number) => `발송 단지 (${count.toLocaleString()})가 삭제되었습니다.`,
} as const;

export const getCountMessage = (type: string, count: number) => {
  const commaCount = count.toLocaleString();
  const messages: {[key: string]: string} = {
    SEND_GROUP_ADD: `중복 그룹을 제외한 그룹 목록(${commaCount})이 선택되었습니다.`,
    SEND_APT_ADD: `중복된 단지를 제외한 단지 목록(${commaCount})을 발송 단지로 이동하였습니다.`,
    GROUP_DELETE: `그룹 목록(${commaCount})이 선택 해제되었습니다.`,
    RECIPIENT_DELETE: `단지 목록 (${commaCount})을 선택 해제하였습니다.`,
    SEND_APT_SELECT: `발송 단지(${commaCount})가 선택되었습니다.`,
    SEND_APT_DELETE: `발송 단지(${commaCount})가 선택 해제되었습니다.`,
  };
  return messages[type];
};


