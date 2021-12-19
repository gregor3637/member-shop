import React from "react";
import styled from "styled-components";
import LoginWalletOption from "./LoginWalletOption";

import Footer from "../../Footer/Footer";
import metamaskImage from "../../../img/wallet/metamask-alternative.png";
import fortmaticImage from "../../../img/wallet/fortmatic-alternative.png";
import connectImage from "../../../img/wallet/walletconnect-alternative.png";
import linkImage from "../../../img/wallet/walletlink-alternative.png";

const LoginPage = (props) => {
  return (
    <>
      <Styled>
        <HeaderInfo>
          <h1>Connect your wallet.</h1>
          <p>
            Connect with one of our available wallet info providers or create a
            new one.
          </p>
        </HeaderInfo>
        <ButtonsContainerX>
          <ul>
            <LoginWalletOption
              walletName="MetaMask"
              annotation="Popular"
              img={metamaskImage}
            />
            <LoginWalletOption
              walletName="Coinbase wallet"
              img={fortmaticImage}
            />
            <LoginWalletOption walletName="WalletConnect" img={connectImage} />
            <LoginWalletOption walletName="Formatic" img={linkImage} />
          </ul>
        </ButtonsContainerX>
      </Styled>
      <Footer />
    </>
  );
};

const Styled = styled.div`
  height: 100%;
  background-color: violet;
  padding: 2rem;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  p {
    font-size: 1.6rem;
  }
`;

const HeaderInfo = styled.div``;

const ButtonsContainerX = styled.div`
  background-color: var(--color-white);
  width: 60rem;
  margin-top: 2rem;

  border-radius: 1rem;
  overflow: hidden;
`;

export default LoginPage;
