import React from "react";
import styled from "styled-components";

import FAIcon from "../../FAIcon/FAIcon";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const AssetCardAction = ({ children, onClose, label, mainContent, footer }) => {
  return (
    <Wrapper>
      <HeaderX>
        <h3>{label}</h3>
        <CloseButtonX onClick={onClose}>
          <FAIcon icon={faTimes}></FAIcon>
        </CloseButtonX>
      </HeaderX>
      <BodyX>{mainContent}</BodyX>
      <FooterX>{footer}</FooterX>
    </Wrapper>
  );
};

const FooterX = styled.div`
  margin: 0.5rem 4rem 1rem 4rem;

  span {
    display: flex;
    text-align: center;

    color: var(--color-grey50);
    font-weight: 500;
    font-size: 1.2rem;
  }
`;

const BodyX = styled.div`
  width: 100%;
`;
//--------------------
const CloseButtonX = styled.button`
  position: absolute;
  right: 1.6rem;
  top: 1rem;

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

const HeaderX = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--color-grey20);

  display: flex;
  justify-content: center;

  h3 {
    padding: 0.4rem 0;
    font-size: 2.6rem;
  }
`;
//------------------

const Wrapper = styled.div`
  position: fixed;
  z-index: 999;
  right: 50%;
  top: 50%;
  transform: translate(50%, -50%);

  background-color: red;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: min-content;
  width: 50rem;
  background-color: white;

  border-radius: 1rem;
`;

export default AssetCardAction;
