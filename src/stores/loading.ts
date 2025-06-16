
// 로딩을 호출한 키 타입 (Primitive 타입)
type TLoadingKey = string|number|symbol;

export const useLoadingStore = defineStore('loading', () => {

  /**
   * @description 어떤것이 로딩중인지를 확인하기 위한 구분자 배열
   */
  const loadingKeys = ref<Array<TLoadingKey>>([]);

  /**
   * @description 로딩 실행
   * @param loadingKey = 로딩을 호출한 키
   */
  const startLoading = (loadingKey?: TLoadingKey) => {
    loadingKeys.value.push(loadingKey || 'noname');
  };

  /**
   * @description 로딩 종료
   * @param loadingKey = 로딩을 호출한 키
   */
  const stopLoading = (loadingKey?: TLoadingKey) => {
    const ridIndex = loadingKeys.value.indexOf(loadingKey || 'noname');
    loadingKeys.value.splice(ridIndex, 1);
  };

  /**
   * @description 모든 로딩 제거
   */
  const clearLoading = () => {
    loadingKeys.value = [];
  };

  const loading = computed(() => loadingKeys.value.length > 0);

  return {
    loading,
    startLoading,
    stopLoading,
    clearLoading,
  };
});
