import React, { useMemo } from "react";
import styled from "styled-components";
import useToggle from "../../../../../hooks/useToggle";
import CurrencyIcon from "../../../../General/AssetCard/AssetCardInfo/CurrencyView/CurrencyIcon";

const Column = ({
  className: version,
  id,
  name,
  avatar,
  currency,
  volume,
  percentageChange,
  floorPrice,
  owners,
  items,
}) => {
  const [isMoreInfoShown, toggleMoreInfoShown] = useToggle(false);

  const currencyIcon = <CurrencyIcon currency={currency} />;

  return (
    <Wrapper className={version}>
      <AboveWidthX>
        <InfoX>
          <CollectionX className="y-centered">
            <div>{id}</div>
            <div>
              <img src={avatar} alt="" />
            </div>
            <div>{name}</div>
          </CollectionX>
          <VolumeX className="y-centered">
            {currencyIcon} {volume}
          </VolumeX>
          <PercentageChange
            className={`${
              percentageChange < 0 ? "alert" : "success"
            } disposable y-centered`}
          >
            {percentageChange} %
          </PercentageChange>
          <FloorPriceX className="disposable y-centered">
            {currencyIcon} {floorPrice}
          </FloorPriceX>
          <OwnersX className="disposable y-centered">{owners}</OwnersX>
          <ItemsX className="disposable y-centered">{items}</ItemsX>
        </InfoX>
        <InfoButtonX onClick={toggleMoreInfoShown}>
          <div>Info</div>
        </InfoButtonX>
      </AboveWidthX>
      {isMoreInfoShown && (
        <InfoContainerX>
          <PercentageChange>
            <div>
              <p>Change %</p>
              <p>{percentageChange} %</p>
            </div>
          </PercentageChange>
          <FloorPriceX>
            <div>
              <p>Floor Price</p>
              <p>{percentageChange} %</p>
            </div>
          </FloorPriceX>
          <OwnersX>
            <div>
              <p>Owners</p>
              <p>{owners}</p>
            </div>
          </OwnersX>
          <ItemsX>
            <div>
              <p>Items</p>
              <p>{items}</p>
            </div>
          </ItemsX>
        </InfoContainerX>
      )}
    </Wrapper>
  );
};

const InfoContainerX = styled.div`
  background: var(--color-grey15);
  border-radius: 1rem;
  overflow: hidden;
  display: none;
  margin-top: 1.4rem;
  padding: 1rem 0;

  @media (max-width: 1350px) {
    display: flex;
    justify-content: space-between;

    p {
      text-align: center;
    }

    & > div {
      background: var(--color-grey15);
      display: flex;
      justify-content: center;
    }
  }
`;

//-----------------------
const InfoButtonX = styled.button`
  display: none;

  background: var(--color-none);
  border: none;
  cursor: pointer;

  @media (max-width: 1350px) {
    flex-shrink: 1;
    flex-basis: max-content;

    display: flex;
    align-items: center;
  }

  & > div {
    padding: 0.5rem 2rem;

    border-radius: 1rem;

    background: var(--color-blue);
    color: var(--color-white);
  }
`;

const ItemsX = styled.div`
  flex: 0 0 15rem;

  display: flex;
  justify-content: flex-end;
`;

const OwnersX = styled.div`
  flex: 0 0 15rem;

  display: flex;
  justify-content: flex-end;
`;

const FloorPriceX = styled.div`
  flex: 0 0 15rem;

  display: flex;
  justify-content: flex-end;
`;

const WeekX = styled.div`
  flex: 0 0 15rem;

  display: flex;
  justify-content: flex-end;
`;

const PercentageChange = styled.div`
  flex: 0 0 15rem;

  display: flex;
  justify-content: flex-end;
`;

const VolumeX = styled.div`
  flex: 0 0 15rem;

  display: flex;
  justify-content: flex-end;
`;

const CollectionX = styled.div`
  flex: 0 0 40rem;

  gap: 1rem;

  div:first-of-type {
    width: 2rem;
    text-align: end;
  }

  img {
    width: 5rem;
    height: 5rem;

    display: flex;
    border-radius: 50%;
  }
`;

const InfoX = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

const AboveWidthX = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

const Wrapper = styled.div`
  padding: 2rem 1rem;

  font-size: 1.6rem;
  font-weight: 600;

  border-bottom: 1px solid var(--color-grey40);

  .alert {
    color: var(--color-red-bright);
  }
  .success {
    color: var(--color-green);
  }

  .y-centered {
    display: flex;
    align-items: center;
  }

  .disposable {
    @media (max-width: 1350px) {
      display: none;
    }
  }
`;

export default Column;
