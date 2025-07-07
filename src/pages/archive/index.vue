<script setup lang="ts"></script>
<template>
  <main>
    <NuxtLink to="/idb">IDB</NuxtLink>
    <br /><br />
    <NuxtLink to="/native">네이티브 기능 확인</NuxtLink>
    <br /><br />
    <NuxtLink to="/wifi">브라우저 기본 api</NuxtLink>
    <br /><br />
    <a href="tel:01092292790">전화테스트</a>
    <br />
    <NuxtLink to="/canvas">Canvas</NuxtLink>
    <br />
    <NuxtLink to="/konva">KonvaCanvas</NuxtLink>
  </main>
</template>
<style lang="scss" scoped>
main {
  margin: 0 auto;
  width: 400px;
}
a {
  font-size: 40px;
}
</style>
