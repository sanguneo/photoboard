/**
 * @description 공백 두개이상 제거, 줄바꿈 제거, 길이 입력 받아 절사된 문자열 반환
 * 1. 공백이 두 개 이상인 부분을 하나의 공백으로 변경
 * 2. 줄바꿈 문자를 공백으로 바꾸기
 * 3. 길이를 parameter로 받아 자르기
 * 4. 길이가 length 넘어가면 절사 후 ... 붙이기
 * @param content
 * @param length
 */
const truncateStringWithLength = (content: string, length: number) => {
  const cleanedContent = content.replace(/\s{2,}/g, ' ').replace(/[\r\n]/g, ' ');

  // 문자 단위로 정확하게 자르기 위해 Intl.Segmenter 사용
  const segmenter = new Intl.Segmenter('ko', { granularity: 'grapheme' });
  const segments = Array.from(segmenter.segment(cleanedContent), seg => seg.segment);

  const truncated = segments.length > length ? `${segments.slice(0, length).join('')}...` : cleanedContent;
  return truncated;
};

/**
 * @description 파일 이름 절사 (확장자는 유지)
 * 1. 공백이 두 개 이상인 부분을 하나의 공백으로 변경
 * 2. 줄바꿈 문자를 공백으로 바꾸기
 * 3. 파일 확장자를 제외한 본문만 길이 기준 절사
 * 4. 길이가 length 넘어가면 절사 후 ... 붙이고 확장자는 유지
 * @param content 파일 이름
 * @param length 최대 길이 (확장자 제외)
 */
const truncateFileName = (content: string | undefined, length: number) => {
  if (!content) return '';

  // 공백 및 줄바꿈 정리
  const cleanedContent = content.replace(/\s{2,}/g, ' ').replace(/[\r\n]/g, ' ');

  // 확장자 분리
  const lastDotIndex = cleanedContent.lastIndexOf('.');
  const hasExtension = lastDotIndex !== -1 && lastDotIndex !== 0;
  const namePart = hasExtension ? cleanedContent.slice(0, lastDotIndex) : cleanedContent;
  const extension = hasExtension ? cleanedContent.slice(lastDotIndex) : '';

  const segmenter = new Intl.Segmenter('ko', { granularity: 'grapheme' });
  const segments = Array.from(segmenter.segment(namePart), seg => seg.segment);

  // 절사 처리
  const truncated = segments.length > length ? `${segments.slice(0, length).join('')}...` : namePart;

  return truncated + extension;
};

/**
 * @description 리스트 아이템 번호 계산 후 절사
 * @param page = 현재 페이지 번호
 * @param size = 페이지당 아이템 수
 * @param index = 현재 아이템의 인덱스
 * @param totalElements = 전체 아이템 수
 * @param count = 표시할 자리수
 *
 * @returns {string} 자리수 만큼 절사된 리스트 아이템 번호(양수 아닐 시 공백)
 */
const getListItemNumber = (
  page: number,
  size: number,
  index: number,
  totalElements: number,
  count: number,
) => {
  const pageNumber = totalElements - page * size - index;
  const truncatedPageNumber = pageNumber.toString().length > count ? pageNumber.toString().slice(0, count) + '...' : pageNumber;
  return pageNumber > 0 ? truncatedPageNumber : '';
};

export default {
  truncateStringWithLength,
  truncateFileName,
  getListItemNumber,
};
