import React from "react";
import styled from "styled-components";

import Timer from "../../../../General/Timer/Timer";
import AttentionDot from "../../../../General/AttentionDot/AttentionDot";
import { useState } from "react";
import LoadingSpinner from "../../../../General/LoadingSpinner/LoadingSpinner";

const AuctionItem = (props) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const Dot = (
    <AttentionDot
      margin="0 0.5rem 0 0"
      radius={5}
      color={props.countdownToStart ? "#008cff" : "#00ff2a"}
    />
  );

  const handleImgLoadCompleted = (props) => {
    setIsImageLoaded(true);
  };

  return (
    <Wrapper className="zzzzzzzzzzzzzzzzz">
      <ContainerDivX>
        <ImageDivX className={!isImageLoaded ? "loading-img" : ""}>
          {!isImageLoaded && <LoadingSpinnerX />}
          <img src={props.imgSrc} onLoad={handleImgLoadCompleted} alt="" />
        </ImageDivX>
        <DivX>
          <Description>
            <h6>{props.title}</h6>
            <DivPX>{props.description}</DivPX>
            <ChainX>
              <span>Chain:</span>
              {props.chain.map((c, i) => {
                return <span key={i}>{c}</span>;
              })}
            </ChainX>
          </Description>
          <TimerDivX>
            <Timer
              style={{
                fontSize: "2rem",
                borderRadius: "1rem",
              }}
              countDownDate={props.countdownEnd}
            />
            <TimerDescriptionX>
              {Dot}
              <TimerMessageX>
                {props.countdownToStart
                  ? "Auction starts in"
                  : "Auction ends in"}
              </TimerMessageX>
            </TimerDescriptionX>
          </TimerDivX>
        </DivX>
      </ContainerDivX>
    </Wrapper>
  );
};

const LoadingSpinnerX = styled(LoadingSpinner)`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`;

const ContainerDivX = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 1rem;
  transition: all 0.4s ease;
  border-right: black;
  border-left: black;

  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px -3px 15px;
  }
`;

const ImageDivX = styled.div`
  position: relative;
  width: 100%;
  height: 60%;
  overflow: hidden;
  border: 1 solid rgba(255, 255, 255, 0);

  display: flex;
  justify-content: center;
  align-items: center;
  /* border-top-left-radius: 1rem 1rem;
  border-top-right-radius: 1rem 1rem; */

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    /* transition: all 0.5s ease;

    &:hover {
      transform: scale(1.05);
    } */
  }

  &.loading-img {
    img {
      visibility: hidden;
    }
  }
`;

const DivX = styled.div`
  position: relative;
  flex: 1;

  border-bottom-left-radius: 1rem 1rem;
  border-bottom-right-radius: 1rem 1rem;
  border: 1px solid var(--border-color);
  border-top: none;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: var(--font-primary);
  font-weight: 600;

  button {
    padding: 0.5rem 1rem;

    background: none;
    border: 1px solid var(--border-color);
    color: var(--color-black);
    border-radius: 0.8rem;

    cursor: pointer;

    &:hover {
      border-color: var(--color-black);
    }
  }
`;

const TimerDivX = styled.div`
  position: absolute;
  transform: translateY(-50%);

  padding: 0.8rem 0.8rem;

  background-color: var(--color-white);
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  margin: 5rem 3rem 1rem 3rem;

  color: var(--color-black);
  text-align: center;

  h6 {
    padding-bottom: 1.5rem;
    font-size: 2rem;
  }

  p {
    font-size: 1.3rem;
  }
`;
const TimerMessageX = styled.div``;

const TimerDescriptionX = styled.div`
  margin-top: 0.5rem;

  position: absolute;
  bottom: -1rem;

  display: flex;
  align-items: center;
`;

const DivPX = styled.p`
  flex: 1;
`;

const ChainX = styled.div`
  span {
    margin-right: 1rem;
  }
`;

const Wrapper = styled.div`
  opacity: 0;
  animation: fade-out 1s; // animation must not be longer than slide transition 

  width: 100%;
  padding: 1.5rem 1rem;
  height: 55rem;

  cursor: pointer;
  text-align: center;
`;

export default AuctionItem;
