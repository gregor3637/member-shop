import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Watched from "../../../../../../../MarketplacePage/FilterResults/AssetsView/TableView/Watch/Watch";
import AuctionTime from "../../../../../../../../General/AssetCard/AssetCardInfo/AuctionTime/AuctionTime";
import CurrencyView from "./CurrencyView/CurrencyView";

const CompactAssetItem = (props, ref) => {
  const { data } = props;
  return (
    <Wrapper ref={ref}>
      <LinkX to={`/item/${data.id}`}>
        <ViewX src={data.general.src} alt="" />
      </LinkX>

      <InfoX>
        <HeaderX>
          <LinkX to={`/project/${data.contract.creator.name}`}>
            <ImgWrapperX>
              <img src={data.contract.creator.avatar} alt="avatar" />
            </ImgWrapperX>
            <span>{data.contract.creator.name}</span>
          </LinkX>
          <Watched
            id={data.id}
            favoritesCount={data.socialMedia.stats.favorites}
          />
        </HeaderX>
        <MainX to={`/item/${data.id}`}>
          <NameContainerX>
            <NameX>{data.general.name}</NameX>
          </NameContainerX>
          <CurrencyView
            annotation={"Price"}
            amount={data.price.amount}
            currency={data.price.currency}
          />
          <CurrencyView
            annotation={"Minimal Bid"}
            amount={data.price.amount}
            currency={"ETH"}
          />
          <TimerContainerX>
            <AuctionTime dateEnd={data.auction} />
          </TimerContainerX>
        </MainX>
      </InfoX>
    </Wrapper>
  );
};

const TimerContainerX = styled.div`
  display: flex;
`;

const MainX = styled(Link)`
  flex: 1;
  padding: 0 0.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

//--------------------------

const ImgWrapperX = styled.div`
  width: 2.2rem;
  height: 2.2rem;
  flex: 0 0 2.2rem;

  border: 1px solid var(--border-color);
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    object-fit: contain;
  }
`;

const LinkX = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  overflow: hidden; // min-width: 0;

  color: inherit; /* blue colors for links too */
  text-decoration: inherit;

  h4 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const HeaderX = styled.div`
  display: flex;
  justify-content: space-between;

  svg {
    margin-right: 0;
    transform: scale(0.6);
  }
`;
//-----------------------------------------------
const NameContainerX = styled.div`
  flex: 1;
  padding: 0 2rem;

  display: flex;
  align-items: center;
`;

const NameX = styled.h4`
  width: 100%;

  text-align: center;
  /* white-space: nowrap; */
  overflow: hidden;
  text-overflow: ellipsis;
  text-size-adjust: auto;
`;

const InfoX = styled.div`
  flex: 1;
  overflow: hidden;

  display: flex;
  flex-direction: column;
`;

const ViewX = styled.img`
  height: 12rem;
  width: 12rem;
  border-radius: 0.8rem;
`;

const Wrapper = styled.div`
  padding: 0.4rem;

  border: 1px solid var(--color-grey20);
  border-radius: 1rem;

  display: flex;
  gap: 0.4rem;

  a {
    text-decoration: inherit;
    color: inherit;
  }
`;

export default React.forwardRef(CompactAssetItem);
