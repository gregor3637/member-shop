import React from "react";
import styled from "styled-components";

import useMarketFilters from "../../../../hooks/Market/useMarketFilters";
import useToggle from "../../../../hooks/useToggle";
import DropdownArrow from "../../../General/Arrow/DropdownArrow";
import HollowButton from "../../../General/Buttons/HollowButton";
import LargeDisplaySVG from "../../../../img/svg/LargeDisplaySVG";
import SmallDisplaySVG from "../../../../img/svg/SmallDisplaySVG";
import FilterSVG from "../../../../img/svg/FilterSVG";
import SelectedFiltersNew from "./SelectedFiltersNew";
import SortBy from "./SortBy";

const Options = (props) => {
  const { state, dispatch } = useMarketFilters();
  const [largeDisplayOn, toggleLargeDisplayOn] = useToggle(true);

  const displayLargeHandler = () => {};

  return (
    <Styled>
      <LeftX>
        <SpanX>5985 results</SpanX>
      </LeftX>
      {/* <SelectedFiltersNew /> */}
      <AdditionalButtonsX>
        <ButtonX onClick={props.toggleDisplayFilters}>
          <span>Selected Filters</span>
          <FilterSVG />
        </ButtonX>
        <ButtonX onClick={props.toggleDisplayFilters}>
          <span>{props.displayFilters ? "Hide Filters" : "Show Filters"}</span>
          <FilterSVG />
        </ButtonX>
        <SortBy />
        <DisplayContainerX>
          <ButtonYXZ disabled={!largeDisplayOn} onClick={toggleLargeDisplayOn}>
            <LargeDisplaySVG
              color={!largeDisplayOn ? "#000" : "#888"}
              fill={!largeDisplayOn ? "#000" : "#888"}
            />
          </ButtonYXZ>
          <ButtonYXZ disabled={largeDisplayOn} onClick={toggleLargeDisplayOn}>
            <SmallDisplaySVG color={largeDisplayOn ? "#000" : "#888"} />
          </ButtonYXZ>
        </DisplayContainerX>
      </AdditionalButtonsX>
    </Styled>
  );
};

const ButtonYXZ = styled(HollowButton)`
  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const DisplayContainerX = styled.div`
  margin-left: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  ${ButtonYXZ}:first-of-type {
    /* background-color: var(--color-border); */
  }
`;

const HollowButtonX = styled(HollowButton)`
  background-color: var(--button-color-blue);
  padding: 0.4rem 1rem;

  border-radius: 0.8rem;

  color: var(--color-white);
  font-weight: 500;
`;

const ButtonX = styled(HollowButton)`
  span {
    margin-right: 0.2rem;
  }

  margin-right: 2rem;
`;

const SpanX = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
`;

const AdditionalButtonsX = styled.div`
  padding-left: 3rem;

  flex: 0 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeftX = styled.div`
  flex: 0 0 auto;
`;

const Styled = styled.div`
  width: 100%;
  padding: 0 1rem;

  border: 2px solid #666;
  border-radius: var(--marketplace-border-radius);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default Options;
