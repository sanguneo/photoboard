
/**
 * page 이동시 단순 체크해야될 로직
 */
export default defineNuxtRouteMiddleware((to, from) => {
  const modalStore = useModalStore();

  if (!to.query || to.query.timestamp === undefined) {
    const timestamp = Date.now();
    console.log('redirect from: ', from.path, '-> to: ', to.path);
    console.log('timestamp: ', timestamp);
    // return navigateTo(merge.recursive({}, { query: { timestamp } }, to), { replace: true });
  }

  modalStore.closeAllModal();

});
