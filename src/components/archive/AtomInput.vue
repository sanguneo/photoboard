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
 * @schema disabled = 비활성화 여부
 * @schema successMessage = 성공 메세지
 * @schema defaultMessage = 기본 메세지
 * @schema customErrorMessage = 커스텀 에러 메세지
 * @schema wrapClass = 컴포넌트 외부 클래스
 * @schema maxLength = 최대 길이
 * @schema validate = 입력 값 자체를 제어할 유효성 체크용 정규식 값
 * @schema validateTypeIsAllowed = 입력값을 허용할지 여부(false면 제외할 속성이라고 판단)
 */
interface IAtomInputProps {
  type?: 'url' | 'text' | 'password' | 'tel' | 'search' | 'number' | 'email';
  name?: string;
  initialValue?: string;
  disabled?: boolean;
  successMessage?: string;
  defaultMessage?: string;
  customErrorMessage?: string;
  wrapClass?: string;
  maxLength?: number;
  validate?: string[];
  validateTypeIsAllowed?: boolean;
}
const props = withDefaults(defineProps<IAtomInputProps>(), {
  type: 'text',
  name: '',
  initialValue: '',
  disabled: false,
  successMessage: '',
  defaultMessage: '',
  customErrorMessage: '',
  wrapClass: '',
  maxLength: undefined,
  validate: undefined,
  validateTypeIsAllowed: true,
});
const emit = defineEmits(['update:modelValue', 'search']);

const { value, errorMessage, setValue } = useField(props.name, '', {
  initialValue: props.initialValue ? props.initialValue : '',
});

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

// 입력된 값에 대해 validate를 처리하는 함수
const validateInput = (value: string, validate: string[], isAllowed: boolean) => {
  const regexPattern = validate
    .map((key) => REGEX_VALIDATION[key])
    .join('');

  return value.replace(new RegExp(`[${isAllowed ? '^' : ''}${regexPattern || validate}]`, 'g'), '');
};

</script>

<template>
  <div class="form-input-wrap" :class="[wrapClass]">
    <input
      :id="name"
      v-model="value"
      :type="type"
      :name="name"
      :disabled="disabled"
      :class="{ error: errorMessage || customErrorMessage }"
      autocomplete="off"
      class="form-input"
      v-bind="filteredAttrs"
      @input="onInput"
      @search="onSearchInput"
    >
    <slot />
    <button v-if="type==='search'" type="button" class="search-button" @click="onSearchInput"/>
    <p v-if="errorMessage || customErrorMessage" class="form-validation error" >
      <i class="icon vail_warning"/>
      {{ customErrorMessage || errorMessage }}
    </p>
    <p v-else-if="value && successMessage" class="form-validation complete">
      <i class="icon vail_check"/>
      {{ successMessage }}
    </p>
    <p v-else-if="!value && defaultMessage" class="form-validation">
      {{ defaultMessage }}
    </p>
  </div>
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
