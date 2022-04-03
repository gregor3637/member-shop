import React from "react";
import styled from "styled-components";

import CurrencyView from "../AssetCardInfo/CurrencyView/CurrencyIcon";
import LastBoughtPrice from "./LastBoughtPrice/LastBoughtPrice";
import CollectionData from "./CollectionData/CollectionData";
import ActionButton from "../../../pages/MarketplacePage/CommonElements/ActionButton/ActionButton";
import AuctionTime from "../AssetCardInfo/AuctionTime/AuctionTime";

const Footer = ({ data, className }) => {
  return (
    <Wrapper className={"asset-card--footer " + className}>
      <PaddingX>
        <InfoX className="asset-card--footer-info">
          <IconsX>
            {data.price && <CurrencyView currency={data.price.currency} />}
            <CollectionData items={data.bundleItems} />
          </IconsX>
          <LastBoughtPrice data={data} />
          {data.auction && <AuctionTime dateEnd={data.auction} />}
        </InfoX>
        <ButtonsContainerX className="asset-card--footer-buttons">
          <ActionButton text={"Bid"} onClick={() => {}} isDisabled={!data.bids.isAllowed}/>
          <ActionButton text={"Buy"} onClick={() => {}} isDisabled={!data.price.currency}/>
        </ButtonsContainerX>
      </PaddingX>
    </Wrapper>
  );
};

const ButtonsContainerX = styled.div`
  position: absolute;
  padding: 0.8rem 1rem;

  bottom: 0;
  left: 0;
  width: 100%;

  display: flex;
  gap: 1.4rem;
  justify-content: space-evenly;
  align-items: center;

  visibility: hidden;
  background: var(--color-white);

  & > button {
    font-size: 1.6rem;
    border-radius: 1.2rem;
    padding: 0.5rem;
  }

  //'ButtonsContainerX display' is changed in 'AssetCard' on hover
`;

const IconsX = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

const InfoX = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PaddingX = styled.div`
  /* position: relative; */
  height: 100%;
  padding: 0 1rem 1rem 1rem;
`;

const Wrapper = styled.div`
  /* background: var(--test-r); */
  /* border-top: 1px solid var(--color-border); */
  /* background: linear-gradient(
    rgba(226, 226, 226, 0.4) 0%,
    rgb(255, 255, 255) 20%
  ); */
`;

export default Footer;
