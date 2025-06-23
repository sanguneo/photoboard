/* eslint-disable @typescript-eslint/no-explicit-any */

export declare global {
  interface Navigator {
    mozConnection?: Navigator['connection'];
    webkitConnection?: Navigator['connection'];
  }

  interface Window {
    app: any;
    webkit: any;
    updateWifiStatus: any;
  }

  interface globalThis {
    app: any;
    webkit: any;
    updateWifiStatus: any;
  }
}


