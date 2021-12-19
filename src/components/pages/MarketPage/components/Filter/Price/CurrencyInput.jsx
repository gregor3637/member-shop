import React, { useState } from "react";
import styled from "styled-components";

import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

import EthereumImg from "../../../../../../img/currency/Ether.png";
import KlaytnImg from "../../../../../../img/currency/klaytn.png";
import PolygonImg from "../../../../../../img/currency/polygon.svg";
import useInit from "../../../../../../hooks/useInit";
import FAIcon from "../../../../../General/FAIcon/FAIcon";
import Tippy from "@tippyjs/react";

const currencies = {
  ETH: {
    fullName: "Ethereum",
    img: <img src={EthereumImg} alt="" />,
  },
  USD: {
    fullName: "Unated States Dollar",
    img: <FAIcon icon={faDollarSign}></FAIcon>,
  },
};

const CurrencyInput = (props) => {
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
                      <CircleCurrencyX>{currencies["ETH"].img}</CircleCurrencyX>
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
        <CircleCurrencyX>{currencies["ETH"].img}</CircleCurrencyX>
        <input type="text" value={inputValue} readOnly />
        <ArrowContainerX>
          <FAIcon icon={faAngleDown}></FAIcon>
        </ArrowContainerX>
      </ContainerX>
    </TippyX>
  );
};

const CircleCurrencyX = styled.div`
  width: 2.4rem;
  height: 2.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid var(--color-border);
  border-radius: 50%;
  overflow: hidden;

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
  width: 100%;
  margin-bottom: 2rem;
  background-color: var(--color-white);
  background: gold;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  input {
    width: 50%;

    margin-left: 1rem;
    margin-right: 1rem;
    border: none;
    outline: none;
  }

  .debug {
    cursor: pointer;

    &:focus {
      border: 1px solid var(--color-border-focus);
    }

    svg {
      display: flex;
    }
  }
`;

const TippyX = styled(Tippy)`
  width: 100%;
  background-color: var(--color-white);

  border-radius: 0;
  border: 1px solid var(--color-black);
  overflow: hidden;

  .tippy-content {
    padding: 0;
    border-radius: 0;
  }
`;

export default CurrencyInput;
