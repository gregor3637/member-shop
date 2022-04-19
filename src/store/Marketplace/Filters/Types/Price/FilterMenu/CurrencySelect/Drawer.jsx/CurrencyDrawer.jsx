import React from "react";
import styled from "styled-components";

import useToggle from "../../../../../../../../hooks/useToggle";
import Drawer from "./Drawer";

const CurrencyDrawer = ({
  className: version,
  currency,
  setCurrency,
  currencyOptions,
}) => {
  const [isShown, toggleShown] = useToggle(false);

  const handleClick = (val) => {
    setCurrency(val);
    toggleShown();
  };

  return (
    <Drawer
      className={version}
      onMenuButtonClick={() => toggleShown()}
      isShown={isShown}
    >
      <React.Fragment name="selected">
        <CurrencyDataX>
          {currencyOptions[currency].currencyImg}
          {currency}
        </CurrencyDataX>
      </React.Fragment>
      <React.Fragment name="options">
        {Object.keys(currencyOptions).map((currency) => {
          return (
            <OptionX key={currency} onClick={() => handleClick(currency)}>
              {currencyOptions[currency].currencyImg}
              <span>{currency}</span>
            </OptionX>
          );
        })}
      </React.Fragment>
    </Drawer>
  );
};

const CurrencyDataX = styled.div`
  display: flex;
  align-items: center;
`;

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

export default CurrencyDrawer;
