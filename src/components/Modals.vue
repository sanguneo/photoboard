<script setup lang="ts">
import Modal from '@/components/Modal.vue';

const modalStore = useModalStore();

const modals = computed(() => modalStore.modalComponentObjects);

</script>

<template>
  <Modal v-for="modal in modals" v-bind="modal" :key="modal.id" />
</template>

<style lang="scss" scoped>

</style>
