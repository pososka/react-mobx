import React, { useEffect, useState } from 'react';

const useLocalStorage = <T>(
  key: string,
  defaultValue: T,
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const getValue = (): T => {
    const storageItem = localStorage.getItem(key);

    if (storageItem) {
      return JSON.parse(storageItem);
    }

    return defaultValue;
  };

  const [value, setValue] = useState<T>(getValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export { useLocalStorage };
