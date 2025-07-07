<script setup lang="ts">
import type { TModalResult, IModalOption } from '@/types/modal.types.ts';
import type { ComponentOptions, Component } from 'vue';

const attrs = useAttrs() as {
  id?: string;
  options: IModalOption;
  component: Component;
  componentProps?: ComponentOptions;
  onClose?: (modalResult: TModalResult) => void;
};

const isVisible = ref<boolean>(false);
const { isVisible: isOpenAlert } = storeToRefs(useAlertStore());

const closeModal = (modalResult: TModalResult) => {
  if (typeof attrs.onClose === 'function') {
    attrs.onClose(modalResult);
  }
  isVisible.value = false;
};

onMounted(() => {
  isVisible.value = true;
});

defineOptions({
  inheritAttrs: false,
});
</script>

<template>
  <Teleport to="body">
    <Transition>
      <div v-if="isVisible" class="modal-dim" :class="{'no-dim' : isOpenAlert}">
        <section class="modal" :style="{ width: attrs.options.width }">
          <div v-if="attrs.options.title" class="modal-header">
            <h2 class="title">{{ attrs.options.title }}</h2>
            <span v-if="attrs.options.subTitle" class="title-sub">{{ attrs.options.subTitle }}</span>
            <button v-if="!attrs.options.hideCloseBtn" type="button" class="close-btn" @click="closeModal(false)">
              <i class="icon close" />
            </button>
          </div>
          <component :is="attrs.component" v-bind="attrs.componentProps || {}" @close-modal="closeModal" />
        </section>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss" scoped>
.modal-dim {
  &.no-dim {
    background-color: rgba(0,0,0,0);
  }
}

.modal{
  box-shadow: 0 5px 15px 0 rgba(25, 33, 61, 0.11);
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
