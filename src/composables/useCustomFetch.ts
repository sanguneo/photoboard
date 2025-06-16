import type { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface IResponseWrapper<T> {
  status?: number;
  code?: string;
  data: T;
}

export const useCustomFetch = () => {
  const { $api } = useNuxtApp();

  const api = {
    async get<TResponse>(
      url: string,
      options?: AxiosRequestConfig,
      errorAlert?: boolean,
    ): Promise<AxiosResponse<TResponse>> {
      return $api.get<TResponse>(url, {
        ...options,
        errorAlert,
      });
    },
    async post<TResponse>(
      url: string,
      body?: object,
      options?: AxiosRequestConfig,
      errorAlert?: boolean,
    ): Promise<AxiosResponse<TResponse>> {
      return $api.post<TResponse>(url, body, {
        ...options,
        errorAlert,
      });
    },
    async put<TResponse>(
      url: string,
      body?: object | FormData,
      options?: AxiosRequestConfig,
      errorAlert?: boolean,
    ): Promise<AxiosResponse<TResponse>> {
      return $api.put<TResponse>(url, body, {
        ...options,
        errorAlert,
      });
    },
    async patch<TResponse>(
      url: string,
      body?: object | FormData,
      options?: AxiosRequestConfig,
      errorAlert?: boolean,
    ): Promise<AxiosResponse<TResponse>> {
      return $api.patch<TResponse>(url, body, {
        ...options,
        errorAlert,
      });
    },
    async delete<TResponse>(
      url: string,
      options?: AxiosRequestConfig,
      errorAlert?: boolean,
    ): Promise<AxiosResponse<TResponse>> {
      return $api.delete<TResponse>(url, {
        ...options,
        errorAlert,
      });
    },
    async postForm<TResponse>(
      url: string,
      body: FormData,
      options?: AxiosRequestConfig,
      errorAlert?: boolean,
    ): Promise<AxiosResponse<TResponse>> {
      return $api.postForm<TResponse>(url, body, {
        ...options,
        errorAlert,
      });
    },
    async putForm<TResponse>(
      url: string,
      body: FormData,
      options?: AxiosRequestConfig,
      errorAlert?: boolean,
    ): Promise<AxiosResponse<TResponse>> {
      return $api.putForm<TResponse>(url, body, {
        ...options,
        errorAlert,
      });
    },
  };

  return { api };
};
