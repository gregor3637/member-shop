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
import Carousel from "./Carousel";

const Main = (props) => {
  const cardCollectionBadge = (
    <Tooltip content="Verified">
      <StarBorderOutlinedIcon />
    </Tooltip>
  );
  const cardAnnotations = <AcUnitOutlinedIcon />;

  return (
    <MainStyled>
      <BackgroundStyled>
        <img
          src="https://public.nftstatic.com/static/nft/zipped/316b937f6ce043ca885aef2908984df9_zipped.png"
          alt=""
        />
      </BackgroundStyled>
      <ContainerStyled>
        <FeaturedStyled>
          <div className="image">
            <img
              src="https://public.nftstatic.com/static/nft/zipped/316b937f6ce043ca885aef2908984df9_zipped.png"
              alt=""
            />
          </div>
          <div className="info">
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
        </FeaturedStyled>
      </ContainerStyled>
    </MainStyled>
  );
};

const MainStyled = styled.main`
  position: relative;
  width: 100%;
  height: calc(100vh - 7rem);
`;

const BackgroundStyled = styled.div`
  position: absolute;
  z-index: 1;

  -webkit-mask-image: -webkit-gradient(
    linear,
    center top,
    center bottom,
    from(rgba(0, 0, 0, 0.2)),
    to(rgba(0, 0, 0, 0))
  );

  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    opacity: 0.5;
  }
`;

const ContainerStyled = styled.div`
background-color: green;
  z-index: 10;
  max-width: min(120rem, 100% - 4rem);
  height: 90%;
  padding-top: 5rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectDetailsStyled = styled.div`
  margin: 2rem 0;

  display: flex;
  flex-direction: column;
  text-align: start;
  justify-content: flex-start;

  span {
    font-size: 1.1rem;
  }

  .bid {
    border-right: var(--line);

    div {
      font-size: 3rem;
      font-family: var(--font-primary);
      font-weight: 600;
    }
  }

  .timer {
    div {
      font-size: 3rem;
      font-family: var(--font-primary);
      font-weight: 600;
    }
  }
`;

const FeaturedStyled = styled.div`
  z-index: 10;
  width: 100%;
  height: 100%;

  margin-bottom: 5rem;
  display: flex;

  .image {
    flex: 1;
    flex-shrink: 0;
    user-select: none;

    height: 100%;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
      cursor: pointer;
    }
  }

  .info {
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
`;

const CarouselStyled = styled.div`
  background-color: red;
  width: 100%;
  height: 10%;
  z-index: 5;

  cursor: pointer;

  padding-top: 5rem;

  img {
    max-width: 100%;
    max-height: 100%;
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

const FeaturedNameLink = styled.a`
  &,
  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
    color: inherit;
  }
`;

export default Main;
