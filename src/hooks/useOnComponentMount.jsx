import { useEffect } from "react";

const useOnComponentMount = (onMountFn, onUnmountFn = () => {}) => {
  useEffect(() => {
    onMountFn();
    return onUnmountFn;
  }, []); /* eslint-disable-line */
};

export default useOnComponentMount;
