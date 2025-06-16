import { ALERT_CONTENT, ALERT_TITLE } from '@/shared/constants/alert.constant.ts';

type errorType = {
  [key: number]: string,
  default: (status: number) => string,
}

interface IErrorAlertType {
  title: string;
  content: string;
}

export const NETWORK_ERROR = '네트워크 오류가 발생하였습니다. 인터넷 연결을 확인하세요.';
export const TIMEOUT_ERROR = '요청 시간이 초과되었습니다. 다시 시도하세요.';

const GET_ERROR = '데이터 조회 중 오류가 발생하였습니다.';
const POST_ERROR = '데이터 생성 중 오류가 발생하였습니다.';
const PUT_ERROR = '데이터 수정 중 오류가 발생하였습니다.';
const DELETE_ERROR = '데이터 삭제 중 오류가 발생하였습니다.';

export const CLIENT_ERRORS: errorType = {
  400: '잘못된 요청입니다.',
  401: '인증이 필요합니다. 로그인 상태를 확인하세요.',
  403: '접급 권한이 없습니다.',
  404: '요청한 리소스를 찾을 수 없습니다.',
  409: '중복된 데이터가 존재합니다.',
  'default': (status) => `클라이언트 오류가 발생했습니다. (${status})`,
};

export const SERVER_ERRORS: errorType = {
  500: '서버 내부에 오류가 발생했습니다. 잠시후 다시 시도해주세요.',
  502: '잘못된 게이트 웨이 응답입니다.',
  503: '서버가 현재 사용 불가능합니다.',
  504: '서버 요청 시간이 초과되었습니다.',
  'default': (status) => `서버 오류가 발생했습니다. (${status})`,
};

export const GET_ERRORS: errorType = {
  403: '접급 권한이 없습니다.',
  404: '요청한 데이터를 찾을 수 없습니다.',
  'default': (status) => `${GET_ERROR} (${status})`,
};
export const POST_ERRORS: errorType = {
  400: '잘못된 요청 데이터입니다. 입력값을 확인하세요.',
  403: '데이터 생성 권한이 없습니다.',
  409: '중복된 데이터가 존재합니다.',
  'default': (status) => `${POST_ERROR} (${status})`,
};
export const PUT_ERRORS: errorType = {
  400: '잘못된 수정 요청 데이터입니다.',
  404: '수정할 데이터를 찾을 수 없습니다.',
  409: '다른 요청과 충돌이 발생했습니다.',
  'default': (status) => `${PUT_ERROR} (${status})`,
};


export const DELETE_ERRORS: errorType = {
  403: '데이터 삭제 권한이 없습니다.',
  404: '삭제할 데이터를 찾을 수 없습니다.',
  'default': (status) => `${DELETE_ERROR} (${status})`,
};

export const SERVER_ERROR_MESSAGE: { [key: number] : IErrorAlertType} = {
  1001: {
    title: ALERT_TITLE.LOGIN,
    content: ALERT_CONTENT.LOGIN_ERROR,
  },
  401: {
    title: ALERT_TITLE.TOKEN_EXPIRED,
    content: ALERT_CONTENT.TOKEN_EXPIRED,
  },
  403: {
    title: ALERT_TITLE.ACCESS_AUTHORITY,
    content: ALERT_CONTENT.ACCESS_AUTHORITY,
  },
} as const;
