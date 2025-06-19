import { http, HttpResponse, delay } from 'msw';
import type { THandlersFactory } from '@/mocks/worker.ts';
import { docmentList, aptList } from '../datas/dashboard';

interface IResponse<T> {
  data: T;
}

const changeResponseType = <T>(res: T): IResponse<T> => {
  return {
    data: res,
  };
};

const DashboardHandlers: THandlersFactory = (config) => [
  http.get(`${config.API_BASE}/user/home/documents/apartments/viewed-count`, async () => {
    const success = true;
    if (success) {
      const data = docmentList;
      return HttpResponse.json(changeResponseType<object>(data));
    }
  }),
  http.get('https://test.com/test', async () => {
    await delay(4000);
    const success = true;
    if (success) {
      const data = aptList;
      return HttpResponse.json(changeResponseType<object>(data));
    }
  }),
];

export default DashboardHandlers;
