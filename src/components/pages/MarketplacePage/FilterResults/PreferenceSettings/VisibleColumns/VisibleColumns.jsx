import React, { useCallback, useRef } from "react";
import styled from "styled-components";

import useMarketPreferenceContext from "../../../../../../hooks/Market/PreferenceContext/useMarketPreferenceContext";
import useOnClickOutsideHandler from "../../../../../../hooks/useOnClickOutsideHandler";
import useToggle from "../../../../../../hooks/useToggle";
import DropdownArrow from "../../../../../General/Arrow/DropdownArrow";
import DropDown from "../../../CommonElements/DropDown/DropDown";
import StateButton from "./StateButton/StateButton";

const VisibleColumns = () => {
  const {
    state: { tableColumns },
  } = useMarketPreferenceContext();

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
        <span>Visible Columns</span>
        <DropdownArrow isOpen={isShown} />
        <DropDown isOpen={isShown} ref={dropdownRef}>
          <OptionsX>
            {tableColumns.map((column) => {
              if (!column.canHideColumn) return null;
              return (
                <StateButton
                  key={column.id}
                  label={column.Header}
                  onClick={column.toggleHidden}
                />
              );
            })}
          </OptionsX>
        </DropDown>
      </ButtonX>
    </WrapperX>
  );
};

const OptionsX = styled.div`
  padding: 1rem 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;

  color: var(--color-black);
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
