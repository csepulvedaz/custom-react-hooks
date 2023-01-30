import { useRef, useEffect } from "react";

export const useUnmount = (callback) => {
  const callbackRef = useRef(callback);

  callbackRef.current = callback;

  useEffect(() => {
    return () => {
      callbackRef.current();
    };
  }, []);
};
