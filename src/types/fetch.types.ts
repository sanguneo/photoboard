/**
 * @description fetch요청 후 custom error type
 * @schema status: number = 사용자 정의 상태코드
 * @schema code: string = 상태코드값
 * @schema message: string = 에러 메시지
 * @schema logMessage: string = 에러 로그용 메시지
 */
export interface ICustomErrorType {
  status: number;
  code: string;
  message?: string;
  logMessage?: string;
}
