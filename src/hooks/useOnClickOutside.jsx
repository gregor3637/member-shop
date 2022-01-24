import { useEffect, useRef } from "react";

const useOnClickOutside = (watchElements, handler, isListening = true) => {
  const watchElementsRef = useRef(watchElements);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (!watchElementsRef.current) return;

      const touchingWatched = watchElementsRef.current.some(
        (el) => el.current && el.current.contains(e.target)
      );

      if (!touchingWatched) {
        handler(e);
      }
    };

    if (isListening) {
      document.addEventListener("mousedown", checkIfClickedOutside);
    }

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [handler, isListening]);
};

export default useOnClickOutside;
