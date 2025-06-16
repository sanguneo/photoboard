export const THUMBNAIL_FILE_EXT = 'jpeg, jpg, png, gif, svg';

export const getFileExtension = (filename?: string): string => {
  if (!filename) return '';
  return filename.split('.').pop() || '';
};

export const checkValidFileExtension = (file: File, accept: string) => {
  const extension = getFileExtension(file.name);
  return accept.toLowerCase().includes(extension.toLowerCase());
};

export const checkFileSize = (fileSize: number, limitSize: number) => fileSize <= limitSize;

export const formatBytes = (input: string | number, decimals = 2): string => {
  const bytes = typeof input === 'number' ? input : Number(input);
  if (isNaN(bytes) || bytes === 0) return bytes === 0 ? '0B' : '';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + sizes[i];
};

export const nameCutFile = (file: File, limit: number = 200): File => {
  if (file.name.length > limit) {
    const splittedFilename = file.name.split('.');
    const fileExtension = splittedFilename.pop(); // 확장자 추출
    const filenameBody = splittedFilename.join('.'); // 본문
    const maxBodyLength = limit - (fileExtension?.length ?? 0) - 1;
    const trimmedBody = filenameBody.slice(0, maxBodyLength);
    const newFileName = `${trimmedBody}.${fileExtension}`;
    return new File([file], newFileName, { type: file.type });
  }
  return file;
};


export default {
  formatBytes,
  checkValidFileExtension,
  checkFileSize,
  nameCutFile,
};
