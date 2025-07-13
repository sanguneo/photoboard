<script setup lang="ts">
import ModalWrapper from '@/components/ModalWrapper.vue';

const modalStore = useModalStore();
const modals = computed(() => {
  return modalStore.modalComponentObjects;
});
</script>
<template>
  <ModalWrapper v-for="modal in modals" v-bind="modal" :key="modal.id" />
</template>
