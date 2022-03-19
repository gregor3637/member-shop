import React, { useCallback, useRef } from "react";
import styled from "styled-components";

import useOnClickOutsideHandler from "../../../hooks/useOnClickOutsideHandler";
import useToggle from "../../../hooks/useToggle";

import SortSVG from "../../../img/currency/SortSVG";
import DropdownArrow from "../Arrow/DropdownArrow";
import DropDown from "../../pages/MarketplacePage/CommonElements/DropDown/DropDown";
import TickButton from "./TickButton/TickButton";

const SortBy2 = ({ options, selectedOption, onOptionSelect }) => {
  const [isShown, toggleShown] = useToggle(false);
  const outsideClickHandler = useCallback(() => {
    toggleShown();
  }, [toggleShown]);

  const outsideRef = useOnClickOutsideHandler(outsideClickHandler, isShown);
  const dropdownRef = useRef();

  const dropdownClickHandle = (ev) => {
    const isDropdownClicked = dropdownRef.current.contains(ev.target);
    if (!isDropdownClicked) toggleShown();
  };

  const optionButtonClickHandler = (label) => {
    onOptionSelect(label);
    toggleShown();
  };

  return (
    <WrapperX>
      <ButtonX onClick={dropdownClickHandle} ref={outsideRef}>
        <IconWrapperX>
          <SortSVG />
        </IconWrapperX>
        <span>{selectedOption ? selectedOption : "SortByzzz"}</span>
        <DropdownArrow isOpen={isShown} />
        <DropDownX isOpen={isShown} ref={dropdownRef}>
          <OptionsX>
            {options.map((option) => {
              return (
                <TickButton
                  key={option}
                  isSelected={option === selectedOption}
                  label={option}
                  onClick={optionButtonClickHandler}
                />
              );
            })}
          </OptionsX>
        </DropDownX>
      </ButtonX>
    </WrapperX>
  );
};

const DropDownX = styled(DropDown)`
  width: 100%;
`;

const OptionsX = styled.div`
  padding: 1rem 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;

  color: var(--color-black);
`;

const IconWrapperX = styled.div`
  height: 100%;
  margin-right: 0.8rem;

  svg {
    transform: scale(1.2);
  }

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonX = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 3.6rem;
  padding: 0 1.6rem;

  background-color: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--market-itemsWrapper-header-elements-border-radius);

  font-size: 1.4rem;
  font-weight: 400;

  cursor: pointer;

  span {
    margin-right: 1.6rem;
    font-weight: 600;
  }
`;

const WrapperX = styled.div`
  z-index: 999;
  /* background: var(--color-white); */
  position: relative;
  width: max-content;
  width: 100%;
`;

export default SortBy2;
