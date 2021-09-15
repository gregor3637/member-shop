import React from "react";
import styled from "styled-components";

import PreviewCardImage from "./PreviewCardImage";
import Timer from "./Timer";
import TimerSimple from "./TimerSimple";

const PreviewCountdown = (props) => {
  return (
    <PreviewCountdownStyled>
      <PreviewCardImage
        width="35rem"
        height="35rem"
        imgUrl="https://public.nftstatic.com/static/nft/zipped/316b937f6ce043ca885aef2908984df9_zipped.png"
        type={props.type}
        favorites={props.favorite}
      />

      <div className="info">
        <div className="info__project">
          <div className="artist">Bored Ape Yacht Club</div>
          <div className="project-name">Aping</div>
        </div>
        <div className="time">
          <div className="time-description">Ending in</div>
          <TimerSimple countDownDate={"Dec 30, 2021 23:45:00"}></TimerSimple>
        </div>
      </div>
    </PreviewCountdownStyled>
  );
};

const PreviewCountdownStyled = styled.div`
  width: 35rem;
  height: 40rem;
  border-radius: 1rem;
  background-color: var(--background-dark-color);
  color: var(--white-color);
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-1px);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  .info {
    max-width: 100%;
    height: 5rem;

    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;

    &__project {
      padding-left: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .time {
      padding-right: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
    }
  }
`;

export default PreviewCountdown;
