export const usePopup = () => {
  const openCenteredPopup = (url: string, title: string) => {
    const width = 700;
    const height = 750;
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;
    window.open(url, title, `width=${width},height=${height},left=${left},top=${top},toolbar=no,scrollbars=no,resizable=yes,status=no,menubar=no,location=no`);
  };

  return {
    openCenteredPopup,
  };
};
