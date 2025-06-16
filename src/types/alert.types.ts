
// type TCancelTextType = '확인' | '취소' | '아니오'
// type TConfirmTextType = '확인' | '삭제' | '비활성' | '네'

/**
 * @description 알림 옵션 타입
 *
 * @schema title = 제목
 * @schema content = 내용
 * @schema subContent = 부가 내용
 * @schema cancelText = 취소 버튼 텍스트
 * @schema confirmText = 확인 버튼 텍스트
 */
export interface IAlertOptions {
  title: string;
  content: string;
  subContent?: string;
  cancelText?: string;
  confirmText?: string;
}
