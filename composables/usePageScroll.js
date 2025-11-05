const usePageScroll = () => {
  let onScrollCallback;

  //TODO: add debouncing
  const onScroll = (callback) => {
    if (!process.client || !callback) return;

    onScrollCallback = callback;

    window.addEventListener("scroll", onScrollCallback);
  };

  const cleanup = () => {
    if (!process.client || !onScrollCallback) return;

    window.removeEventListener("scroll", onScrollCallback);
  };

  return { cleanup, onScroll };
};

export default usePageScroll;

