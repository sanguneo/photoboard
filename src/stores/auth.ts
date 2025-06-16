import { cookieStorage } from '@/shared/utils/cookieStorage.ts';
import type { IAuthToken, ILoginRequest } from '@/types/api/auth.types.ts';
import axios, { type AxiosInstance } from 'axios';
import type { IResponseWrapper } from '@/composables/useCustomFetch.ts';

export const useAuthStore = defineStore('auth', () => {
  const { API_BASE } = useRuntimeConfig().public;

  const retApi: () => AxiosInstance = () => useNuxtApp().$api;

  const token = ref<IAuthToken | null>();
  const refreshTokenAttempted = ref<boolean>(false);
  const tokenIss = ref<number>(0);

  const isLoggedIn = computed(() => Boolean(token.value?.accessToken));

  const setAuth = (loginInfo: IAuthToken) => {
    try {
      retApi().defaults.headers.common.Authorization = `${loginInfo.grantType} ${loginInfo.accessToken}`;
    } catch (e) {
      console.log(e);
    }
    token.value = {
      grantType: loginInfo.grantType,
      accessToken: loginInfo.accessToken,
      refreshToken: loginInfo.refreshToken,
    };
  };

  /**
   * @description 토큰을 모두 삭제하는 메소드
   * @return void
   *
   */
  const clear = () => {
    token.value = null;
    setTimeout(() => {
      refreshTokenAttempted.value = false;
    }, 0);
  };

  /**
   * @description 로그인
   * @param body <ILoginRequest> = 로그인 정보
   * @returns token = 토큰, grantType
   */
  const fetchLogin = async (body: ILoginRequest) => {
    try {
      const { data: { data } } = await axios.post<IResponseWrapper<IAuthToken>>(`${API_BASE}/public/login`, body);
      setAuth(data);
      tokenIss.value = Date.now();
      return data;
    } catch (error) {
      clear();
      throw error;
    }
  };


  /**
   * @description 리프레시토큰으로 로그인 토큰 새로 요청
   * @returns void;
  */
  const fetchRefreshLogin = async (argToken?: string) => {
    const refreshToken = argToken || getToken('refreshToken');
    if (!refreshToken) return Promise.reject(new Error('No token provided'));
    refreshTokenAttempted.value = true;
    try {
      const { data: { data } } = await retApi().post<IResponseWrapper<IAuthToken>>(`${API_BASE}/public/reissue`, {
        refreshToken,
      });
      setAuth(data);
      tokenIss.value = Date.now();
      return data;
    } catch (error) {
      refreshTokenAttempted.value = false;
      console.error('refreshLogin catch error ', error);
      clear();
      throw error;
    }
  };

  /**
   * @description 로그아웃
   * @returns void
   */
  const fetchLogout = async () => {
    try {
      return await retApi().post('/public/logout');
    } finally {
      clear();
    }
  };


  /**
   * @description 토큰을 받아오는 메소드
   * @param type <'accessToken'|'refreshToken'> = 가져올 토큰 타입
   */
  const getToken = (type: 'accessToken'|'refreshToken' = 'accessToken')=> token.value?.[type];

  return {
    token,
    isLoggedIn,
    refreshTokenAttempted,
    tokenIss,
    getToken,
    clear,
    fetchLogin,
    fetchRefreshLogin,
    fetchLogout,
  };
}, {
  persist: [
    {
      key: 'photoboard-auth',
      storage: cookieStorage,
    },
  ],
},
);
