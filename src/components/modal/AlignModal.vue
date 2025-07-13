<script setup lang="ts">
import type { IRadioOption } from '@/types/radio.types.ts';

/**
 * @description 정렬 모달 props
 * @schema options = 라디오 옵션
 * @schema selectedValue = 선택된 값
 */
interface IAlignModalProps {
  options: IRadioOption[];
  selectedValue: string;
}

defineProps<IAlignModalProps>();

const emit = defineEmits(['closeModal']);

const handleRadioChange = (value: string) => {
  emit('closeModal', value);
};
</script>

<template>
  <div class="modal-list">
    <ul class="modal-list-menu">
      <li v-for="option in options" :key="option.id" class="modal-list-item">
        <div class="radio-box">
          <input :id="option.id" type="radio" class="radio-box_btn" name="radio" :checked="selectedValue === option.value" :aria-labelledby="option.id" @change="() => handleRadioChange(option.value)" />
          <label :id="option.id" class="radio-box_name" :for="option.id">
            <span class="r_circle" />
            {{ option.label }}
          </label>
        </div>
      </li>
    </ul>
  </div>
</template>
