<script setup lang="ts">

const wifiStatus = ref<string>('⏳ 상태 확인 전');
const preview = ref<string>();

const onChangeFile = (event: Event) => {
  const file = (event.target as HTMLInputElement)?.files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      preview.value = (e.target as FileReader).result as string;
    };
    reader.readAsDataURL(file);
  }
};

function checkNetworkStatus() {
  wifiStatus.value = '⏳ 상태 확인 전';
  try {
    // Android Java의 @JavascriptInterface 메서드를 호출하여 와이파이 상태를 확인
    if (window.app && typeof window.app.checkWifiConnection === 'function') {
      alert('안드로이드에서 와이파이 상태를 확인합니다.!!!');
      window.app.checkWifiConnection();
    }
    // iOS Swift의 @objc 메서드를 호출하여 와이파이 상태를 확인
    else if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.ios_checkWifiConnection) {
      // show debug alert popup
      alert('iOS에서 와이파이 상태를 확인합니다.');
      window.webkit.messageHandlers.ios_checkWifiConnection.postMessage('checkWifiConnection');
    } else {
      alert('와이파이 상태를 확인할 수 있는 메서드가 정의되어 있지 않습니다.');
      console.error('app.checkWifiConnection 메서드가 정의되어 있지 않습니다.');
      wifiStatus.value = '❌ 와이파이 상태 확인 실패';
    }

  } catch (e) {
    alert('와이파이 상태 확인 중 오류 발생: ' + e.message);
    console.error('와이파이 상태 확인 중 오류 발생:', e);
    wifiStatus.value = '❌ 와이파이 상태 확인 실패';
  }
}

// 와이파이 상태 확인 결과를 표시하는 함수
function updateWifiStatus(status_str: string) {
  alert('[updateWifiStatus]와이파이 상태 확인 결과: ' + status_str);
  wifiStatus.value = status_str;
}

onMounted(() => {
  checkNetworkStatus();
  window.updateWifiStatus = updateWifiStatus;
});

</script>
<template>
  <main>
    <h2>📷 네이티브 브릿지 테스트 페이지</h2>

    <h3>📷 카메라 테스트</h3>
    <p>아래 버튼을 눌러 사진을 촬영하세요:</p>
    <input id="cameraInput" type="file" accept="image/*" capture="environment" @change="onChangeFile">


    <div>
      <p><strong>촬영한 사진 미리보기:</strong></p>
      <img v-if="preview" id="preview" :src="preview" alt="촬영 사진" >
    </div>

    <h3>📷 카메라 테스트</h3>
    <!-- 와이파이 상태 버튼 및 텍스트 -->
    <div>
      <button @click="checkNetworkStatus()">📶 와이파이 상태 확인</button>
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

