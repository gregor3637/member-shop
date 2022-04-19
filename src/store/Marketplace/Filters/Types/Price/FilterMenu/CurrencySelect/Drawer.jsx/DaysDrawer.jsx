import React, { useMemo } from "react";
import styled from "styled-components";

import useToggle from "../../../../../../../../hooks/useToggle";
import Drawer from "./Drawer";

const DaysDrawer = ({ className: version, selected, setSelected }) => {
  const [isShown, toggleShown] = useToggle(false);
  const options = useMemo(() => [...Array(10).keys()], []);

  const handleClick = (val) => {
    setSelected(val);
    toggleShown();
  };

  return (
    <Drawer
      className={version}
      onMenuButtonClick={() => toggleShown()}
      isShown={isShown}
    >
      <React.Fragment name="selected">
        <CurrencyDataX>{selected || options[0]} days</CurrencyDataX>
      </React.Fragment>
      <React.Fragment name="options">
        {Object.keys(options).map((op) => {
          return (
            <OptionX key={op} onClick={() => handleClick(op)}>
              {op}
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

  font-size: 1.4rem;
  font-weight: 500;
`;

const OptionX = styled.div`
  padding: 1rem 1rem;

  display: flex;
  align-items: center;

  
  font-weight: 500;

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

export default DaysDrawer;
