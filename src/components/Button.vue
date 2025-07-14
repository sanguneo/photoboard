<script setup lang="ts">
/**
 * @description 버튼 컴포넌트
 * @schema size = 사이즈
 * @schema variant = 타입
 * @schema color = 컬러
 * @schema className = 클래스명 (ex: w50) -> _base.scss 참고
 */
interface IButtonProps {
  size?: 'small' | 'large' | undefined;
  variant?: 'fill' | 'line' | 'icon' ;
  color?: 'primary';
  className?: string;
}

const props = withDefaults(defineProps<IButtonProps>(), {
  size: undefined,
  variant: 'fill',
  color: 'primary',
  className: '',
});

const attrs = useAttrs();

const variantClass = computed(() => {
  if (props.variant === 'icon') return 'button--icon';
  return `${props.color}-${props.variant}`;
});
const sizeClass = computed(() => props.size ? `button-${props.size}` : '');

</script>

<template>
  <button
    class="button"
    :class="[sizeClass, variantClass, className]"
    v-bind="attrs"
  >
    <slot />
  </button>
</template>

<style scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}
.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
