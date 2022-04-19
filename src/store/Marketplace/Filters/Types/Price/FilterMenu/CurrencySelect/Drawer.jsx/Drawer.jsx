import React, { Children, useCallback } from "react";
import styled from "styled-components";

import useOnClickOutsideHandler from "../../../../../../../../hooks/useOnClickOutsideHandler";
import DropdownArrow from "../../../../../../../../components/General/Arrow/DropdownArrow";

const Drawer = ({
  children,
  className: version,
  onMenuButtonClick,
  isShown,
}) => {
  const childrenArray = Children.toArray(children);
  const leftActionsSlot = childrenArray.find(
    (child) => child?.props?.name === "selected"
  );
  const rightActionsSlot = childrenArray.find(
    (child) => child?.props?.name === "options"
  );

  const outsideClickHandler = useCallback(() => {
    onMenuButtonClick();
  }, [onMenuButtonClick]);
  const ref = useOnClickOutsideHandler(outsideClickHandler, isShown);

  return (
    <Wrapper ref={ref} className={version}>
      <SelectedX
        className={isShown ? "active" : ""}
        onClick={onMenuButtonClick}
      >
        <div className="flex">{leftActionsSlot?.props?.children}</div>
        <DropdownArrow isOpen={isShown} />
      </SelectedX>
      <OptionWrapperX className={isShown ? "open" : ""}>
        <div className="flex">{rightActionsSlot?.props?.children}</div>
      </OptionWrapperX>
    </Wrapper>
  );
};

const SelectedX = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1.4rem 0 1rem;
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 1px solid var(--market-filters--price--currency-select--border-color);
  border-radius: var(--market-filters--price--input-price--border-radius);

  cursor: pointer;

  img {
    width: 2rem;
    margin-right: 0.5rem;
    border-radius: 50%;
  }

  &.active {
    border-color: var(
      --market-filters--price--currency-select--border-color-focus
    );
  }

  &:hover {
    border-color: var(
      --market-filters--price--currency-select--border-color-hover
    );
  }
`;

const OptionWrapperX = styled.div`
  position: absolute;
  top: 100%;

  z-index: 5;

  display: none;
  width: 100%;
  padding: 1rem 0.5rem;

  background: var(--market-filters--price--currency-select--bgColor);
  border-radius: var(--market-filters--price--currency-select--border-radius);
  box-shadow: var(--boxShadow-dropdown);

  &.open {
    display: block;
  }
`;

const Wrapper = styled.div`
  position: relative;
`;

export default Drawer;
