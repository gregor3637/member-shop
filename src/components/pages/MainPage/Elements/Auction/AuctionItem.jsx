import React from "react";
import styled from "styled-components";

import Timer from "../../../../General/Timer/Timer";
import AttentionDot from "../../../../General/AttentionDot/AttentionDot";

const AuctionItem = (props) => {
  const Dot = (
    <AttentionDot
      margin="0 0.5rem 0 0"
      radius={5}
      color={props.countdownToStart ? "#008cff" : "#00ff2a"}
    />
  );

  return (
    <Styled>
      <ContainerDiv>
        <ImageDiv>
          <img src={props.imgSrc} alt="" />
        </ImageDiv>
        <Div>
          <Description>
            <h6>{props.title}</h6>
            <DivP>{props.description}</DivP>
            <ChainX>
              <span>Chain:</span>
              {props.chain.map((c, i) => {
                return <span key={i}>{c}</span>;
              })}
            </ChainX>
          </Description>
          <TimerDiv>
            <Timer
              style={{
                fontSize: "2rem",
                borderRadius: "1rem",
              }}
              countDownDate={props.countdownEnd}
            />
            <TimerDescription>
              {Dot}
              <TimerMessage>
                {props.countdownToStart
                  ? "Auction starts in"
                  : "Auction ends in"}
              </TimerMessage>
            </TimerDescription>
          </TimerDiv>
        </Div>
      </ContainerDiv>
    </Styled>
  );
};

const Styled = styled.div`
  width: 100%;
  padding: 1.5rem 1rem;
  height: 55rem;

  cursor: pointer;
  text-align: center;
`;

const ContainerDiv = styled.div`
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

const ImageDiv = styled.div`
  width: 100%;
  height: 60%;
  overflow: hidden;
  border: 1 solid rgba(255, 255, 255, 0);
  /* border-top-left-radius: 1rem 1rem;
  border-top-right-radius: 1rem 1rem; */

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    transition: all 0.5s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const Div = styled.div`
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

const TimerDiv = styled.div`
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
const TimerMessage = styled.div``;

const TimerDescription = styled.div`
  margin-top: 0.5rem;

  position: absolute;
  bottom: -1rem;

  display: flex;
  align-items: center;
`;

const DivP = styled.p`
  flex: 1;
`;

const ChainX = styled.div`
  span {
    margin-right: 1rem;
  }
`;

export default AuctionItem;
