import React, { useState } from "react";
import styled from "styled-components";
import Tippy from "@tippyjs/react";

import FAIcon from "../../../../General/FAIcon/FAIcon";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import Ethereum from "../../../../../img/currency/Ether.png";
import useInit from "../../../../../hooks/useInit";

const currencies = {
  ETH: {
    fullName: "Ethereum",
    source: <img src={Ethereum} alt="Ethereum" />,
  },
  USD: {
    fullName: "Unated States Dollar",
    source: <FAIcon icon={faDollarSign}></FAIcon>,
  },
};

const Currency = (props) => {
  const [selectedCurrency, setSelectedCurrency] = useState("ETH");
  const [tippyInstance, setTippyInstance] = useState(null);

  const dropdownSelectionHandler = (value) => {
    tippyInstance.hide();
    setSelectedCurrency(value);
    props.setCurrency(value);
  };

  useInit(() => {
    props.setCurrency(selectedCurrency);
  });

  const currenciesAbbreviation = Object.keys(currencies);
  const inputValue = `${currencies[selectedCurrency].fullName} (${selectedCurrency})`;

  return (
    <TippyX
      content={
        <>
          <ul>
            {currenciesAbbreviation.map((name) => {
              let spanValue = `${currencies[name].fullName} (${name})`;
              return (
                <li key={name}>
                  <button onClick={() => dropdownSelectionHandler(name)}>
                    <ContainerX>
                      <CurrencyContainerX>
                        {currencies[name].source}
                      </CurrencyContainerX>
                      <span>{spanValue}</span>
                    </ContainerX>
                  </button>
                </li>
              );
            })}
          </ul>
        </>
      }
      onCreate={setTippyInstance}
      arrow={false}
      interactive
      appendTo="parent"
      placement="bottom-start"
      offset={[0, 0]}
      // showOnInit={true}
      trigger="click"
      hideOnClick
    >
      <ContainerX>
        <CurrencyContainerX>
          {currencies[selectedCurrency].source}
        </CurrencyContainerX>
        <input type="text" value={inputValue} readOnly />
        <ArrowContainerX>
          <FAIcon icon={faAngleDown}></FAIcon>
        </ArrowContainerX>
      </ContainerX>
    </TippyX>
  );
};

const CurrencyContainerX = styled.div`
  padding: 0.5rem;
  margin-right: 1rem;
  width: 2.4rem;
  height: 2.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid var(--color-border);
  border-radius: 50%;

  svg {
    size: 1.6rem;
    font-size: 1.6rem;
  }

  img {
    width: 100%;
  }
`;

const ArrowContainerX = styled.div`
  svg {
    font-size: 2rem;
  }
`;
const ContainerX = styled.div`
  background-color: var(--color-white);
  height: 4.6rem;
  padding: 0.5rem 1rem;

  display: flex;
  flex-direction: row;
  align-items: center;

  border: 1px solid var(--color-border);
  border-radius: 0.8rem;

  cursor: pointer;

  &:focus {
    border: 1px solid var(--color-border-focus);
  }

  input {
    flex: 1;
    border: none;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }

  svg {
    /* font-size: 2rem; */
    display: flex;
  }
`;

const CurrencyOptionBtnX = styled.div`
  color: var(--color-text);

  cursor: pointer;
`;

const TippyX = styled(Tippy)`
  background-color: var(--color-white);
  min-width: 20rem;
  z-index: 500;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  border-radius: 0;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  overflow: hidden;

  .tippy-content {
    padding: 0;
  }
`;

export default Currency;
