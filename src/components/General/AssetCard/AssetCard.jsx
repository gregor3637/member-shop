import React from "react";
import styled from "styled-components";

import AssetCardInfo from "./AssetCardInfo/AssetCardInfo";
import AssetCardHeader from "./Header/AssetCardHeader";
import BundleOutlook from "./BundleOutlook/BundleOutlook";
import View from "./View/View";
import Footer from "./Footer/Footer";

const AssetCard = ({ version, data }) => {
  let isBundle = data.items && data.items.length > 0;
  return (
    <Wrapper className={version}>
      <BundleOutlook isHidden={!isBundle} />
      <AssetCardWrapperX>
        <PaddingX>
          <HeaderX data={data} />
          <View data={data} />
          <InfoX data={data} />
        </PaddingX>
        <FooterX data={data} />
      </AssetCardWrapperX>

      {/* <TestX>{data.general.name}</TestX> */}
    </Wrapper>
  );
};

const TestX = styled.h4`
  width: 300px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
`;

const HeaderX = styled(AssetCardHeader)`
  /* flex: 0 0 6.4rem; */
  flex-basis: 4.4rem;
`;

const InfoX = styled(AssetCardInfo)`
  flex: 0 0 6.4rem;
`;
const FooterX = styled(Footer)`
  flex: 0 0 4rem;
`;

const PaddingX = styled.div`
  padding: 0 0.7rem;

  flex: 85%;
  display: flex;
  flex-direction: column;
`;

const AssetCardWrapperX = styled.div`
  z-index: 2;
  background-color: var(--color-white);
  height: 100%;

  display: flex;
  flex-direction: column;

  border: 1px solid var(--color-border);
  border: 1px solid #a7a7a7;

  border-radius: 1.6rem;
  overflow: hidden;
  cursor: pointer;
`;

const Wrapper = styled.div`
  width: 28rem;
  height: 44rem;

  display: flex;
  flex-direction: column;

  transition: all 0.2s ease-in-out;

  &:hover {
    /* transform: translateY(-1px); */

    .asset-card--footer-info {
      visibility: hidden;
    }

    .asset-card--footer-buttons {
      visibility: visible;
    }

    ${AssetCardWrapperX} {
      box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px;
      /* box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 15px; //for white background  */
    }
  }
`;

export default AssetCard;
