import React from "react";
import styled from "styled-components";

import useMarketFilters from "../../../../../hooks/Market/useMarketFilters";
import useToggle from "../../../../../hooks/useToggle";
import DropdownArrow from "../../../../General/Arrow/DropdownArrow";
import HollowButton from "../../../../General/Buttons/HollowButton";
import LargeDisplaySVG from "../../../../../img/svg/LargeDisplaySVG";
import SmallDisplaySVG from "../../../../../img/svg/SmallDisplaySVG";
import FilterSVG from "../../../../../img/svg/FilterSVG";

const PickedFilters = (props) => {
  const { state, dispatch } = useMarketFilters();
  const [isSortedOn, toggleIsSortedOn] = useToggle();

  return (
    <Styled>
      <SelectedFiltersX>asd</SelectedFiltersX>
      <AdditionalButtonsX>
        <ButtonX>
          <span>Show Filters</span>
          <FilterSVG />
        </ButtonX>
        <ButtonYX onClick={toggleIsSortedOn}>
          <span>Sort By</span>
          <DropdownArrow isOpen={isSortedOn} />
        </ButtonYX>
        <DisplayContainerX>
          <ButtonYXZ>
            <LargeDisplaySVG />
          </ButtonYXZ>
          <ButtonYXZ>
            <SmallDisplaySVG />
          </ButtonYXZ>
        </DisplayContainerX>
      </AdditionalButtonsX>
      {/* <PickedContainerX> {chains} </PickedContainerX>
          <PickedContainerX> {status} </PickedContainerX>
          <PickedContainerX> {rarity} </PickedContainerX> */}
    </Styled>
  );
};

const AdditionalButtonsX = styled.div`
  background-color: violet;
  margin-left: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const SelectedFiltersX = styled.div`
  background-color: green;
  flex: 1;
`;

const ButtonYXZ = styled(HollowButton)`
  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const DisplayContainerX = styled.div`
  background-color: orangered;
  margin-left: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  ${ButtonYXZ}:first-of-type {
    background-color: var(--color-border);
  }
`;

const ButtonX = styled(HollowButton)`
  span {
    margin-right: 0.2rem;
  }

  margin-right: 2rem;
`;

const ButtonYX = styled(HollowButton)`
  span {
    margin-right: 1.6rem;
  }
`;

const Styled = styled.div`
  padding: 0 1rem;
  margin-bottom: 2rem;

  border: 1px solid var(--color-border);
  border-radius: 1.4rem;

  display: flex;
  align-items: center;
`;

export default PickedFilters;
