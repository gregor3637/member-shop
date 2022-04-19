import React from "react";
import styled from "styled-components";

import AssetCardInfo from "./AssetCardInfo/AssetCardInfo";
import AssetCardHeader from "./Header/AssetCardHeader";
import BundleOutlook from "./BundleOutlook/BundleOutlook";
import View from "./View/View";
import FooterFlexible from "./Footer/FooterFlexible";

const AssetCardFlexible = ({ data }) => {
  let isBundle = data.bundleItems?.length > 0;

  return (
    <Wrapper>
      <BundleOutlook isHidden={!isBundle} />
      <AssetCardWrapperX>
        <PaddingX>
          <HeaderX data={data} />
          <View data={data} />
          <InfoX data={data} />
        </PaddingX>
        <FooterX data={data} />
      </AssetCardWrapperX>
    </Wrapper>
  );
};

const HeaderX = styled(AssetCardHeader)`
  margin-bottom: 0.4rem;
`;

const FooterX = styled(FooterFlexible)``;

const PaddingX = styled.div`
  width: 100%;
  padding: 0 0.7rem;

  flex: 1;
  display: flex;
  flex-direction: column;
`;

const InfoX = styled(AssetCardInfo)``;

const AssetCardWrapperX = styled.div`
  position: relative;
  z-index: 2;
  background-color: var(--color-white);
  height: 100%;

  display: flex;
  flex-direction: column;

  border: 1px solid var(--color-border);
  border: 1px solid #a7a7a7;

  border-radius: 1.6rem;
  overflow: hidden;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;

  /* .asset-card--footer-info {
    visibility: hidden;
  }

  .asset-card--footer-buttons {
    visibility: visible;
  } */

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

export default AssetCardFlexible;
