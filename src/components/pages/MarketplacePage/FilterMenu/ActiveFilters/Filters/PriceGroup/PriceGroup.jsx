import React from "react";
import styled from "styled-components";
import CloseSVG from "../../../../../../../img/svg/CloseSVG";

import EthereumImg from "../../../../../../../img/currency/Ether.png";
import BitcoinImg from "../../../../../../../img/currency/BTC.svg";
import USDTImg from "../../../../../../../img/currency/USDT.svg";
import USDCImg from "../../../../../../../img/currency/USDC.svg";

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
        <GroupButtonX
          onClick={() => {
            dispatch({ type: "reset", state: contextName });
          }}
        >
          {label}
          <CloseSVG color="#9b9b9b" size={36} />
        </GroupButtonX>

        <ButtonX
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
            <CloseSVG color="#000" />
          </PriceInfoContainerX>
        </ButtonX>
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
`;

const GroupButtonX = styled.button`
  background-color: var(--color-none);

  width: max-content;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  outline: none;
  border: none;

  font-size: 2.2rem;
  color: var(--color-button-dark-inactive);

  &:hover {
    color: var(--color-button-dark-hover);
    color: red;

    svg {
      stroke: red;
    }
  }

  cursor: pointer;
`;

const ButtonX = styled.button`
  width: 100%;
  min-width: max-content;
  background: gold;
  padding: 0.6rem 1rem;
  margin: 0.5rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--marketplace-button-grey-light);
  border-radius: 1rem;
  outline: none;
  border: none;

  cursor: pointer;

  span {
    margin-right: 0.2rem;
  }

  &:hover {
    background-color: var(--marketplace-button-background);
  }
`;

const Styled = styled.div`
  display: flex;
  flex-direction: column;
`;

export default PriceGroup;
