import React, { useRef, useState } from "react";
import { useCallback } from "react";
import styled from "styled-components";

import useMarketFiltersContext from "../../../../../../../hooks/Market/useMarketFiltersContext";
import Dropdown from "../../DropDown/Dropdown";
import DropdownContent from "./Elements/DropdownContent";
import useOnClickOutside from "../../../../../../../hooks/useOnClickOutside";

const ActiveFilters_test = (props) => {
  console.log("lololololoooooooooooooo");
  const dropdownButton = useRef();
  const dropdownContent = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const outsideClickHandler = useCallback(() => {
    setIsMenuOpen(false);
  }, [setIsMenuOpen]);

  const {
    state: { count: filtersCount },
  } = useMarketFiltersContext();

  useOnClickOutside(
    [dropdownButton, dropdownContent],
    outsideClickHandler
  );

  const handleClick = (ev) => {
    setIsMenuOpen((old) => !old);
  };

  return (
    <BtnContainerX>
      <ButtonX ref={dropdownButton} onClick={handleClick}>
        <span>Filters</span>
      </ButtonX>
      {filtersCount > 0 && <CircleX>{filtersCount}</CircleX>}
      <Dropdown
        isOpen={isMenuOpen}
        closeHandle={() => {}}
        ref={dropdownContent}
      >
        {/* <Dropdown isOpen={isMenuOpen} closeHandle={handleClick}> */}
        <DropdownContent />
      </Dropdown>
    </BtnContainerX>
  );
};

const CircleX = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  transform: translate(80%, -45%);
  margin: 0 1rem;
  padding: 0 8px;

  background-color: var(--color-red-bright);
  border-radius: 1.2rem;

  line-height: 1;

  font-size: 1.4rem;
  font-weight: 400;
`;

const ButtonX = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.4rem 1rem;

  background-color: var(--marketplace-button-background);
  border-radius: 1.2rem;
  outline: none;
  border: none;

  font-size: 1.4rem;
  font-weight: 400;

  cursor: pointer;

  div {
    margin-right: 1.6rem;
  }
`;

const BtnContainerX = styled.div`
  position: relative;
  margin: 0 0.5rem;
`;

export default ActiveFilters_test;
