import type { ComponentOptions, Component } from 'vue';

/**
 * @description 모달
 * @shema id = 모달 고유 아이디
 * @shema options = 모달 옵션
 * @shema component = 모달 컴포넌트
 * @shema componentProps = 모달 컴포넌트에 전달할 props 데이터
 * @shema onClose = 모달 닫힐 때 실행되는 함수 (모달에서 부모 컴포넌트로 데이터를 전달할 때 사용)
 */
export interface IModal {
  id?: string;
  options: IModalOption;
  component: Component;
  componentProps?: ComponentOptions;
  onClose?: (modalResult: TModalResult) => void;
}

/**
 * @description 모달 옵션
 * @shema title = 모달 타이틀
 * @shema isBottomSheet = 하단 시트 모달 여부
 * @shema isTitleCenter = 타이틀 중앙 정렬 여부
 * @shema closeOnClickDimmed = dimmed 클릭 시 모달 닫힘 여부
 */
export interface IModalOption {
  title?: string;
  isBottomSheet?: boolean;
  isTitleCenter?: boolean;
  closeOnClickDimmed?: boolean;
}

export type TModalResult = string | number | object | boolean | [];
