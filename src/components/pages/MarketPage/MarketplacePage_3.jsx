import React, { useEffect, useState } from "react";
import styled from "styled-components";

import useToggle from "../../../hooks/useToggle";
import { MarketFilterProvider } from "../../../store/MarketFilters/MarketFilterContext";
import FilterOptions from "./components/Filter/FilterOptions";
import Options from "./components/Options/Options";
import SelectedFilters from "./components/SelectedFilters/SelectedFilters";
import ItemsContainer from "./components/Items/ItemsContainer";

const MarketplacePage_3 = (props) => {
  const [isFilterMenuOn, setIsFilterMenuOn] = useState(true);
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
  greyFilterClassNames += isFilterMenuOn ? "" : " hide";

  return (
    <Styled>
      <MarketFilterProvider>
        <WrapperX>
          <OptionsContainerX className={greyFilterClassNames}>
            <Options setIsFilterMenuOn={setIsFilterMenuOn} />
          </OptionsContainerX>

          <DownX>
            <FiltersContainerX className={greyFilterClassNames}>
              <FilterOptions />
            </FiltersContainerX>

            <ItemsContainerX>
              <ItemsContainer />
            </ItemsContainerX>
          </DownX>
        </WrapperX>
        <DivX></DivX>
      </MarketFilterProvider>
    </Styled>
  );
};

const TextX = styled.div``;

const DownX = styled.div`
  display: flex;
  flex-direction: row;
`;

const ItemsContainerX = styled.div`
  width: 100%;

  overflow: hidden;
  display: flex;
  flex-direction: column;

  background-color: rgb(228, 228, 228);
  background: red;
`;

const WrapperX = styled.div`
  position: relative;
  border-radius: var(--marketplace-border-radius);
  background: gold;
  background: var(--marketplace-background);
  background: var(--none);

  /* margin: 1rem;
  overflow: clip; */
  
  margin: 0 1rem;
  overflow: hide;

`;

const OptionsContainerX = styled.div`
  background-color: var(--color-none);
  background-color: var(--marketplace-background);
  position: sticky;
  top: 9rem;
  margin-bottom: 1rem;

  border-bottom-left-radius: var(--marketplace-border-radius);
  border-bottom-right-radius: var(--marketplace-border-radius);

  /* margin-top: 1rem; */
  /* padding: 0 1rem; */

  height: 4rem;
  width: 100%;
  transition: all 0.2s ease-in;

  display: flex;
  align-items: center;

  &.moved-down {
    top: 4rem;
  }

  &.moving-up {
    top: 8rem;
  }
`;
const FiltersContainerX = styled.div`
  /* opacity: 0.5; */
  background-color: var(--color-white);

  border-radius: var(--marketplace-border-radius);
  position: sticky;
  top: 8rem;
  margin-right: 1rem;

  // -height of (Header, OptionsContainerX, margin-bottom)
  height: calc(100vh - 8rem - 7rem);

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
    top: calc(8rem + 4rem + 1rem);
    height: calc(100vh - 8rem - 6rem);
  }

  &.hide {
    margin-left: -32rem;
    display: none;
  }
`;

const DivX = styled.div`
  display: flex;
`;

const Styled = styled.div`
  background-color: var(--marketplace-button-background);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export default MarketplacePage_3;
