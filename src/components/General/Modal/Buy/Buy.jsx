import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import BlockchainIcon from "../../BlockchainIcon/BlockchainIcon";
import ActionButton from "../../../pages/MarketplacePage/CommonElements/ActionButton/ActionButton";
import Checkbox from "../../Checkbox/Checkbox";
import Switch from "../../Switch/Switch";

const Buy = ({ itemData, onClose }) => {
  const [isAgreeingToTerms, setIsAgreeingToTerms] = useState(false);

  return (
    <Wrapper>
      <ItemDataX>
        <LinkX to="">
          <span>{itemData.general.name}</span>
        </LinkX>
      </ItemDataX>

      <ViewX>
        <img src={itemData.general.src} alt="" />
      </ViewX>

      <ConnectedWalletInfoX>
        <WalletLabelX>
          <span>Seller address</span>
        </WalletLabelX>
        <AddressInfoX>
          <span>{itemData.contract.contractAddress}</span>
          <CircleHolderX>
            <BlockchainIcon name={itemData.contract.blockchain} />
          </CircleHolderX>
        </AddressInfoX>
      </ConnectedWalletInfoX>

      <ConnectedWalletInfoX>
        <WalletLabelX>
          <span>Receiver address</span>
          <WalletTypeX>
            <GreenDotX />
            <span>MetaMask</span>
          </WalletTypeX>
        </WalletLabelX>
        <AddressInfoX>
          <span>0x71C7656EC7ab88b098defB751B7401B5f6d8976zz</span>
          <CircleHolderX>
            <BlockchainIcon name="Ethereum" />
          </CircleHolderX>
        </AddressInfoX>
      </ConnectedWalletInfoX>

      <PaymentInfoX>
        <span>Pay with</span>
        <SwitchX />
      </PaymentInfoX>

      <TransactionInfoX>
        <BlanceX>
          <span>Balance</span>
          <span>0 ETH</span>
        </BlanceX>
        <ServiceFeeX>
          <span>Service fee 0%</span>
          <span>0 ETH</span>
        </ServiceFeeX>
        <PaymentX>
          <span>Item Price</span>
          <span>
            {itemData.price.amount}&nbsp;{itemData.price.currency}
          </span>
        </PaymentX>
        <TotalX>
          <span>Total</span>
          <span>
            {itemData.price.amount}&nbsp;{itemData.price.currency}
          </span>
        </TotalX>
      </TransactionInfoX>

      <ConditionsX>
        <CheckboxX
          setIsChecked={setIsAgreeingToTerms}
          label="I agree with terms of services and payment"
        />

        <ActionButton
          text={"Buy now"}
          onClick={() => {}}
          isDisabled={!isAgreeingToTerms}
        />
      </ConditionsX>
    </Wrapper>
  );
};

const SwitchX = styled(Switch)``;

const CheckboxX = styled(Checkbox)`
  margin-bottom: 0.5rem;

  span {
    color: var(--color-grey50);
    font-size: 1.2rem;
    font-weight: 500;
  }
`;

const ConditionsX = styled.div``;

//------------------------

const PaymentInfoX = styled.div`
  margin-top: 1rem;
`;
//----------------------
const TotalX = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid var(--color-grey50);
`;

const PaymentX = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ServiceFeeX = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BlanceX = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TransactionInfoX = styled.div`
  margin: 4rem 0;

  font-size: 1.2rem;
  font-weight: 500;
  color: var(--color-grey50);
`;
///--------------------------
const GreenDotX = styled.div`
  height: 8px;
  width: 8px;

  border-radius: 50%;
  background: #02c702;
`;

const WalletTypeX = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;

  span {
    font-weight: 600;
  }
`;

const WalletLabelX = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CircleHolderX = styled.div`
  height: 20px;
  width: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: 50%;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
    background-color: var(--color-white);
  }
`;

const AddressInfoX = styled.div`
  height: 4rem;
  padding: 0 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  border-radius: 0.8rem;
  background: var(--color-grey20);

  span {
    font-size: 1.4rem;
  }
`;

//------------------

const ConnectedWalletInfoX = styled.div`
  margin-top: 1rem;
`;

//-----------------------------

const ViewX = styled.div`
  margin-top: 1rem;

  display: flex;
  justify-content: center;

  img {
    width: 10rem;
    height: 10rem;

    border-radius: 1rem;
    overflow: hidden;
  }
`;
///--------------------------
const LinkX = styled(Link)`
  text-decoration: inherit;
  color: inherit;
  word-break: break-word;
`;

const ItemDataX = styled.span`
  font-size: 2rem;

  text-align: center;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  /* width: 100%; */
  padding: 1rem;
  margin: 0 1rem;

  border-radius: 1rem;
  border: 1px solid var(--color-grey20);
`;

export default Buy;
