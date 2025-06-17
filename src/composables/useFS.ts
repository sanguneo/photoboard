import mime from 'mime/lite';

export const useFS = () => {
  const { $fs } = useNuxtApp();

  const urls = new Set<string>();

  const setURL = (file: File|Blob) => {
    const url = URL.createObjectURL(file);
    urls.add(url);
    return url;
  };

  const readFile = async (path: string) => {
    const byteArray = await $fs.promises.readFile(path);
    const filename = path.split('/').pop() as string;
    return new File([byteArray], filename, { type: mime.getType(path) as string });
  };

  const readFileAsURL = async (path: string) => {
    const file = await readFile(path);
    return setURL(file);
  };

  const readFileAsBase64 = async (path: string, header?: boolean) => {
    let binary = '';
    const byteArray = await $fs.promises.readFile(path);
    const len = byteArray.byteLength;
    for (let i = 0; i < len; i += 1) {
      binary += String.fromCharCode( byteArray[i] );
    }
    return (header ? `data:${mime.getType(path)};base64,` : '') + window.btoa(binary);
  };

  const writeFile = async (path: string, file: File) => {
    const arrayBuffer = await file.arrayBuffer();
    const match = file.name.match(/([^.\\/]+)(\.[^.\\/]+)?$/);
    if (!match) return;

    const fileName = match[1];
    const extension = match[2] ? match[2] : '';

    let copyname = 0;
    let newPath = path || `./${file.name}`;

    while (await $fs.promises.exists(newPath)) {
      copyname += 1;
      newPath = path.split('/').slice(0, -1).join('/') + '/' + fileName + ` (${copyname})` + extension;
    }
    return await $fs.promises.writeFile(newPath, new Uint8Array(arrayBuffer));
  };

  const readdir = $fs.promises.readdir;

  const unlink = async (path: string) => {
    if (urls.has(path)) {
      URL.revokeObjectURL(path);
      urls.delete(path);
    }
    return await $fs.promises.unlink(path);
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
    readFileAsBase64,
    clearURL,
  };
};
