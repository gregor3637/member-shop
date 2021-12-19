import React, { useCallback } from "react";
import styled from "styled-components";
import useMarketFilters from "../../../../../hooks/Market/useMarketFilters";

import useToggle from "../../../../../hooks/useToggle";
import DropdownArrow from "../../../../General/Arrow/DropdownArrow";
import ToggleButtonContainer from "./Buttons/ToggleButtonContainer";

const FilterDropDownContextControllingCheckboxesWithCSSNew = ({
  label,
  style,
}) => {
  const { state, dispatch: updateMarkedFilters } = useMarketFilters();
  const [isOpen, toggleIsOpen] = useToggle();
  const buttonClickHandle = useCallback(
    (event) => {
      updateMarkedFilters({
        type: "rank",
        value: event.currentTarget.dataset.label,
      });
    },
    [updateMarkedFilters]
  );

  const selectedState = state["rank"];
  const containsHasOffer = selectedState.includes("Has Offers");
  const containsNew = selectedState.includes("New");
  const containsBuyNow = selectedState.includes("Buy Now");
  const containsOnAuction = selectedState.includes("On Auction");

  return (
    <Styled style={style}>
      <SpanX onClick={toggleIsOpen}>
        <div>{label}</div>
        <DropdownArrowX isOpen={isOpen} />
      </SpanX>
      <MenuOptionsContainerX className={isOpen ? "open" : ""}>
        <div>
          <ToggleButtonContainer
            isActive={containsHasOffer}
            onClick={buttonClickHandle}
            label="Has Offers"
          />
          <ToggleButtonContainer
            isActive={containsNew}
            onClick={buttonClickHandle}
            label="New"
          />
          <ToggleButtonContainer
            isActive={containsBuyNow}
            onClick={buttonClickHandle}
            label="Buy Now"
          />
          <ToggleButtonContainer
            isActive={containsOnAuction}
            onClick={buttonClickHandle}
            label="On Auction"
          />
        </div>
      </MenuOptionsContainerX>
    </Styled>
  );
};

const DropdownArrowX = styled(DropdownArrow)`
  padding-right: 1rem;
`;

const MenuOptionsContainerX = styled.div`
  display: block;
  height: 0;

  padding-bottom: 0.5rem;
  overflow: hidden;

  /* border-bottom: 1px solid var(--color-border); */

  &.open {
    padding-bottom: 3rem;
    height: auto;
    overflow: visible;
    border-bottom: none;
  }

  & > div {
    margin-top: 1rem;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }
`;

const SpanX = styled.span`
  padding-bottom: 0.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;

  & > div {
    font-size: 1.6rem;
    font-weight: 400;
  }
`;

const Styled = styled.div`
  width: 100%;
  border-top: 1px solid var(--color-border);
  padding-top: 1rem;
`;

export default FilterDropDownContextControllingCheckboxesWithCSSNew;
