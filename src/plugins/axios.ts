/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AxiosError, AxiosRequestConfig } from 'axios';
import axios from 'axios';
import type { ICustomErrorType } from '@/types/fetch.types.ts';
import { ALERT_CONTENT, ALERT_TITLE } from '@/shared/constants/alert.constant.ts';

/**
 * 에러 메세지 처리 함수
 */
const errorHandler = (
  errorData: ICustomErrorType,
  method: AxiosRequestConfig['method'],
) => {
  const statusCode = errorData.status;
  console.warn(`[${statusCode}] [${method?.toUpperCase()}] ${errorData.logMessage}`);
  return {
    title: errorData?.code || '',
    message: errorData?.message || '',
  };
};

const IGNORE_LOADING_URL = ['/alarm/unReadCount', '/appr/documents/count'];
const IGNORE_REQUEST_URL = ['/public/login', '/public/reissue', '/public/logout'];

export default defineNuxtPlugin((_nuxtApp) => {
  const config = _nuxtApp.$config.public;

  const { startLoading, stopLoading } = useLoadingStore();
  const { openAlert } = useAlertStore();
  // TODO: 추후 에러로직 수정을 위해 남겨둠, 조용히 삭제될수있음!
  const { setAbortController } = useAbortStore();
  // const { removeAbortController, abortAllRequest, setAbortController } = useAbortStore();
  const authStore = useAuthStore();
  const { token } = storeToRefs(authStore);
  // const { refreshTokenAttempted, token } = storeToRefs(authStore);

  const axiosInstance = axios.create({
    baseURL: config.API_BASE,
    adapter: 'fetch',
    timeout: 4000,
    metadata: { cacheKey: 0 },
  });

  axiosInstance.interceptors.request.use((config) => {
    if (token.value) { // same as `isLoggedIn.value` type guard for below code
      config.headers.Authorization = `${token.value.grantType} ${token.value.accessToken}`;
    }
    config.metadata = Object.assign({}, {
      cacheKey: config.url + '|' + config.method + '|' + JSON.stringify(config.params || {}),
    }, config.metadata);
    const abortController = new AbortController();
    config.signal = abortController.signal;
    setAbortController(abortController, config.metadata.cacheKey);
    if (!IGNORE_LOADING_URL.includes(config.url || '')) {
      startLoading(config.metadata.cacheKey);
    }
    // // TODO: [Axios migration] auth 관련 api들이 아닌데, 토큰이 없거나 refreshToken요청을 했을 경우 호출중인 로직 stop
    if (!IGNORE_REQUEST_URL.includes(config.url || '')) {
    //   abortAllRequest();
    //   // stopLoading();
    //   const errorData = { errorCode: 408, errorMessage: '클라이언트 요청중 오류가 발생하였습니다.' };
    //   throw createError({
    //     statusCode: 408,
    //     message: JSON.stringify(errorData),
    //   });
    }

    return config;
  }, async (error: AxiosError<any>) => {
    if (!IGNORE_LOADING_URL.includes(error?.config?.url || '')) {
      stopLoading(error?.config?.metadata?.cacheKey || '');
    }
    // const errorAlertEnabled = error.config?.errorAlert ?? true;
    return error;
  });


  axiosInstance.interceptors.response.use(
    (response) => {
      if (!IGNORE_LOADING_URL.includes(response?.config?.url || '')) {
        stopLoading(response.config?.metadata?.cacheKey);
      }
      return response;
    },
    (error: AxiosError<any>) => {
      if (!IGNORE_LOADING_URL.includes(error?.config?.url || '')) {
        stopLoading(error.config?.metadata?.cacheKey);
      }
      const errorAlertEnabled = error.config?.errorAlert ?? true;
      const errorData = error.response?.data;
      if (errorAlertEnabled) {
        if (error.status === 401) {
          openAlert({
            title: ALERT_TITLE.TOKEN_EXPIRED,
            content: ALERT_CONTENT.TOKEN_EXPIRED,
          });
          authStore.clear();
          navigateTo('/auth/login');
        } else if (error.status === 403) {
          openAlert({
            title: ALERT_TITLE.ACCESS_AUTHORITY,
            content: ALERT_CONTENT.ACCESS_AUTHORITY,
          });
          navigateTo('/');
        } else if (errorData && error.name !== 'AbortError') {
          const alertError = errorHandler(errorData, error?.config?.method);
          openAlert({
            title: String(alertError.title),
            content: alertError.message,
          });
        }
      }
      return Promise.reject(error);
    },
  );

  return {
    provide: {
      api: axiosInstance,
    },
  };

});
