/**
 * @description 발송 상태에 따른 클래스 반환
 * @param status = 발송 상태
 *
 * @returns status-active, status-wait, status-failed
 */
export const getStatusClass = (status: string | undefined) => {
  switch (status) {
  case '발송 완료':
    return 'status-active';
  case '발송 대기':
    return 'status-wait';
  case '발송 실패':
    return 'status-failed'; // 발송 실패 상태 추가
  default:
    return '';
  }
};

export const getFileIconClass = (fileExtension: string) => {
  switch (fileExtension.toLowerCase()) {
  case 'xls':
  case 'xlsx':
  case 'csv':
    return 'xls';
  case 'doc':
  case 'docs':
  case 'docx':
    return 'doc';
  case 'pptx':
  case 'ppt':
    return 'pptx';
  case 'hwp':
    return 'hwp';
  case 'pdf':
    return 'pdf';
  case 'gif':
    return 'gif';
  case 'jpg':
  case 'jpeg':
  case 'png':
    return 'img';
  default:
    return 'other';
  }
};
