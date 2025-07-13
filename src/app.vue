<script setup lang="ts">
import Toast from '@/components/Toast.vue';
import ModalContainer from '@/components/ModalContainer.vue';
import Alert from '@/components/Alert.vue';
</script>

<template>
  <ClientOnly>
    <NuxtLayout>
      <NuxtPage />
      <Alert />
      <Toast />
      <ModalContainer />
    </NuxtLayout>
  </ClientOnly>
</template>
