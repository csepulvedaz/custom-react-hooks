import { useState } from "react";

export const useSetState = (initState) => {
  const [state, setState] = useState(initState);

  const setMergeState = (value) => {
    setState((prevValue) => {
      const newValue = typeof value === "function" ? value(prevValue) : value;
      return newValue ? { ...prevValue, ...newValue } : prevValue;
    });
  };

  return [state, setMergeState];
};
