export const ALERT_TITLE = {
  TOKEN_EXPIRED: '다시 로그인해주세요.',
  AUTHORITY: '접속 권한이 없습니다.',
  ACCESS_AUTHORITY: '접근 권한이 없습니다.',
  ACCESS_MENU: '접근할 수 없는 메뉴입니다.',

  LOGIN: '로그인 안내',
  LOGOUT: '로그아웃',
  PASSWORD_RESET: '비밀번호 초기화 안내',
  PASSWORD_CHANGE: '비밀번호 변경',
  PASSWORD_CHANGE_COMPLETE: '비밀번호 변경 완료',
  PASSWORD_CHANGE_INFO: '비밀번호 변경 안내',
  VALIDATION: '입력 확인 안내',
  ACCOUNT_DELETE: '계정 삭제',
  ACCOUNT_EDIT_COMPLETE: '수정 완료',
  STATUS_CHANGE: '상태 변경',
  DOCS_EDIT: '공문 수정',
  DOCS_DELETE: '공문 삭제',
  FILE_ERROR: '파일 첨부 확인 안내',
  WRITE_OUT: '공문 작성 안내',
  SEND_GROUP_ADD: '발송 그룹 추가',
  SEND_GROUP_ALL_DELETE: '전체 선택 해제',
  SEND_INFO: '발송 확인 안내',
  SEND_SUBJECT_DUPLICATED: '발송 제목 중복 안내',
  RESERVATE_SEND_INFO: '예약 발송 확인 안내',
  SERVICE_FOR_READY: '서비스 준비 중입니다',
  VALIDATION_DOC_SUBJECT: '발송 제목 확인',
  VALIDATION_FILES: '파일 첨부 확인',
  VALIDATION_RECIPIENTS: '발송 단지 확인',
  VALIDATION_SEND_DATE: '예약 발송 확인',
  RECIPIENTS_LIST: '단지 목록',
  DECHECK_RECIPIENTS_LIST: '단지 목록 선택 해제',
  CANDIDATE_LIST: '발송 단지',
  DECHECK_CANDIDATE_LIST: '발송 단지 선택 해제',
  DELETE_SELECTED_CANDIDATE_LIST: '발송 단지 선택 삭제',
  DELETE_NOSELECTED: '선택 삭제 안내',
} as const;

export const ALERT_CONTENT = {
  TOKEN_EXPIRED: '세션 만료 또는 다른 장치에서 접속하여 로그아웃되었습니다.',
  ACCESS_AUTHORITY: '메뉴 권한은 내정보에서 수정요청 하실 수 있습니다.',
  NETWORK_ERROR: '일시적인 오류로</br>로그아웃 되었습니다.</br>다시 로그인해 주세요',

  LOGIN_ERROR: '아이디 또는 비밀번호를 확인해 주세요.\n문제 시, 고객센터로 문의해 주세요.',
  LOGOUT: '로그아웃 하시겠습니까?',
  LOGIN_AUTH_ERROR: '이용이 제한된 아이디 입니다.\n문제 시, 고객센터로 문의해 주세요.',
  PASSWORD_CHANGE: '비밀번호를 변경하였습니다.\n다시 로그인해 주세요.',
  PASSWORD_CHANGE_SUCCESS: '비밀번호 변경이 완료되었습니다.',
  PASSWORD_CHANGE_INFO: '이메일로 아이디/비밀번호를 발신하였습니다.\n로그인 후 비밀번호를 변경해 주세요.',
  PASSWORD_EXPIRED: '현재 비밀번호를 3개월 이상 사용하셨습니다.\n보안을 위해 비밀번호를 변경해 주세요.',
  VALIDATION_PASSWORD_CHANGE: '이메일 및 비밀번호가 다르거나 조건에 맞지 않습니다.\n다시 확인해 주세요.',
  VALIDATION_ACCOUNT_REGIST: '아이디 중복 확인 및 필수 입력 사항을\n다시 한번 확인해 주세요.',
  VALIDATION_ACCOUNT_EDIT: '이메일 또는 연락처를 정확하게 입력해 주세요.',
  ACCOUNT_EDIT: '이메일 변경 및 비밀번호 초기화 시,\n최근 작성된 이메일로 아이디/비밀번호가 전송됩니다.',
  ACCOUNT_DELETE: '계정을 삭제하면 복구할 수 없습니다.\n정말 삭제하시겠습니까?',
  STATUS_CHANGE: '비활성 상태로 변경하면 기관에 등록된 모든 계정도\n비활성 상태가 됩니다.\n비활성 상태로 변경하시겠습니까?',
  FILE_ERROR: '파일의 용량 및 최대 업로드 수,\n확장자를 다시 확인해 주세요.',
  DOCS_DELETE: '삭제 시 해당 문서를 되돌릴 수 없습니다.\n정말 공문을 삭제하시겠습니까?',
  VALIDATION_SEND_TIME: '발송 예약 시간을 다시 확인해 주세요.',
  SEND_NETWORK_ERROR: '서버 문제로 인해 공문을 발송할 수 없습니다.\n잠시 후 다시 시도해 주세요.',
  SEND_TIME_ERROR: '예약 발송을 실패하였습니다.\n예약 시간을 다시 확인해 주세요.',
  DOCS_EDIT: '작성한 공문을 수정하시겠습니까?',
  WRITE_OUT: '작성 중인 내용이 있습니다.\n작성을 취소하고 나가시겠습니까?',
  CAN_NOT_SEND_EDIT_DELETE: '수정 및 삭제는 예약 발송 시에만 가능하며\n발송일 이전에만 처리할 수 있습니다.',
  SEND_SUBJECT_DUPLICATED: '동일한 제목의 발송 건이 이미 존재합니다.\n다른 발송 제목을 입력해 주세요.',
  DUPLICATED_AGENCY_NAME: '기관명의 중복 확인을 진행해주세요',
  DUPLICATED_AGENCY_CODE: '기관 코드의 중복 확인을 진행해주세요',
  RESERVATE_SEND_INFO: '수정 중이던 공문이 예약 시간에 따라\n자동 발송되었습니다.\n확인을 누르시면 화면이 새로고침 됩니다.',
  SERVICE_FOR_READY: '곧 단지별 열람 현황을 확인할 수 있도록\n서비스가 제공될 예정입니다.\n조금만 기다려 주세요.',
  VALIDATION_DOC_SUBJECT: '발송 제목을 입력해 주세요.',
  VALIDATION_FILES: '최소 1개 이상의 파일을 첨부해주세요.',
  VALIDATION_RECIPIENTS: '최소 1개 이상의 단지를 선택해주세요.',
  VALIDATION_SEND_DATE: '예약 발송 날짜 및 시간을 입력해주세요.',
  RECIPIENTS_LIST: (page: number, total: number) => `현재 페이지의 목록(${page.toLocaleString()}개)이 선택되었습니다.\n발송 그룹의 전체 목록(${total.toLocaleString()}개)을 추가하시려면,\n‘전체 목록 추가’ 를 선택해 주세요.`,
  CANDIDATE_LIST: (page: number, total: number) => `현재 페이지의 목록 (${page.toLocaleString()}개)이 선택되었습니다.\n발송 단지의 전체 목록(${total.toLocaleString()}개)을 추가하시려면,\n‘전체 목록 추가’를 선택해 주세요.`,
  DECHECK_RECIPIENTS_LIST: (candidate: number) => `전체 선택 해제 시 발송 단지 목록 (${candidate.toLocaleString()})이 삭제됩니다.\n계속 진행하시겠습니까?`,
  DECHECK_CANDIDATE_LIST: (candidate: number) => `현재 페이지의 목록(${candidate.toLocaleString()}개)을 선택 해제 하였습니다.\n발송 단지의 전체 목록(332개)을 선택 해제 하시려면,\n‘전체 목록 해제’ 를 선택해 주세요.`,
  DELETE_SELECTED_CANDIDATE_LIST: (candidate: number) => `선택한 목록(${candidate.toLocaleString()}개)을 삭제 하시겠습니까?`,
  DELETE_NOSELECTED: '주소가 선택되지 않았습니다.\n주소지를 체크한 후 다시 시도해 주세요.',
} as const;

export const ALERT_SUB_CONTENT = {
  LOGIN_AUTH_ERROR: '고객센터 02-6281-7336(평일 09:00 ~ 17:00)',
} as const;

export const ALERT_BUTTON = {
  OK: '확인',
  CANCEL: '취소',
  CONTINUE: '계속 작성',
  OUT: '나가기',
  CURRENT_SELECT: '현재 목록 선택',
  MOVE_TO_LIST: '목록이동',
  ALL_SELECT: '전체 목록 추가',
  RETRY: '다시 시도',
  SEND: '발송',
  SUBMIT: '제출',
  DISABLED: '비활성',
  EDIT: '수정',
  DELETE: '삭제',
  ALL_DELETE: '전체 선택 해제',
  ALL_LIST_DELETE: '전체 목록 해제',
  ALL_LIST_CANCEL: '현재 목록 해제',
  CHANGE: '변경',
  NEXT_CHANGE: '다음에 변경',
} as const;

export const getSendGroupAdd = (currentListCount: number, allListCount: number) => {
  return `현재 페이지의 목록 (${currentListCount.toLocaleString()}개)이 선택되었습니다.
  발송 그룹의 전체 목록(${allListCount.toLocaleString()}개)을 추가하시려면,
  ‘${ALERT_BUTTON.ALL_SELECT}’를 선택해 주세요.`;
};

export const getSendGroupAllDelete = (allListCount: number) => {
  return `전체 선택 해제 시 현재 그룹(${allListCount.toLocaleString()})이 삭제됩니다.
  계속 진행하시겠습니까?`;
};

export const getResetPassword = (email: string) => {
  return `초기화 즉시,${email}으로\n 비밀번호가 전송됩니다.`;
};

export const getUncheckDuplicate = (key: 'agencyName' | 'agencyCode' | 'loginId' | 'email') => {
  const unCheckedName = {
    agencyName: '기관명',
    agencyCode: '기관코드',
    loginId: '아이디',
    email: '이메일',
  };
  return `${unCheckedName[key]}의 중복 확인을 진행해주세요.`;
};
