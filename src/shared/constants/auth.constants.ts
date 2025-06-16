/**
 * @description 토큰 검증은 5분 정도 간격을 빠르게 합니다.
 */
const TOKEN_CHECK_INTERVAL_INTERPOLATION = 5 * 60 * 1000;

/**
 * @description 엑세스토큰 유효기간 (ms)
 */
export const ACCESS_TOKEN_INTERVAL = 30 * 60 * 1000 - TOKEN_CHECK_INTERVAL_INTERPOLATION;

/**
 * @description 리프레시토큰 유효기간 (ms)
 */
export const REFRESH_TOKEN_INTERVAL = 24 * 60 * 60 * 1000 - TOKEN_CHECK_INTERVAL_INTERPOLATION;
