import React, { useCallback } from "react";
import styled from "styled-components";

import useToggle from "../../../../../../../hooks/useToggle";
import useOnClickOutsideHandler from "../../../../../../../hooks/useOnClickOutsideHandler";
import DropdownArrow from "../../../../../../../components/General/Arrow/DropdownArrow";

const CurrencySelect = ({
  className: version,
  currency,
  setCurrency,
  currencyOptions,
}) => {
  const [isShown, toggleShown] = useToggle(false);
  const outsideClickHandler = useCallback(() => {
    toggleShown();
  }, [toggleShown]);
  const ref = useOnClickOutsideHandler(outsideClickHandler, isShown);

  const handleClick = (value) => {
    setCurrency(value);
    toggleShown();
  };

  return (
    <Wrapper ref={ref} className={version}>
      <SelectedX className={isShown ? "active" : ""} onClick={toggleShown}>
        <CurrencyDataX>
          {currencyOptions[currency].currencyImg}
          {currency}
        </CurrencyDataX>
        <DropdownArrow isOpen={isShown} />
      </SelectedX>
      <OptionWrapperX className={isShown ? "open" : ""}>
        {Object.keys(currencyOptions).map((currency) => {
          return (
            <OptionX key={currency} onClick={() => handleClick(currency)}>
              {currencyOptions[currency].currencyImg}
              <span>{currency}</span>
            </OptionX>
          );
        })}
      </OptionWrapperX>
    </Wrapper>
  );
};

const OptionX = styled.div`
  padding: 1rem 1rem;

  display: flex;
  align-items: center;

  border-radius: var(--market-filters--button-dropdown--border-radius);
  cursor: pointer;

  &:hover {
    background: var(--market-filters--button-dropdown--bgColor-hover);
  }

  img {
    width: 2rem;
    margin-right: 0.5rem;
    border-radius: 50%;
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

const CurrencyDataX = styled.div`
  display: flex;
  align-items: center;
`;

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

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

export default CurrencySelect;
