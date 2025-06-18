type IDBRecord<T> = {
  file: Blob;
} & T;

export const useIDB = <T=Record<string, unknown>>(storeName: string = 'aegis-dx') => {
  const { $idb } = useNuxtApp();

  const urls = new Map<string, string>();

  /**
   * @description File|Blob 을 유저가 확인할 수 있도록 `blob:` URL로 연결하고 연결목록에 저장
   * @param key = url키, 파일 고유값과 연동
   * @param file = 파일객체, 여기서는 IDB에서 읽은 파일을 사용한다.
   */
  const createURL = (key: string, file: Blob): string => {
    const url = URL.createObjectURL(file);
    urls.set(key, url);
    return url;
  };

  /**
   * @description 생성했던 blob url을 제거하고 리스트에서 제거
   * @param key = 생성된 blob url
   */
  const revokeURL = (key: string) => {
    const url = urls.get(key);
    if (!url) return;
    try {
      URL.revokeObjectURL(url);
      urls.delete(key);
    } catch {
      console.info('Failed to revoke URL:', url);
    }
  };

  /**
   * @description blob url 목록을 참고해서 모두 제거
   * @param target = 제거 대상 Blob url(s)
   */
  const clearURL = (target?: string | string[]) => {
    const targets = typeof target === 'string' ? [target] : target || urls.keys();
    targets.forEach(revokeURL);
  };

  /**
   * @description idb에 저장된 데이터 키를 모두 불러옴
   */
  const readdir = ():Promise<string[]> => $idb.getAllKeys(storeName) as Promise<string[]>;

  /**
   * @description idb 로 부터 데이터를 불러옴
   * @param key = 불러올 데이터의 key
   */
  const read = async (key: string):Promise<IDBRecord<T>> => {
    return await $idb.get(storeName, key);
  };

  /**
   * @description idb로부터 파일을 불러옴
   * @param key = 불러올 데이터의 key
   */
  const readFile = async (key: string): Promise<Blob> => {
    return (await read(key)).file;
  };

  /**
   * @description idb로부터 파일을 읽어와 Blob Url 생성 전달
   * @param key = 불러올 데이터의 key
   */
  const readFileAsURL = async (key: string): Promise<string> => {
    const file = await readFile(key);
    return createURL(key, file);
  };

  /**
   * @description idb에 파일과 메타데이터를 저장
   * @param key = 저장할 파일 키
   * @param file = 저장할 파일
   * @param metadata = 관련된 메타 데이터
   */
  const writeFile = async (
    key: string,
    file: Blob,
    metadata: T,
  ) => {
    return $idb.put(storeName, { key, file, ...metadata });
  };

  /**
   * @description idb에 저장돼어있는 데이터 제거
   * @param key = 데이터 삭제할 키값
   */
  const unlink = async (key: string) => {
    if (urls.has(key)) revokeURL(key);
    return await $idb.delete(storeName, key);
  };

  /**
   * 라우트 이동시 클리어
   */
  if (typeof onBeforeRouteLeave === 'function') onBeforeRouteLeave(() => clearURL());

  return {
    createURL,
    revokeURL,
    clearURL,
    read,
    readFileAsURL,
    writeFile,
    readdir,
    unlink,
  };
};
