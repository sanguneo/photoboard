<script setup lang="ts">
</script>
<template>
  <main>
    <NuxtLink to="/idb">IDB(순서보장x, 대신 객체 그대로 저장, JSON 객체(스트링아님) 도 넣을 수 있음</NuxtLink>
    <br><br>vs<br><br>
    <NuxtLink to="/idb">IDBFS(순서보장, POSIX-FS 그대로 사용가능, 메타정보 저장불가)</NuxtLink>
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

