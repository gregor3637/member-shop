import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Timer from "../../../../../General/Timer/Timer";
import RandomTime from "../../../../../../helpers/RandomTime";

const ShowCaseAction = ({ showcaseItemData }) => {
  let output = null;

  
  const countdownTime = RandomTime();

  if (showcaseItemData) {
    output = (
      <Link to={`/collection/${showcaseItemData.project.name}`}>
        <ImageContainerX>
          <img src={showcaseItemData.general.src} alt="" />
        </ImageContainerX>
        <FooterX>
          <AvatarContainerX>
            <img src={showcaseItemData.contract.creator.avatar} alt="" />
          </AvatarContainerX>
          <InfoX>
            <CreatorNameX>
              {" "}
              {showcaseItemData.contract.creator.name}
            </CreatorNameX>
            <BidInfo>
              <span>Highest Bid: </span>
              <span>
                {showcaseItemData.bids.active[0].currency}{" "}
                {showcaseItemData.bids.active[0].amount}
              </span>
            </BidInfo>
          </InfoX>
          <TimerContainer>
            <Timer
              style={{
                padding: "0.8rem",
                fontSize: "1rem",
                borderRadius: "1rem",
              }}
              // countDownDate={"Dec 30, 2022 23:45:00"}
              // countDownDate={showcaseItemData.bids.active[0].time}
              countDownDate={countdownTime}
            />
          </TimerContainer>
        </FooterX>
      </Link>
    );
  }

  return <Wrapper>{output}</Wrapper>;
};

const CreatorNameX = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-black);

  text-overflow: ellipsis;
  white-space: wrap;
  overflow: hidden;
`;

const BidInfo = styled.div`
  & > span:first-of-type {
    font-weight: 400;
  }
`;

const InfoX = styled.div`
  flex: 1;
  min-width: 0;

  text-overflow: ellipsis;
  white-space: wrap;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  span {
    font-size: 1.4rem;
    font-weight: 600;
  }
`;

const TimerContainer = styled.div`
  flex: 0 0 min-content;
`;

const AvatarContainerX = styled.div`
  height: 100%;

  img {
    border-radius: 50%;
    height: 100%;
  }
`;

const FooterX = styled.div`
  /* background-color: green; */
  width: 100%;
  height: 10%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  /* span {
    font-size: 1.4rem;
    font-weight: 600;

    min-width: 0;
    text-overflow: ellipsis;
    white-space: wrap;
    overflow: hidden;
  } */
`;

const ImageContainerX = styled.div`
  height: 90%;
  padding-bottom: 1rem;
  overflow: hidden;

  img {
    width: auto;
    height: 100%;
    width: 100%;

    object-fit: cover;

    border-radius: 1rem;
    background: var(--color-white);
  }
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 1rem;
  min-width: 0;
  flex: 1;

  border: 1px solid var(--color-border);
  border-radius: 1rem;

  a{
    text-decoration: none;
    color: inherit;
  }
`;

export default ShowCaseAction;
