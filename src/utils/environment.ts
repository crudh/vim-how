export const hasWindow = (): boolean => typeof window !== "undefined";

export const isOffLine = (): boolean => hasWindow() && !window.navigator.onLine;
