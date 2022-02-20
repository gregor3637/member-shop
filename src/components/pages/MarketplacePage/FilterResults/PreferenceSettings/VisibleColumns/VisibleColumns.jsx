import React, { useCallback, useRef } from "react";
import styled from "styled-components";

import useOnClickOutsideHandler from "../../../../../../hooks/useOnClickOutsideHandler";
import useToggle from "../../../../../../hooks/useToggle";
import SortSVG from "../../../../../../img/currency/SortSVG";
import DropdownArrow from "../../../../../General/Arrow/DropdownArrow";
import DropDown from "../../../CommonElements/DropDown/DropDown";
import Options from "../../SortBy/Options/Options";

const sortingOptions = [
  "Toggle All",
  "Name",
  "Project Name",
  "Socials",
];

const VisibleColumns = (props) => {
  const options = [];
  const selectHandler = () => {};

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

  return (
    <WrapperX>
      <ButtonX onClick={dropdownClickHandle} ref={outsideRef}>
        <IconWrapperX>
          <SortSVG />
        </IconWrapperX>
        <span>Visible Columns</span>
        <DropdownArrow isOpen={isShown} />
        <DropDown isOpen={isShown} ref={dropdownRef}>
          <Options
            selectedOption={options}
            onOptionSelect={selectHandler}
            options={sortingOptions}
          />
        </DropDown>
      </ButtonX>
    </WrapperX>
  );
};

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
  justify-content: center;
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
  position: relative;
  width: max-content;
`;
export default VisibleColumns;
