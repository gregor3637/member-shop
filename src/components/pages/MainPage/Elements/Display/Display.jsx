import React from "react";
import styled from "styled-components";

import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import AcUnitOutlinedIcon from "@material-ui/icons/AcUnitOutlined";

import Tooltip from "../../../../General/Tooltip/Tooltip";
import LinkHollow from "../../../../Links/LinkHollow";
import ButtonRounded from "../../../../General/Buttons/ButtonRounded";
import Timer from "../../../../General/Timer/Timer";
import UserProfileCard from "../../../../General/User/UserProfileCard";

const ModifiedLink = styled(LinkHollow)`
  padding: 0.5rem 5rem;

  background-color: var(--color-white);
  border: 1px solid var(--color-black);
  border-radius: 1rem;
  box-shadow: none;

  font-size: 3.5rem;
  font-family: var(--font-primary);
  font-weight: 500;
  color: var(--anchorTag-color-link);

  cursor: pointer;

  transition: all 0.4s ease;

  &:hover {
    background-color: none;
    transform: translateY(-1px);
    color: var(--color-black);
  }
`;

const ModifiedButton = styled(ButtonRounded)`
  padding: 0.5rem 11rem;

  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-1px);
  }
`;

const Background = styled.div`
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

const Div = styled.div`
  z-index: 10;
  max-width: min(120rem, 100% - 4rem);
  height: 90%;
  padding-top: 5rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectDetails = styled.div`
  margin: 1rem 0 3rem 0;

  display: flex;
  flex-direction: column;

  .bid {
    display: flex;
    flex-direction: column;

    &__value {
      margin-top: -1rem;

      font-size: 3rem;
      font-family: var(--font-primary);
      font-weight: 600;
    }
  }

  .annotation {
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
`;

const Featured = styled.div`
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

const ButtonsDiv = styled.div`
  display: flex;
  justify-content: flex-start;

  button:first-of-type {
    margin-right: 4rem;
  }
`;

const UserProfileCardModified = styled(UserProfileCard)`
  margin-bottom: 1rem;
`;

const Link = styled.a`
  &,
  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
    color: inherit;
  }
`;

const Styled = styled.section`
  position: relative;
  width: 100%;
  height: calc(100vh - 14rem);
`;

const Display = (props) => {
  const cardCollectionBadge = (
    <Tooltip content="Verified">
      <StarBorderOutlinedIcon />
    </Tooltip>
  );
  const cardAnnotations = <AcUnitOutlinedIcon />;

  return (
    <Styled>
      <Background>
        <img
          src="https://public.nftstatic.com/static/nft/zipped/316b937f6ce043ca885aef2908984df9_zipped.png"
          alt=""
        />
      </Background>
      <Div>
        <Featured>
          <div className="image">
            <img
              src="https://public.nftstatic.com/static/nft/zipped/316b937f6ce043ca885aef2908984df9_zipped.png"
              alt=""
            />
          </div>
          <div className="info">
            <div>
              <UserProfileCardModified />
              {cardCollectionBadge}
            </div>
            <Link href="https://www.abv.bg">
              <h2>Methril: Dragon slayer and skeleton champion</h2>
              {cardAnnotations}
            </Link>
            <ProjectDetails>
              <div className="bid">
                <div className="annotation">Current bid</div>
                <div className="bid__value">0.13 ETH</div>
              </div>
              <div className="timer">
                <div className="annotation">Ending in</div>
                {/* <Timer
                  style={{
                    padding: "0.8rem",
                    fontSize: "2rem",
                    borderRadius: "1rem",
                  }}
                  countDownDate={"Dec 30, 2022 23:45:00"}
                /> */}
              </div>
            </ProjectDetails>
            <ButtonsDiv>
              <ModifiedButton>Bid</ModifiedButton>
              <ModifiedLink>See more</ModifiedLink>
            </ButtonsDiv>
          </div>
        </Featured>
      </Div>
    </Styled>
  );
};

export default Display;
