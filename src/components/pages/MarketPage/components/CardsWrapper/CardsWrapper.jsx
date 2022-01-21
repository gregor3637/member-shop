import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ItemsContainer from "../Items/ItemsContainer";
import DisplayTypes from "./DisplayTypes/DisplayTypes";
import InputSearch from "../Common/InputSearch";
import SortBy from "./SortBy";

const CardsWrapper = (props) => {
  const [isLargeDisplay, setIsLargeDisplay] = useState(true);
  const [query, setQuery] = useState("");

  const [scrollDir, setScrollDir] = useState("scrolling down");
  const [isScrollingDown, setIsScrollingDown] = useState(true);

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
      setScrollDir(scrollY > lastScrollY ? "scrolling down" : "scrolling up");
      setIsScrollingDown(scrollY > lastScrollY);
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
    console.log("scrollDir ", scrollDir);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);

  let headerClass = isScrollingDown ? "moved-down" : "moving-up";

  const handleInput = (ev) => {
    setQuery(ev.target.value);
  };

  return (
    <WrapperX>
      <HeaderX className={headerClass}>
        <InputWrapper>
          <InputSearch
            inputVal={query}
            onInput={handleInput}
            onClear={() => setQuery("")}
          />
        </InputWrapper>
        <RightX>
          <SortBy />
          <DisplayTypes
            isLargeDisplay={isLargeDisplay}
            setIsLargeDisplay={setIsLargeDisplay}
          />
        </RightX>
      </HeaderX>

      <ItemsContainer />
    </WrapperX>
  );
};

const InputWrapper = styled.div`
  width: 100%;
  max-width: 500px;
`;

const RightX = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const HeaderX = styled.div`
  background-color: var(--color-white);
  position: sticky;
  top: 0;

  height: 6rem;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  border-bottom: 1px solid var(--color-border);
  transition: all 0.2s ease-in;

  &.moving-up {
    top: 8rem;
  }
`;

const WrapperX = styled.div`
  flex: 1;

  overflow: clip;
  display: flex;
  flex-direction: column;

  background-color: rgb(228, 228, 228);
  background: red;
  border-radius: var(--market-filters-outerWrapper-radius);
`;

export default CardsWrapper;
