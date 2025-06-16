<script setup lang="ts">
import Alert from '@/components/Alert.vue';
import Toast from '@/components/Toast.vue';
import Modals from '@/components/Modals.vue';
import Loading from '@/components/Loading.vue';
</script>

<template>
  <ClientOnly>
    <NuxtLayout>
      <NuxtPage />
      <Loading />
      <Alert />
      <Toast />
      <Modals />
    </NuxtLayout>
  </ClientOnly>
</template>
