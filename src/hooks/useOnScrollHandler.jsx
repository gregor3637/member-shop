import { useEffect, useState } from "react";

const useOnScrollHandler = (initialScrollingDirectionDown = true) => {
  const [isScrollingDown, setIsScrollingDown] = useState(
    initialScrollingDirectionDown
  );

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setIsScrollingDown(scrollY > lastScrollY ? true : false);
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    console.log("scrollDir ", isScrollingDown);

    return () => window.removeEventListener("scroll", onScroll);
  }, [isScrollingDown]);

  return [isScrollingDown];
};

export default useOnScrollHandler;
