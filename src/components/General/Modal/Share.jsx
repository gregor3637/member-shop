import React from "react";
import styled from "styled-components";
import SocialLink from "../Buttons/SocialButtons/SocialLink";

import FAIcon from "../FAIcon/FAIcon";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Share = (props) => {
  return (
    <Wrapper>
      <div>Share this NFT</div>
      <CloseButtonX onClick={props.onClose}>
        <FAIcon icon={faTimes}></FAIcon>
      </CloseButtonX>
      <ContainerX>
        <SocialLink style={{ marginRight: "1rem" }} icon="fb" iconSize="3" />
        <SocialLink style={{ marginRight: "1rem" }} icon="tw" iconSize="3" />
        <SocialLink style={{ marginRight: "1rem" }} icon="in" iconSize="3" />
        <SocialLink style={{ marginRight: "1rem" }} icon="email" iconSize="3" />
      </ContainerX>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  padding: 2rem 2rem;
  top: 50%;
  right: 50%;
  z-index: 999;
  transform: translate(50%, -50%);
  background-color: var(--color-white);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 1rem;

  & > div:first-child {
    margin-bottom: 4rem;
    align-self: flex-start;
    font-size: 3rem;
    font-weight: 600;
  }
`;

const ContainerX = styled.div`
  display: flex;
`;

const CloseButtonX = styled.button`
  position: absolute;
  right: 2rem;
  top: 2rem;

  background-color: transparent;
  border: none;

  cursor: pointer;

  svg {
    color: var(--color-button-dark-inactive);

    &:hover {
      color: var(--color-button-dark-hover);
    }
  }
`;

export default Share;
