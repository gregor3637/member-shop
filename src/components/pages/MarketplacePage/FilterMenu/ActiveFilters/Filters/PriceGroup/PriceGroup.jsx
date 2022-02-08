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
  console.log("context.min ", context.min);
  console.log("context.max ", context.max);

  if (context.min || context.max) {
    const prefixSign = context.min ? (context.max ? "" : ">") : "<";
    const middleSign = context.min && context.max ? "-" : "";

    const buttonText = `${context.currency}: ${prefixSign} ${context.min} ${middleSign} ${context.max}`;
    const img = currencyImageByName[context.currency];

    return (
      <Styled>
        <ActiveFilterGroupButton
          label={label}
          onClick={() => {
            dispatch({ type: "reset", state: contextName });
          }}
        />

        <ActiveFilterButton
          onClick={() => {
            dispatch({
              type: contextName,
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
