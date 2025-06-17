export const useIDB = () => {
  const { $idb } = useNuxtApp();

  const urls = new Set<string>();

  const setURL = (file: File|Blob) => {
    const url = URL.createObjectURL(file);
    urls.add(url);
    return url;
  };

  const readFile = async (filename: string) => {
    return await $idb.get('aegis-dx', filename);
  };

  const readFileAsURL = async (filename: string) => {
    const file = await readFile(filename);
    return setURL(file);
  };

  const writeFile = async (path: string, file: File) => {
    const match = file.name.match(/([^.\\/]+)(\.[^.\\/]+)?$/);
    if (!match) return;

    const fileName = match[1];
    const extension = match[2] ? match[2] : '';

    let copyname = 0;
    let newPath = file.name;

    while ((await $idb.get('aegis-dx', newPath))) {
      copyname += 1;
      newPath = fileName + ` (${copyname})` + extension;
    }
    return $idb.put('aegis-dx', file, newPath);
  };

  const readdir = async () => await $idb.getAllKeys('aegis-dx') as string[];

  const unlink = async (filename: string) => {
    if (urls.has(filename)) {
      URL.revokeObjectURL(filename);
      urls.delete(filename);
    }
    return await $idb.delete('aegis-dx', filename);
  };

  const _clearURL = (url: string) => {
    URL.revokeObjectURL(url);
    urls.delete(url);
  };

  const clearURL = (targetUrls?: Array<string>|string) => {
    if (typeof targetUrls === 'string') {
      _clearURL(targetUrls);
      return;
    }
    for (const url of (targetUrls || urls)) {
      _clearURL(url);
    }
  };

  onBeforeRouteLeave(() => {
    clearURL();
  });

  return {
    setURL,
    readFile,
    writeFile,
    readdir,
    unlink,
    readFileAsURL,
    clearURL,
  };
};
