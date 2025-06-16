import 'axios';

interface IAxiosMetadata {
  cacheKey: string | number | symbol;
  [key: string | number]: string | number | boolean | symbol | null;
}

/**
 * Axios 타입 확장
 */
declare module 'axios' {
  /**
   * config 에서 errorAlert, metadata 이용하기위한 타입확장
   */
  export interface AxiosRequestConfig {
    errorAlert?: boolean;
    metadata?: IAxiosMetadata;
  }
}
