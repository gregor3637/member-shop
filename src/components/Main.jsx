import React from "react";
import styled from "styled-components";
import ShopItem from "./Shop/ShopItem";

import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import AcUnitOutlinedIcon from "@material-ui/icons/AcUnitOutlined";
import Tooltip from "./Tooltip";
import PreviewCountdown from "./PreviewCountdown";
import Timer from "./Timer";

const Main = (props) => {
  const cardCollectionBadge = (
    <Tooltip content="Verified">
      <StarBorderOutlinedIcon />
    </Tooltip>
  );
  const cardAnnotations = <AcUnitOutlinedIcon />;

  return (
    <MainStyled>
      {/* <Tooltip /> */}
      <div className="featured">
        <div className="featured__right">

        <PreviewCountdown></PreviewCountdown>
        

          {/* <ShopItem
            type="img"
            favorite="125"
            collection="Bored Ape Yacht Club"
            collectionBadges={cardCollectionBadge}
            name="#5012"
            priceCurrency="ETH"
            priceValue="40.4"
            collectionSupply="322/5000"
            bidValue="38"
            annotations={cardAnnotations}
          /> */}
        </div>
        <div className="featured__left"></div>
      </div>
    </MainStyled>
  );
};

const MainStyled = styled.main`
  max-width: 100vw;

  display: flex;
  flex-direction: column;

  .featured {
    width: calc(100% - 20rem);
    margin: 0 10rem;
    height: calc(100vh - 7rem);

    display: flex;

    &__left {
      width: 100%;
      height: 100%;
      background-color: red;
    }
    &__right {
      width: 100%;
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: center;

      border: 1px solid blue;
    }
  }

  .test {
    width: 100%;
    height: 100vh;
    background-color: yellowgreen;
  }
`;

export default Main;
