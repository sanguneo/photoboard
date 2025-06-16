export const REGEX = {
  ID: /^(?=.*[a-z])(?=.*\d)[a-z\d]{10,12}$/,
  PASSWORD: /^(?=.*[a-z])(?=.*\d)[a-z\d]{10,12}$/,
  EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  CONTACT: /^\d+$/,
  ENG_KOR_NUMBER: /^[a-zA-Z0-9가-힣ㄱ-ㅎ]+$/,
  ENG: /^[A-Z]+$/,
} as const;

/**
 * 인풋의 입력 자체를 제한할때 사용하는 정규식
 */
export const REGEX_VALIDATION: {[key: string]: string} = {
  kor: 'ㄱ-ㅎ|ㅏ-ㅣ|가-힣',  // 한글
  eng:  'a-zA-Z',  // 영문
  number: '0-9',  // 숫자
  special: '!@#$%^&*()_+\\-\\=\\[\\]{}|;:\'",.<>/?', // 특수문자
};
