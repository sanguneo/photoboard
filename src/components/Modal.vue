<script setup lang="ts">
import type { TModalResult, IModalOption } from '@/types/modal.types.ts';
import type { ComponentOptions, Component } from 'vue';
import { lockBodyScroll, unlockBodyScroll } from '@/shared/utils/scrollUtils.ts';

const attrs = useAttrs() as {
  id?: string;
  options: IModalOption;
  component: Component;
  componentProps?: ComponentOptions;
  onClose?: (modalResult: TModalResult) => void;
};

const isVisible = ref<boolean>(false);

const closeModal = (modalResult: TModalResult) => {
  if (typeof attrs.onClose === 'function') {
    attrs.onClose(modalResult);
  }
  isVisible.value = false;
};

const closeDimmed = () => {
  if (attrs.options.closeOnClickDimmed) {
    closeModal(false);
  }
};

onMounted(() => {
  isVisible.value = true;
  lockBodyScroll();
});

onUnmounted(() => {
  isVisible.value = false;
  unlockBodyScroll();
});
</script>

<template>
  <Transition>
    <div v-if="isVisible" class="modal-dim" @click.self="closeDimmed">
      <div class="modal" :class="attrs.options?.isBottomSheet ? 'modal-bottom' : 'modal-pop'">
        <h2 class="modal-title" :class="{ center: attrs.options.isTitleCenter }">{{ attrs.options.title }}</h2>
        <component :is="attrs.component" v-bind="attrs.componentProps || {}" @close-modal="closeModal" />
      </div>
    </div>
  </Transition>
</template>
<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
