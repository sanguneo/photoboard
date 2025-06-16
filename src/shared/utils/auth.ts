import { ACCESS_TOKEN_INTERVAL, REFRESH_TOKEN_INTERVAL } from '@/shared/constants/auth.constants.ts';

/**
 * @description 세션 만료여부 판단
 * @param tokenIss token issue datetime
 */
export const isSessionOutdated = (tokenIss: number)=> {
  return (Date.now() - tokenIss) > ACCESS_TOKEN_INTERVAL;
};

/**
 * @description 리프레시 토큰 세션 만료여부 판단
 * @param tokenIss refreshToken issue datetime
 */
export const isRefreshTokenOutdated = (tokenIss: number)=> {
  return (Date.now() - tokenIss) > REFRESH_TOKEN_INTERVAL;
};
