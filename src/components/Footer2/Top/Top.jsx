import React from "react";
import styled from "styled-components";
import SocialLink from "../../General/Buttons/SocialButtons/SocialLink";

import QR from "../../../img/footer/QR.png";
import AppStorePng from "../../../img/footer/AppStore.png";
import GooglePlayPng from "../../../img/footer/GooglePlay.png";

const Top = (props) => {
  return (
    <Wrapper>
      <SocialNavX>
        <span>Join our community</span>
        <IconsContainerX>
          <SocialLink icon="in" />
          <SocialLink icon="tw" />
          <SocialLink icon="dis" />
          <SocialLink icon="tel" />
          <SocialLink icon="yt" />
          <SocialLink icon="med" />
        </IconsContainerX>
      </SocialNavX>
      <QrCodeX>
        <div>
          <img src={QR} alt="" />
        </div>
      </QrCodeX>
      <MobileApplicationLinksX>
        <span>Download the app to explore any NFTs</span>
        <div>
          <a
            href="https://www.apple.com/store"
            target="_blank"
            rel="noreferrer"
          >
            <img src={AppStorePng} alt="" />
          </a>
          <a
            href="https://play.google.com/store/apps"
            target="_blank"
            rel="noreferrer"
          >
            <img src={GooglePlayPng} alt="" />
          </a>
        </div>
      </MobileApplicationLinksX>
    </Wrapper>
  );
};

const IconsContainerX = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
`;

const SocialNavX = styled.nav``;

const QrCodeX = styled.div`
  margin: 0 5rem;
  padding: 2rem 1.6rem 4rem 1.6rem;

  border: 8px solid var(--color-grey20);
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  border-bottom: none;

  div {
    background: #feda08;
    border-radius: 1rem;

    img {
      width: 10rem;
      height: 10rem;
    }
  }
`;

const MobileApplicationLinksX = styled.div`
  width: min-content;

  span {
    overflow-wrap: break-word;
  }

  div {
    margin-top: 1rem;

    display: flex;
    gap: 1rem;
  }

  a {
    display: flex;

    background: var(--color-none);
    border: none;
    cursor: pointer;
  }

  img {
    height: 3.6rem;
  }
`;

const Wrapper = styled.div`
  margin-top: 4rem;

  display: flex;
  justify-content: start;

  span {
    font-size: 1.4rem;
    font-weight: 600;
  }
`;

export default Top;
