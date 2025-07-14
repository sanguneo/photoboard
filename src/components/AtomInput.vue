<script setup lang="ts">
import { REGEX_VALIDATION } from '@/shared/constants/regex.constant.ts';

defineOptions({
  inheritAttrs: false,
});

const attrs = useAttrs();
const filteredAttrs = computed(() => {
  const { modelValue, ...rest } = attrs;
  return rest;
});

/**
 * @description 인풋 컴포넌트 Props
 * @schema type = 타입
 * @schema name = 이름
 * @schema initialValue = 초기값
 * @schema customErrorMessage = 커스텀 에러 메세지
 * @schema wrapClass = 컴포넌트 외부 클래스
 * @schema maxLength = 최대 길이
 * @schema validate = 입력 값 자체를 제어할 유효성 체크용 정규식 값
 * @schema validateTypeIsAllowed = 입력값을 허용할지 여부(false면 제외할 속성이라고 판단)
 * @schema hasError = 에러를 원하는 시기에 보여주기 위함
 * @schema showHelpMessage = 인풋아래에 에러메세지 사용 여부
 */
interface IAtomInputProps {
  type?: 'url' | 'text' | 'password' | 'tel' | 'search' | 'number' | 'email' | 'date';
  name?: string;
  initialValue?: string;
  customErrorMessage?: string;
  wrapClass?: string;
  maxLength?: number;
  validate?: string[];
  validateTypeIsAllowed?: boolean;
  hasError?: boolean;
  showHelpMessage?: boolean;
}

const props = withDefaults(defineProps<IAtomInputProps>(), {
  type: 'text',
  name: '',
  initialValue: '',
  disabled: false,
  customErrorMessage: '',
  wrapClass: '',
  maxLength: undefined,
  validate: undefined,
  validateTypeIsAllowed: true,
  hasError: true,
  showHelpMessage: false,
});

const emit = defineEmits(['update:modelValue', 'search']);

const { value, setValue, errorMessage } = useField(props.name, '', {
  initialValue: props.initialValue ? props.initialValue : '',
});

const isFocus = ref<boolean>(false);

const onInput = (e: Event) => {
  const input = e.target as HTMLInputElement;
  let newValue = input.value;

  if (props.maxLength && props.maxLength < newValue.length) {
    const trimmedValue = newValue.slice(0, props.maxLength);
    newValue = trimmedValue;
  };

  if (props.validate){
    const validationValue = validateInput(newValue, props.validate, props.validateTypeIsAllowed);
    newValue = validationValue;
  }
  input.value = newValue;
  setValue(newValue);
  if (props.type === 'search') return;
  emit('update:modelValue', newValue);
};

const onSearchInput = () => {
  emit('update:modelValue', value.value);
  emit('search');
};

const onReset = () => {
  setValue('');
  emit('update:modelValue', '');
};

// 입력된 값에 대해 validate를 처리하는 함수
const validateInput = (value: string, validate: string[], isAllowed: boolean) => {
  const regexPattern = validate
    .map((key) => REGEX_VALIDATION[key])
    .join('');

  return value.replace(new RegExp(`[${isAllowed ? '^' : ''}${regexPattern || validate}]`, 'g'), '');
};

const setFormWrapClass = computed(() => props.type === 'search' ? 'xpdoc-search' : 'form-wrap' );

const hiddenCloseButton = computed(() => {
  if (props.type === 'search'){
    return true;
  }
  return !(isFocus.value && value.value);
});

</script>

<template>
  <div :class="[wrapClass, setFormWrapClass]">
    <input
      :id="name"
      v-model="value"
      :type="type"
      :name="name"
      autocomplete="off"
      :class="{'error': hasError && (errorMessage || customErrorMessage) }"
      v-bind="filteredAttrs"
      @input="onInput"
      @search="onSearchInput"
      @focus="isFocus = true"
      @blur="isFocus = false"
    >
    <slot />
    <button v-if="type==='search'" type="submit" class="button search-btn" aria-label="검색" @click="onSearchInput">
      <img src="@/assets/images/search.svg" alt="검색 아이콘">
    </button>
    <button
      type="button" class="icon-btn clear-btn"
      :aria-hidden="hiddenCloseButton"
      aria-label="초기화"
      @click="onReset"
      @mousedown.prevent
    >
      <img src="@/assets/images/clear.svg" alt="초기화">
    </button>
  </div>
  <span v-if="showHelpMessage && hasError && (errorMessage || customErrorMessage)" class="form-vail">
    {{ errorMessage || customErrorMessage }}
  </span>
</template>

<style scss scope>
.search-button{
  padding: 18px;
  position: absolute;
  right: 0;
  margin-right: 6px;
}
.no-wrap{
  flex: none;
}
</style>
