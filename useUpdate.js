import { useRef, useEffect } from "react";

const useUpdate = (effectCallback, deps = []) => {
  const isFirstMount = useRef(false);

  useEffect(() => {
    return () => {
      isFirstMount.current = false;
    };
  }, []);

  useEffect(() => {
    // Do not execute effect callback for the first time
    if (isFirstMount.current) {
      return effectCallback();
    }
    isFirstMount.current = true;
  }, deps);
};

export default useUpdate;
