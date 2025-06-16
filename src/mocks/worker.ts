import type { HttpHandler } from 'msw';
import type { PublicRuntimeConfig } from '@nuxt/schema';
import DashboardHandlers from './handlers/dashboard';

export type THandlersFactory = (config: PublicRuntimeConfig) => HttpHandler[];

export default defineNuxtMswWorkerOption(() => {
  const config = useRuntimeConfig().public;
  return {
    handlers: [
      DashboardHandlers,
    ].flatMap((factory) => factory(config)),
    workerOptions: {
      onUnhandledRequest: 'bypass',
    },
  };
});
