import React from "react";
import styled from "styled-components";

import { MarketFilterProvider } from "../../../store/MarketFilters/MarketFilterContext";
import PickedFilters from "./components/Filter/PickedFilters";
import FilterMenuNew from "./components/Filter/FilterMenuNew";
import Options from "./components/Options";
import SelectedFiltersNew from "./components/SelectedFiltersNew";
import useToggle from "../../../hooks/useToggle";
import ItemsContainer from "./components/Items/ItemsContainer";
import { useState } from "react";
import { useEffect } from "react";
import FilterMenu from "./components/Filter/FilterMenu";

const MarketPageNew = (props) => {
  const [displayFilters, toggleDisplayFilters] = useToggle(true);

  // now the below 'useEffect' can be replaced by a custom component
  // that listens for STATE change of the MarketFilterProvider`s reducer

  // useEffect(() => {
  //   console.log("Send request");
  //   setMultiPropsFilter();
  //   // const filteredItems = api(pickedInfo.colors, pickedInfo_2.colors);
  //   // setCards(filteredItems)
  // }, [pickedInfo]);

  const [headerOn, togglHeheaderOn] = useToggle(false);

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
    console.log(scrollDir);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);

  let greyFilterClassNames = isScrollingDown ? "moved-down" : "moving-up";
  greyFilterClassNames += displayFilters ? "" : " hide";

  return (
    <MarketFilterProvider>
      <Styled>
        <OptionsContainer className={isScrollingDown ? "moved-down" : ""}>
          <Options
            displayFilters={displayFilters}
            toggleDisplayFilters={toggleDisplayFilters}
          />
        </OptionsContainer>
        <WallHeaderOffset></WallHeaderOffset>
        <DivX>
          <FiltersContainerX className={greyFilterClassNames}>
            <FilterMenuNew />
          </FiltersContainerX>
          <RightX>
            {/* <SelectedFiltersNew /> */}
            <ItemsContainer />
          </RightX>
        </DivX>
      </Styled>
    </MarketFilterProvider>
  );
};

const RightX = styled.div`
  width: 100%;
  height: 100;
  /* background-color: gold; */
  padding: 2rem 2rem;
  /* background-color: #eef0f3; */
  background-color: rgb(228, 228, 228);

  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const WallHeaderOffset = styled.div`
  background-color: var(--color-white);
  width: 100%;
  height: 1.5rem;
`;

const ElementsContainerTestX = styled.div`
  /* background-color: yellowgreen; */
  background-color: var(--color-white);
  flex: 1;
  padding: 0 2rem;
`;

const FiltersContainerX = styled.div`
  /* background-color: #fcac0d; */
  background-color: var(--color-white);
  position: sticky;
  top: 7rem;

  height: calc(100vh - 7rem - 5.6rem);
  padding: 0 0 0 4rem;

  flex: 0 0 auto;

  display: flex;
  align-items: top;
  justify-content: center;

  transition: all 0.2s ease-in;

  &.moved-down {
    height: calc(100vh - 7rem);
  }

  &.moving-up {
    top: calc(7rem + 5.6rem);
  }

  &.hide {
    margin-left: -26rem;
  }
`;

const DivX = styled.div`
  display: flex;
`;

const OptionsContainer = styled.div`
  background-color: var(--color-white);
  position: sticky;
  top: 7rem;

  height: 5.6rem;
  width: 100%;
  padding: 0 3em;
  transition: all 0.2s ease-in;

  display: flex;
  align-items: center;

  &.moved-down {
    top: 1.4rem;
  }
`;

const Styled = styled.div`
  /* background-color: orangered; */

  display: flex;
  flex-direction: column;
`;

export default MarketPageNew;
