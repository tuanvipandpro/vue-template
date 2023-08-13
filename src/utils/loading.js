import { ElLoading } from "element-plus";

export function useLoading() {
  function getPageLoading() {
    const loading = ElLoading.service({
      lock: true,
      text: "Loading",
      background: "rgba(0, 0, 0, 0.7)",
    });
    setTimeout(() => {
      loading.close();
    }, 1000);
  }

  return {
    getPageLoading,
  };
}
