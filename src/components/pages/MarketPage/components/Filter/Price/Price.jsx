import React, { useState } from "react";
import styled from "styled-components";
import useMarketFilters from "../../../../../../hooks/Market/useMarketFilters";
import useToggle from "../../../../../../hooks/useToggle";
import DropdownArrow from "../../../../../General/Arrow/DropdownArrow";
import ToggleButtonContainer from "../Buttons/ToggleButtonContainer";
import PriceComponent from "./PriceComponent";

const Price = ({ label, style }) => {
  const { state, dispatch: updateMarkedFilters } = useMarketFilters();
  const [isOpen, toggleIsOpen] = useToggle();

  const [currency, setCurrency] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  return (
    <Styled>
      <SpanX onClick={toggleIsOpen}>
        <div>{label}</div>
        <DropdownArrowX isOpen={isOpen} />
      </SpanX>
      <MenuOptionsContainerX className={isOpen ? "open" : ""}>
        <PriceComponent />
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

  &.open {
    padding-bottom: 3rem;
    height: auto;
    overflow: visible;
    border-bottom: none;
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
`;

export default Price;
