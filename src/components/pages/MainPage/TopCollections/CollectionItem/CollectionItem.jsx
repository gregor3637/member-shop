import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import CurrencyIcon from "../../../../General/AssetCard/AssetCardInfo/CurrencyView/CurrencyIcon";

const CollectionItem = ({ data, position, timeHorizon }) => {
  const percentage = data.change[timeHorizon].percentage;

  return (
    <Wrapper>
      <PositionX>{position}</PositionX>
      <AvatarContainerX>
        <Link to={data.collectionItem_url}>
          <img src={data.avatar} alt="" />
        </Link>
      </AvatarContainerX>
      <InfoContainerX>
        <InfoLeftX>
          <Link to={data.collectionItem_url}>{data.name}</Link>
          <div>
            Floor price:
            <span>
              <CurrencyIcon currency={"ETH"} />
              {data.price.floor}
            </span>
          </div>
        </InfoLeftX>
        <InfoRightX>
          <PercentageIncreaseX className={percentage < 0 ? "alert" : "success"}>
            {percentage > 0 ? "+" : ""}
            {percentage}%
          </PercentageIncreaseX>
          <CollectionTotalPriceX>
            <CurrencyIcon currency={"ETH"} />
            {data.change[timeHorizon].amount}
          </CollectionTotalPriceX>
        </InfoRightX>
      </InfoContainerX>
    </Wrapper>
  );
};

const CollectionTotalPriceX = styled.div`
  font-weight: 600;
  color: var(--color-grey50);

  display: flex;
  align-items: center;

  img {
    height: 1.4rem;
    width: auto;
  }
`;

const PercentageIncreaseX = styled.div`
  font-weight: 500;

  align-self: end;

  &.alert {
    color: var(--color-red-bright);
  }
  &.success {
    color: var(--color-green);
  }
`;

const InfoRightX = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
`;
const InfoLeftX = styled.div`
  display: flex;
  flex-direction: column;

  a {
    text-decoration: inherit;
    color: inherit;

    font-weight: 600;
  }

  div {
    display: flex;
    span {
      font-weight: 400;

      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }

  img {
    height: 1.4rem;
    width: auto;
  }
`;

const InfoContainerX = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  gap: 1rem;

  font-size: 1.2rem;
`;

const AvatarContainerX = styled.div`
  margin-right: 0.5rem;

  a {
    width: 5rem;
    height: 5rem;

    display: flex;

    border-radius: 50%;

    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

const PositionX = styled.div`
  font-size: 1.6rem;
  font-weight: 500;

  margin-right: 1rem;
`;

const Wrapper = styled.div`
  padding: 1rem 0;

  display: flex;
  align-items: center;

  border-bottom: 1px solid var(--color-grey20);
`;

export default CollectionItem;
