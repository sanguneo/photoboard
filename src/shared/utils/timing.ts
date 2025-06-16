/**
 * @description async delay function
 * @param ms = delay milliseconds
 * @param value = return value after delay
 */
export const delay = (ms?:number, value?: unknown) => new Promise((resolve) => setTimeout(() => resolve(value || true), ms || 0));

/**
 * @description conditional wait function
 * @param func = condition function
 * @param checkInterval = check condition interval
 * @param checkTimeout = check timeout
 */
export const waitUntilExist = (func: () => unknown, checkInterval = 50, checkTimeout = 5000) =>new Promise((resolve, reject) => {
  const start = Date.now();
  (async function check(){
    const ret = await func();
    if (ret) return resolve(ret);
    if (Date.now() - start < checkTimeout) setTimeout(check, checkInterval);
    else reject(new Error('waitended'));
  })();
});
