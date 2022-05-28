import React from "react";
import styled from "styled-components";

import CurrencyIcon from "../../../../../../General/AssetCard/AssetCardInfo/CurrencyView/CurrencyIcon";

const ColumnElement = ({ data }) => {
  return (
    <Wrapper>
      <DisplayInfoContainerX>
        <img src={data.itemImg} alt="" />
        <span>{data.itemName}</span>
      </DisplayInfoContainerX>
      <BlockHashX
        href={`https://etherscan.io/block/14855853`}
        className="disposable small-column"
      >
        {data.blockHash}
      </BlockHashX>
      <DateX className="disposable small-column align-center">
        {data.date}
      </DateX>
      <UnitPriceX className="disposable small-column align-center">
        <CurrencyIcon currency={data.price.unit} /> {data.price.amount}
      </UnitPriceX>
      <div className={"disposable small-column  align-center"}>
        {data.quontity}
      </div>
      <div className={"disposable small-column align-center"}>
        <CurrencyIcon currency={data.price.unit} />
        {data.fee}
      </div>
    </Wrapper>
  );
};

const DateX = styled.div``;

const BlockHashX = styled.a`
  color: inherit;
  text-decoration: inherit;
`;

const DisplayInfoContainerX = styled.div`
  flex: 0 0 40rem;

  display: flex;
  align-items: center;
  gap: 2rem;

  img {
    width: 4rem;

    border-radius: 1rem;
  }

  span {
    width: max-content;
  }
`;

const UnitPriceX = styled.div`
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  padding: 2rem 1rem;
  border-top: 1px solid var(--color-grey20);

  display: flex;
  justify-content: space-between;

  font-size: 1.6rem;
  font-weight: 600;

  .small-column {
    flex: 0 0 15rem;

    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .align-center {
    justify-content: center;
  }
`;

export default ColumnElement;
