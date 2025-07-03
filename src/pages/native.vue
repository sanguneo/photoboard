<script setup lang="ts">
import heic2any from 'heic2any';

const wifiStatus = ref<string>('⏳ 상태 확인 전');
const preview = ref<string>();

const onChangeFile = async (event: Event) => {
  let file = (event.target as HTMLInputElement)?.files?.[0] as File;
  if (file) {
    if (file.name.includes('.heic')) {
      file = (await heic2any({ blob: file, toType: 'image/jpeg', quality: 1 })) as File;
    }
    const reader = new FileReader();
    reader.onload = function (e) {
      preview.value = (e.target as FileReader).result as string;
    };
    reader.readAsDataURL(file);
  }
};

const checkWifi = (timeout: number = 3000):Promise<string> => new Promise((resolve, reject) => {
  window.updateWifiStatus = resolve;
  try {
    if (window.app && typeof window.app.checkWifiConnection === 'function') {
      console.info('Check Wifi Connection on Android.');
      window.app.checkWifiConnection();
    } else if (window?.webkit?.messageHandlers?.ios_checkWifiConnection) {
      console.info('Check Wifi Connection on IOS.');
      window.webkit.messageHandlers.ios_checkWifiConnection.postMessage('checkWifiConnection');
    } else {
      throw new Error('No \'checkWifiConnection\' method');
    }
    setTimeout(() => {
      reject(new Error('Check Wifi status timeout'));
    }, timeout);
  } catch (e) {
    reject(e);
  }
});

const checkWifiStatus = async () => {
  try {
    wifiStatus.value = await checkWifi();
  } catch (e) {
    console.error(e);
    wifiStatus.value = '❌ 와이파이 상태 확인 실패';
  }
};
onMounted(() => {
  checkWifiStatus();
});

</script>
<template>
  <main>
    <h2>📷 네이티브 브릿지 테스트 페이지</h2>

    <h3>📷 카메라 테스트</h3>
    <p>아래 버튼을 눌러 사진을 촬영하세요:</p>
    <input id="cameraInput" type="file" accept="image/jpeg,image/png,image/webp,image/gif,image/bmp,image/svg+xml" capture="environment" @change="onChangeFile">


    <div>
      <p><strong>촬영한 사진 미리보기:</strong></p>
      <img v-if="preview" id="preview" :src="preview" alt="촬영 사진" >
    </div>

    <h3>📷 카메라 테스트</h3>
    <!-- 와이파이 상태 버튼 및 텍스트 -->
    <div>
      <button @click="checkWifiStatus()">📶 와이파이 상태 확인</button>
      <p id="wifiStatus">{{ wifiStatus }}</p>
    </div>
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

