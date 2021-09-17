import React from "react";
import styled from "styled-components";

import ShopItem from "./Shop/ShopItem";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import AcUnitOutlinedIcon from "@material-ui/icons/AcUnitOutlined";
import Tooltip from "./Tooltip";
import ShopItemCountdown from "./Shop/ShopItemCountdown";

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
        <div className="featured__title">
          <h1>Discover, collect, and sell extraordinary NFTs</h1>
          <span>on the world's first & largest NFT marketplace</span>
          <div className="button-container">
            <button>Explore</button>
            <button>Create</button>
          </div>
        </div>
        <div className="featured__project">
          <ShopItemCountdown></ShopItemCountdown>
        </div>
      </div>
      <div className="alternative"></div>
    </MainStyled>
  );
};

const MainStyled = styled.main`
  width: 100%;
  max-width: min(120rem, 100% - 4rem);
  margin: 0 auto;
  height: calc(100vh - 7rem);

  display: flex;
  flex-direction: column;
  align-items: center;

  .featured {
    background-color: red;
    width: 100%;
    height: 60%;

    display: flex;

    &__title {
      background-color: blueviolet;
      height: 100%;

      flex: 1;

      display: flex;
      flex-direction: column;
      justify-content: center;

      h1 {
        font-size: 4.5rem;
        line-height: 5rem;
        text-align: center;
      }

      span {
        padding-top: 3rem;
        font-size: 2.5rem;
        text-align: center;
      }

      .button-container {
        background-color: red;
        padding-top: 3rem;

        display: flex;
        justify-content: center;

        button:first-of-type {
          margin-right: 4rem;
        }
      }
    }

    &__project {
      background-color: greenyellow;
      flex: 1;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .alternative {
    background-color: whitesmoke;
    width: 100%;
    height: 40%;
  }
`;

export default Main;
