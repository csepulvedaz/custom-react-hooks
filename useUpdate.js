import { useRef, useEffect } from "react";

export const useUpdate = (effectCallback, deps = []) => {
  const isFirstMount = useRef(false);

  useEffect(() => {
    return () => {
      isFirstMount.current = false;
    };
  }, []);

  useEffect(() => {
    // Do not execute effect callback for the first time
    if (!isFirstMount.current) {
      isFirstMount.current = true;
    } else {
      return effectCallback();
    }
  }, deps);
};
