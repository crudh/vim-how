import { useEffect, useState } from "react";

export const useDebouncedValue = <T>(
  initialValue: T,
  delay: number
): [T, T, (updatedValue: T) => void] => {
  const [value, setValue] = useState(initialValue);
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return [debouncedValue, value, setValue];
};
