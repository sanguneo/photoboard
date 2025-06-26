<script setup lang="ts">

const { log, isOnline, networkType, data, data2 } = usePageVisibility();

const stat = ref();

function getNetworkType() {
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

  if (!connection) {
    return 'unknown'; // 브라우저가 지원하지 않는 경우
  }

  // connection.type 은 deprecated, 대신 effectiveType 사용
  const type = connection.effectiveType;

  if (type.includes('wifi')) return 'wifi';
  if (type.includes('cellular') || type.includes('3g') || type.includes('4g') || type.includes('5g')) return 'cellular';

  return type; // 'ethernet', 'slow-2g', etc.
}

const onClickbutton = () => {
  stat.value = getNetworkType();
};



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

    <h1><button @click="onClickbutton">클릭</button></h1>
    <h1>stat : {{ stat }}</h1>
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
