/* eslint-disable @typescript-eslint/no-dynamic-delete */

interface IAbortController {
  [key: string|number|symbol]: AbortController;
}

export const useAbortStore = defineStore('abort', () => {
  const controllers = ref<IAbortController>({});

  const setAbortController = (controller: AbortController, key?: string|number|symbol) => {
    if (key) {
      controllers.value[key] = controller;
    }
  };

  const removeAbortController = (key?: string) => {
    if (key) {
      delete controllers.value[key];
    }
  };

  const abortRequest = (key: string) => {
    if (key) {
      controllers.value[key].abort();
    }
  };

  const abortAllRequest = () => {
    Object.keys(controllers.value).forEach((key: string) => abortRequest(key));
  };

  return {
    controllers,
    setAbortController,
    removeAbortController,
    abortRequest,
    abortAllRequest,
  };
});
