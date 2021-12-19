import React from "react";
import styled from "styled-components";

const LoginWalletOption = ({ img, walletName, annotation }) => {
  return (
    <LiX>
      <ButtonX>
        <ImageDivX src={img} />
        <NameDivX>{walletName}</NameDivX>
        {annotation && <div>{annotation}</div>}
      </ButtonX>
    </LiX>
  );
};

const LiX = styled.li`
  border-bottom: 1px solid var(--color-border);
`;

const ButtonX = styled.button`
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  height: 100%;
  padding: 1.6rem 2rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: -11;

  border: none;
  cursor: pointer;

  &:hover {
    box-shadow: rgb(4 17 29 / 25%) 0px 0px 1.4rem 0px;
  }
`;

const ImageDivX = styled.img`
  padding-right: 2rem;
  height: 2.4rem;
`;

const NameDivX = styled.div`
  flex: 1;

  text-align: start;
  font-size: 1.6rem;
  font-weight: 600;
`;

export default LoginWalletOption;
