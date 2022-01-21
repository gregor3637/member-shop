import React, { useEffect, useState } from "react";
import styled from "styled-components";

import useToggle from "../../../hooks/useToggle";
import { MarketFilterProvider } from "../../../store/MarketFilters/MarketFilterContext";
import FilterOptions from "./components/Filter/FilterOptions";
import Options from "./components/Options/Options";
import SelectedFilters from "./components/SelectedFilters/SelectedFilters";
import ItemsContainer from "./components/Items/ItemsContainer";

const MarketplacePage = (props) => {
  const [displayFilters, toggleDisplayFilters] = useToggle(true);
  const [scrollDir, setScrollDir] = useState("scrolling down");
  const [isScrollingDown, setIsScrollingDown] = useState(false);

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

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);

  let greyFilterClassNames = isScrollingDown ? "moved-down" : "moving-up";
  greyFilterClassNames += displayFilters ? "" : " hide";

  return (
    <Styled>
      <MarketFilterProvider>
        <OptionsContainerX className={isScrollingDown ? "moved-down" : ""}>
          <Options
            displayFilters={displayFilters}
            toggleDisplayFilters={toggleDisplayFilters}
          />
        </OptionsContainerX>
        <DivX>
          <FiltersContainerX className={greyFilterClassNames}>
            <FilterOptions />
          </FiltersContainerX>

          <RightX>
            <SelectedFilters />
            <ItemsContainer />
          </RightX>
        </DivX>
      </MarketFilterProvider>
    </Styled>
  );
};

const RightX = styled.div`
  width: 100%;
  padding: 0 1rem;

  overflow: hidden;
  display: flex;
  flex-direction: column;

  background-color: rgb(228, 228, 228);
`;

const FiltersContainerX = styled.div`
  /* opacity: 0.5; */
  background-color: var(--color-white);

  border-radius: var(--marketplace-border-radius);
  position: sticky;
  top: 8rem;

  // -height of (Header, OptionsContainerX)
  height: calc(100vh - 8rem - 5.6rem);
  // -height of (Header, OptionsContainerX, margin-bottom)
  height: calc(100vh - 8rem - 5.6rem - 1rem);
  padding: 0 0 0 1rem;
  margin-left: 1rem;

  display: flex;
  align-items: top;
  justify-content: center;
  transition: all 0.2s ease-in;

  &.moved-down {
    height: calc(100vh - 8rem);
    
    top: calc(8rem + 1rem);
    height: calc(100vh - 8rem - 2rem);
  }

  &.moving-up {
    top: calc(8rem + 5.6rem);
  }

  &.hide {
    margin-left: -29rem;
  }
`;

const DivX = styled.div`
  display: flex;
`;

const OptionsContainerX = styled.div`
  background-color: var(--color-none);
  position: sticky;
  top: 8rem;

  height: 5.6rem;
  width: 100%;
  padding: 0 1rem;
  transition: all 0.2s ease-in;

  display: flex;
  align-items: center;

  &.moved-down {
    top: 1.4rem;
  }
`;

const Styled = styled.div`
  background-color: var(--marketplace-button-background);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export default MarketplacePage;
