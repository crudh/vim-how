import { useEffect, useState } from "react";
import { hasWindow, isOffLine } from "../utils/environment";

export const useIsOffline = (): boolean => {
  const [offline, setOffline] = useState(isOffLine);

  useEffect(() => {
    if (!hasWindow()) return;

    const handleUpdateOffline = () => setOffline(isOffLine());

    window.addEventListener("online", handleUpdateOffline);
    window.addEventListener("offline", handleUpdateOffline);

    return () => {
      window.removeEventListener("online", handleUpdateOffline);
      window.removeEventListener("offline", handleUpdateOffline);
    };
  }, []);

  return offline;
};
