import { useRef, useEffect } from "react";

const useUnmount = (callback) => {
  const callbackRef = useRef(callback);

  callbackRef.current = callback;

  useEffect(() => {
    return () => callbackRef.current();
  }, []);
};

export default useUnmount;
