export const FILENAME_TEMPLATES = {
  datecontent: '날짜+내용',
  dateposition: '날짜+위치',
  content: '내용',
  position: '위치',
} as const;

export const CONNECTION = (type: boolean) => type ? '항상' : 'Wi-Fi에서만 전송';

export const BOARD_POSITIONS = {
  rightBottom: '오른쪽 아래',
  leftBottom: '왼쪽 아래',
  leftTop: '왼쪽 위',
  rightTop: '오른쪽 위',
} as const;
