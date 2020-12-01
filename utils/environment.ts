const hasWindow = (): boolean => typeof window !== "undefined";

export const isMac = (): boolean =>
  hasWindow() && window.navigator.platform.toLowerCase().startsWith("mac");

export const isOffLine = (): boolean => hasWindow() && !window.navigator.onLine;
