import React from "react";
import styled from "styled-components";

import EthereumImg from "../../../../../../img/currency/Ether.png";
import BitcoinImg from "../../../../../../img/currency/BTC.svg";
import USDTImg from "../../../../../../img/currency/USDT.svg";
import USDCImg from "../../../../../../img/currency/USDC.svg";

import SelectedFilterButton from "../../SelectedFilterButton";
import CloseSVG from "../../../../../../img/svg/CloseSVG";

const currencyImageByName = {
  ETH: <img src={EthereumImg} alt="ETH" />,
  BTC: <img src={BitcoinImg} alt="BTC" />,
  USDT: <img src={USDTImg} alt="USDT" />,
  USDC: <img src={USDCImg} alt="USDC" />,
};

const PriceButton = (dispatchType, context, dispatcher) => {
  if (context.min || context.max) {
    const prefixSign = context.min ? (context.max ? "" : ">") : "<";
    const middleSign = context.min && context.max ? "-" : "";

    const buttonText = `${context.currency}: ${prefixSign} ${context.min} ${middleSign} ${context.max}`;
    const img = currencyImageByName[context.currency];

    return (
      <SelectedFilterButton
        onClick={() => {
          dispatcher({
            type: dispatchType,
            selected: {
              currency: "",
              min: "",
              max: "",
            },
          });
        }}
      >
        <PriceInfoContainerX>
          {img}
          <span>{buttonText}</span>
          <CloseSVG color="#fff" />
        </PriceInfoContainerX>
      </SelectedFilterButton>
    );
  }

  return null;
};

const PriceInfoContainerX = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 0.5rem;
    border-radius: 50%;
    width: 1.6rem;
  }
`;

export default PriceButton;
