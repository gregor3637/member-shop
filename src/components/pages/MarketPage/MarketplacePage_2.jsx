import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { MarketFilterProvider } from "../../../store/MarketFilters/MarketFilterContext";
import FilterOptions from "./components/Filter/FilterOptions";
import Options from "./components/Options/Options";
import SelectedFilters from "./components/SelectedFilters/SelectedFilters";
import ItemsContainer from "./components/Items/ItemsContainer";

const MarketplacePage_2 = (props) => {
  const [isFilterMenuOn, setIsFilterMenuOn] = useState(true);
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

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);

  let greyFilterClassNames = isScrollingDown ? "moved-down" : "moving-up";
  greyFilterClassNames += isFilterMenuOn ? "" : " hide";

  return (
    <Styled>
      <MarketFilterProvider>
        <RightX>
          <OptionsContainerX className={greyFilterClassNames}>
            <Options setIsFilterMenuOn={setIsFilterMenuOn} />
          </OptionsContainerX>
          {/* <DivX>
            <FilterContainerX className={greyFilterClassNames}>
              <FilterOptions />
            </FilterContainerX>
          </DivX> */}
          <ItemsContainer />
        </RightX>
      </MarketFilterProvider>
    </Styled>
  );
};

const RightX = styled.div`
  flex: 1;

  border-radius: var(--marketplace-border-radius);
  background: var(--marketplace-background);
  margin: 1rem;

  overflow: clip;
`;

const OptionsContainerX = styled.div`
  background-color: var(--color-none);

  position: sticky;
  /* position: fixed; */
  top: 0;
  margin-bottom: 1rem;

  width: 100%;
  transition: all 0.2s ease-in;

  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--color-border);

  &.moving-up {
    top: 8rem;
  }
`;

const FilterContainerX = styled.div`
  position: fixed;
  position: sticky;
  top: 8.6rem;
  padding-left: 1.4rem;

  height: calc(100vh - 5.6rem - 1rem);

  background-color: var(--marketplace-background);
  background-color: red;
  border-radius: var(--marketplace-border-radius);

  &.hide {
    margin-left: -29rem;
    display: none;
  }
`;

const DivX = styled.div`
  display: flex;
  flex-direction: row;

  background: green;
`;

const Styled = styled.div`
  background-color: var(--marketplace-button-background);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export default MarketplacePage_2;
