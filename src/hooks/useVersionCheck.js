import { useEffect } from "react";
import { hashing } from "../utils/hash";

const useVersionCheck = () => {
  console.log("test");

  useEffect(() => {
    const checkForUpdates = async () => {
      try {
        const response = await fetch(
          `/asset-manifest.json?timestamp=${new Date().getTime()}`
        );
        const manifest = await response.json();

        const currentHash = localStorage.getItem("appHash");
        const newHash = await hashing(Object.values(manifest).join(""));

        if (currentHash && currentHash !== newHash) {
          alert("A new version is available. Please refresh the page.");
          localStorage.setItem("appHash", newHash);
          window.location.href =
            window.location.href.split("?")[0] +
            "?cacheBust=" +
            new Date().getTime();
        } else {
          localStorage.setItem("appHash", newHash);
        }
      } catch (error) {
        console.error("Error checking for updates:", error);
      }
    };

    // 初次加载时检查哈希
    checkForUpdates();

    // 每分钟检查一次
    const intervalId = setInterval(checkForUpdates, 5000);

    // 清除定时器
    return () => clearInterval(intervalId);
  }, []);
};

export default useVersionCheck;
