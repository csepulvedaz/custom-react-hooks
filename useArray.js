import { useState } from "react";

const useArray = (initialValue = []) => {
  const [value, setValue] = useState(initialValue);

  const push = (element) => {
    setValue((prevValue) => [...prevValue, element]);
  };

  const remove = (index) => {
    setValue((prevValue) => prevValue.filter((_, i) => i !== index));
  };

  const clear = () => setValue([]);

  const isEmpty = () => value.length === 0;

  return { value, setValue, push, remove, clear, isEmpty };
};

export default useArray;
