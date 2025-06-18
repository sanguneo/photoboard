export function usePageVisibility() {
  const isHidden = ref(false);
  const log = ref([""]);
  const data = ref();
  const networkType = ref();

  const isOnline = computed(() => window.navigator.onLine);

  const handleVisibilityChange = async () => {
    isHidden.value = document.hidden;
    let hereLog = "";
    if (isHidden.value) {
      hereLog = "탭에서 벗어남";
      await getSampleApi();
    } else {
      hereLog = "탭으로 돌아옴";
    }
    console.log(hereLog);
    log.value.push(hereLog);
  };

  const getSampleApi = async () => {
    const res = await $fetch("https://test.com/test");
    data.value = res;
  };

  const handleNetwork = () => {
    if ("connection" in window.navigator) {
      const connection =
        window.navigator.connection ||
        window.navigator.mozConnection ||
        window.navigator.webkitConnection;

      networkType.value = connection.effectiveType;
      console.log("Effective type:", connection.effectiveType); // 예: 'wifi', '4g', 'ethernet' 등 추정값
      console.log("Downlink:", connection.downlink + "Mb/s");
      console.log("RTT:", connection.rtt + "ms");
    }
  };

  onMounted(() => {
    handleNetwork();
    if (import.meta.client) {
      document.addEventListener("visibilitychange", handleVisibilityChange);
    }
  });

  onBeforeUnmount(() => {
    if (import.meta.client) {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    }
  });

  return {
    isHidden,
    log,
    isOnline,
    networkType,
    data
  };
}
