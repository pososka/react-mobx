import { useState } from 'react';

const useToggle = (initialState = false): [boolean, () => void] => {
  const [value, setValue] = useState<boolean>(initialState);

  const toggle = () => {
    setValue(!value);
  };

  return [value, toggle];
};

export { useToggle };
