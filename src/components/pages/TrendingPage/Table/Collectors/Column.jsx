import React from "react";
import styled from "styled-components";
import { printifyWalletAddress } from "../../../../../helpers/PrintifyWalletAddress";

import useToggle from "../../../../../hooks/useToggle";
import CurrencyIcon from "../../../../General/AssetCard/AssetCardInfo/CurrencyView/CurrencyIcon";

const Column = ({
  className: version,
  id,
  name,
  walletAddress,
  avatar,
  creatorsSupported,
  boughtNFTs,
  currency,
  totalSpent,
}) => {
  const [isMoreInfoShown, toggleMoreInfoShown] = useToggle(false);

  const currencyIcon = <CurrencyIcon currency={currency} />;

  return (
    <Wrapper className={version}>
      <AboveWidthX>
        <InfoX>
          <CreatorX className="y-centered">
            <div>{id}</div>
            <div>
              <img src={avatar} alt="" />
            </div>
            <div>
              {name !== "" ? name : printifyWalletAddress(walletAddress)}
            </div>
          </CreatorX>
          <CreatorsSupportedX className="disposable y-centered">
            {creatorsSupported}
          </CreatorsSupportedX>
          <BoughtNFTs className="disposable y-centered">
            {boughtNFTs}
          </BoughtNFTs>
          <TotalSpentX className="y-centered">
            {currencyIcon}
            {totalSpent}
          </TotalSpentX>
        </InfoX>
        <InfoButtonX onClick={toggleMoreInfoShown}>
          <div>Info</div>
        </InfoButtonX>
      </AboveWidthX>
      {isMoreInfoShown && (
        <InfoContainerX>
          <CreatorsSupportedX>
            <div>
              <p>Creators Supported</p>
              <p>{creatorsSupported} %</p>
            </div>
          </CreatorsSupportedX>
          <BoughtNFTs>
            <div>
              <p>NFTs bought</p>
              <p>{boughtNFTs}</p>
            </div>
          </BoughtNFTs>
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

const BoughtNFTs = styled.div`
  flex: 0 0 15rem;

  display: flex;
  justify-content: flex-end;
`;

const TotalSpentX = styled.div`
  flex: 0 0 15rem;

  display: flex;
  justify-content: flex-end;
`;

const CreatorsSupportedX = styled.div`
  flex: 0 0 20rem;

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

const CreatorX = styled.div`
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

  @media (max-width: 700px) {
    flex-basis: 20rem;
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
