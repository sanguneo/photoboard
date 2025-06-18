<script setup lang="ts">

const { log, isOnline, networkType, data, data2 } = usePageVisibility();


onMounted(() => {
  console.log('isConnect', isOnline.value);
  console.log('networkType', networkType.value);
});

</script>
<template>
  <main>
    <h1>WIFI TEST</h1>
    <h1>네트워그 연결 여부 : {{ isOnline  }}</h1>
    <h1>백그라운드 벗어났는지 로그 : {{ log }}</h1>
    <h1>networkType : {{ networkType }}</h1>
    <h1>sample data : {{ data }}</h1>
    <h1>sample data2222222222222 : {{ data2 }}</h1>
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

