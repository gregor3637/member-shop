import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import FAIcon from "../../FAIcon/FAIcon";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

import { ellipsysMiddleText } from "../../../../helpers/EllipsysMiddleText";
import { capitalizeFirstLetter } from "../../../../helpers/CapitalizeFirstLetter";

const HistoryEvent = ({ data, onClose }) => {
  return (
    <Wrapper>
      <HeaderX>
        <h1>{capitalizeFirstLetter(data.type)}</h1>
        <CloseButtonX onClick={onClose}>
          <div>
            <FAIcon icon={faTimes}></FAIcon>
          </div>
        </CloseButtonX>
      </HeaderX>
      <MainX>
        <PriceAnnotationsX>
          <span>From</span>
          <span>To</span>
        </PriceAnnotationsX>
        <TransactionX>
          <div>
            {(data.from && (
              <AccountX to={`user/${data.from.name}`}>
                <ImgWrapperX>
                  <img src={data.from.src} alt="avatar" />
                </ImgWrapperX>
                <span>{ellipsysMiddleText(data.from.address)}</span>
              </AccountX>
            )) ||
              "null"}
          </div>
          <ArrowHolderX>
            <ArrowForwardIosRoundedIcon />
          </ArrowHolderX>
          <div>
            <AccountX to={`user/${data.to.name}`}>
              <ImgWrapperX>
                <img src={data.to.src} alt="avatar" />
              </ImgWrapperX>
              <span>{ellipsysMiddleText(data.to.address)}</span>
            </AccountX>
          </div>
        </TransactionX>
      </MainX>
      <FooterX>
        <DateX>
          <span>date: {data.date}</span>
        </DateX>
        {data.cost && (
          <PriceX>
            <div>Total</div>
            <PriceAmountX>
              <div>
                {data.cost.amount} {data.cost.currency}
              </div>
              <div>{data.cost.usdEquivalent}USD</div>
            </PriceAmountX>
          </PriceX>
        )}
        <BlockchainLinkX
          to={
            "https://etherscan.io/tx/0x3fd1ee2742a218bddb39a238c156d458143c5a1659926cd76eb2962b9bd05f76"
          }
        >
          View on block explorer
        </BlockchainLinkX>
      </FooterX>
    </Wrapper>
  );
};

const CloseButtonX = styled.button`
  background-color: transparent;
  border: none;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: transparent;

    &:hover {
      background-color: var(--color-grey20);
    }
  }

  cursor: pointer;
`;

const HeaderX = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2rem;

  svg {
    transform: scale(0.8);
  }
`;
//------------------------

const ImgWrapperX = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  flex: 0 0 2.8rem;

  border: 1px solid var(--border-color);
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    object-fit: contain;
  }
`;

const PriceAnnotationsX = styled.div`
  display: flex;
  justify-content: space-between;

  font-weight: 500;
`;

const ArrowHolderX = styled.div`
  display: flex;
  align-items: center;
`;
const AccountX = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;

  overflow: hidden;

  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    font-size: 14px;
  }
`;
const TransactionX = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content 1fr;
  gap: 0.5rem;
`;

const MainX = styled.div``;
//------------------------

const PriceAmountX = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const PriceX = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
`;

const DateX = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BlockchainLinkX = styled(Link)`
  /* margin: auto; */
  border-top: 1px solid var(--color-grey20);
  margin-top: 2rem;
  padding-top: 1rem;
  text-align: center;
`;

const FooterX = styled.div`
  padding-top: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Wrapper = styled.div`
  position: absolute;
  padding: 1rem 1.4rem;
  width: 85%;
  top: 50%;
  right: 50%;
  z-index: 999;
  transform: translate(50%, -50%);
  background-color: var(--color-white);

  border-radius: 1rem;

  a {
    text-decoration: inherit;
    color: var(--color-blue);
  }
`;

export default HistoryEvent;
