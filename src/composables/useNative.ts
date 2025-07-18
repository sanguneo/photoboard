export const useNative = () => {
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

  const checkWifiAsBoolean = ()=>checkWifi().then((res) => {
    return res === 'Wifi 연결됨';
  });

  return {
    checkWifi,
    checkWifiAsBoolean,
  };
};
