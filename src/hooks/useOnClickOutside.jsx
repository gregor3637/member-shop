import { useEffect, useRef } from "react";

const useOnClickOutside = (watchElements, handler) => {
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

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [handler]);
};

export default useOnClickOutside;
