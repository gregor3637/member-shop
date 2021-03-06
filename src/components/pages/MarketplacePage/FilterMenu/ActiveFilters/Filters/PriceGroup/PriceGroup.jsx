import React from "react";
import styled from "styled-components";

import EthereumImg from "../../../../../../../img/currency/Ether.png";
import BitcoinImg from "../../../../../../../img/currency/BTC.svg";
import USDTImg from "../../../../../../../img/currency/USDT.svg";
import USDCImg from "../../../../../../../img/currency/USDC.svg";
import ActiveFilterGroupButton from "../ActiveFilterGroupButton/ActiveFilterGroupButton";
import ActiveFilterButton from "../ActiveFilterButton/ActiveFilterButton";

const currencyImageByName = {
  ETH: <img src={EthereumImg} alt="ETH" />,
  BTC: <img src={BitcoinImg} alt="BTC" />,
  USDT: <img src={USDTImg} alt="USDT" />,
  USDC: <img src={USDCImg} alt="USDC" />,
};

const PriceGroup = ({ context, contextName, label, dispatch }) => {
  if (context.minValue || context.maxValue) {
    const prefixSign = context.minValue ? (context.maxValue ? "" : ">") : "<";
    const middleSign = context.minValue && context.maxValue ? "-" : "";

    const buttonText = `${context.currency}: ${prefixSign} ${context.minValue} ${middleSign} ${context.maxValue}`;
    const img = currencyImageByName[context.currency];

    return (
      <Styled>
        <ActiveFilterGroupButton
          label={label}
          onClick={() => {
            dispatch({ type: "reset", value: contextName });
          }}
        />

        <ActiveFilterButton
          onClick={() => {
            dispatch({
              type: contextName,
              value: {
                currency: "",
                minValue: "",
                maxValue: "",
              },
            });
          }}
        >
          <PriceInfoContainerX>
            {img}
            <span>{buttonText}</span>
          </PriceInfoContainerX>
        </ActiveFilterButton>
      </Styled>
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

  span {
    font-weight: 400;
    font-size: 1.2rem;
  }
`;

const Styled = styled.div`
  display: flex;
  flex-direction: column;
`;

export default PriceGroup;
