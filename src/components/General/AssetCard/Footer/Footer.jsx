import React from "react";
import styled from "styled-components";

import CurrencyView from "../AssetCardInfo/CurrencyView/CurrencyView";
import LastBoughtPrice from "./LastBoughtPrice/LastBoughtPrice";
import CollectionData from "./CollectionData/CollectionData";
import Button from "./Button/Button";

const Footer = ({ data, className }) => {
  // return <Wrapper className={className}></Wrapper>;
console.log('ata.bids.isAllowed ', !data.bids.isAllowed);

  return (
    <Wrapper className={"asset-card--footer " + className}>
      <PaddingX>
        <InfoX className="asset-card--footer-info">
          <IconsX>
            <CurrencyView currency={data.price.currencyChain} />
            <CollectionData items={data.items} />
          </IconsX>
          <LastBoughtPrice
            boughtPrices={data.boughtPrices}
            CurrencyView={<CurrencyView currency="ETH" />}
          />
        </InfoX>
        <ButtonsX className="asset-card--footer-buttons">
          <Button label={"Bid"} isDisabled={!data.bids.isAllowed} />
          <Button label={"Buy"} />
        </ButtonsX>
      </PaddingX>
    </Wrapper>
  );
};

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

const ButtonsX = styled.div`
  position: absolute;

  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  display: flex;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
  
  visibility: hidden;

  //'ButtonsContainerX display' is changed in 'AssetCard' on hover
`;

const PaddingX = styled.div`
  position: relative;
  height: 100%;
  margin: 0 1rem;
`;
const Wrapper = styled.div`
  /* border-top: 3px solid var(--color-border); */
  /* background: linear-gradient(rgba(226, 226, 226, 0.392) 0%, rgb(255, 255, 255) 20%); */
`;

export default Footer;
