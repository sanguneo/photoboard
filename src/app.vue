<script setup lang="ts"></script>

<template>
  <ClientOnly>
    <NuxtLayout>
      <NuxtPage />
      <Alert />
      <Toast />
      <Modals />
    </NuxtLayout>
  </ClientOnly>
</template>
