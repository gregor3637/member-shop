import React from "react";
import styled from "styled-components";
import CurrencyIcon from "../../../../../../../../../General/AssetCard/AssetCardInfo/CurrencyView/CurrencyIcon";

const CurrencyView = ({ amount, currency, annotation }) => {
  return (
    <Wrapper>
      <span>{annotation}</span>
      <PriceContainerX>
        <CurrencyIcon currency={currency} />
        <span>{amount}</span>
      </PriceContainerX>
    </Wrapper>
  );
};

const PriceContainerX = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  svg {
    transform: scale(0.6);
  }

  span {
    text-align: center;
  }
`;

export default CurrencyView;
