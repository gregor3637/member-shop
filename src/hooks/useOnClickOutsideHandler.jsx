import { useRef } from "react";
import useOnClickOutside from "./useOnClickOutside";

const useOnClickOutsideHandler = (onClickOutside, isActive) => {
  const ref = useRef();
  useOnClickOutside([ref], onClickOutside, isActive);

  return ref;
};

export default useOnClickOutsideHandler;
