import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import useMarketFiltersContext from "../../../../../../../hooks/Market/useMarketFiltersContext";
import Dropdown from "../../DropDown/Dropdown";
import DropdownContent from "./Elements/DropdownContent";

const ActiveFilters = (props) => {
  const clickContainerRef = useRef();
  const absoluteContainerRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const {
    state: { count: filtersCount },
  } = useMarketFiltersContext();

  const handleClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (
        isMenuOpen &&
        absoluteContainerRef.current &&
        !absoluteContainerRef.current.contains(e.target) &&
        clickContainerRef.current &&
        !clickContainerRef.current.contains(e.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isMenuOpen]);

  return (
    <BtnContainerX>
      <ButtonX onClick={handleClick} ref={clickContainerRef}>
        <span>Filters</span>
      </ButtonX>
      {filtersCount > 0 && <CircleX>{filtersCount}</CircleX>}
      <Dropdown
        isOpen={isMenuOpen}
        closeHandle={handleClick}
        ref={absoluteContainerRef}
      >
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

export default ActiveFilters;
