import React from "react";
import styled from "styled-components";

import ShopItem from "./Shop/ShopItem";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import AcUnitOutlinedIcon from "@material-ui/icons/AcUnitOutlined";
import Tooltip from "./Tooltip";
import ShopItemCountdown from "./Shop/ShopItemCountdown";
import ButtonMain from "./Buttons/ButtonMain";
import LinkButton from "./Buttons/LinkButton";
import Curosel from "../img/CUROSEL.png";
import Creator from "../img/CREATOR.png";
import UserProfileCard from "./UserProfileCard";
import TimerSimple from "./TimerSimple";

const Main = (props) => {
  const cardCollectionBadge = (
    <Tooltip content="Verified">
      <StarBorderOutlinedIcon />
    </Tooltip>
  );
  const cardAnnotations = <AcUnitOutlinedIcon />;

  return (
    <MainStyled>
      <div className="featured">
        <div className="featured__image">
          {/* <ShopItemCountdown></ShopItemCountdown> */}
          <img
            src="https://public.nftstatic.com/static/nft/zipped/316b937f6ce043ca885aef2908984df9_zipped.png"
            alt=""
          />
        </div>
        <div className="featured__info">
          <div>
            <UserProfileCardModified />
          </div>
          <FeaturedNameLink href="https://www.abv.bg">
            <h2>Methril: Dragon slayer and skeleton champion</h2>
          </FeaturedNameLink>
          <ProjectDetailsStyled>
            <div className="bid">
              <span>Current bid</span>
              <div>0.13 ETH</div>
            </div>
            <div className="timer">
              <span>Ending in</span>
              <TimerSimple
                countDownDate={"Dec 30, 2021 23:45:00"}
              ></TimerSimple>
            </div>
          </ProjectDetailsStyled>
          <ButtonContainerStyled>
            <ButtonMain>EXPLORE</ButtonMain>
            <LinkButton>CREATE</LinkButton>
          </ButtonContainerStyled>
        </div>
      </div>
      <div className="alternative">
        <img src={Curosel} alt="" />
      </div>
    </MainStyled>
  );
};

const MainStyled = styled.main`
  width: 100%;
  max-width: min(120rem, 100% - 4rem);
  height: calc(100vh - 7rem);
  margin: 0 auto;
  padding-top: 8rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .featured {
    width: 100%;
    height: 60%;
    display: flex;

    &__info {
      height: 100%;
      text-align: left;
      flex: 1;

      & > :first-child {
        display: flex;
      }

      display: flex;
      flex-direction: column;
      justify-content: center;

      .UserProfileCard {
        padding-bottom: 5rem;
      }

      h2 {
        font-size: 5rem;
        line-height: 6rem;
        text-align: left;
      }

      .button-container {
      }
    }

    &__image {
      flex: 1;

      display: flex;
      align-items: center;
      justify-content: center;

      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }

  .alternative {
    width: 100%;
    height: 40%;

    padding-top: 10rem;

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
`;

const FeaturedNameLink = styled.a`
  &,
  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
    color: inherit;
  }
`;

const ProjectDetailsStyled = styled.div`
  margin: 2rem 0;

  display: flex;
  text-align: start;
  justify-content: flex-start;

  span {
    font-size: 1.1rem;
  }

  .bid {
    padding-right: 2rem;
    border-right: var(--line);

    div {
      font-size: 3rem;
      font-family: var(--font-primary);
      font-weight: 600;
    }
  }

  .timer {
    padding-left: 2rem;

    div {
      font-size: 3rem;
      font-family: var(--font-primary);
      font-weight: 600;
    }
  }
`;

const ButtonContainerStyled = styled.div`
  display: flex;
  justify-content: flex-start;

  button:first-of-type {
    margin-right: 4rem;
  }
`;

const UserProfileCardModified = styled(UserProfileCard)`
  margin-bottom: 1rem;
`;

export default Main;
