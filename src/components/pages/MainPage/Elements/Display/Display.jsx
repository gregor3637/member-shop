import React, { useState } from "react";
import styled from "styled-components";

import Tooltip from "../../../../General/Tooltip/Tooltip";
import Timer from "../../../../General/Timer/Timer";
import UserProfileCard from "../../../../General/User/UserProfileCard";
import { getMainNewFeaturedItemData } from "../../../../../lib/api";
import useHttp from "../../../../../hooks/useHttp";
import useInit from "../../../../../hooks/useInit";
import EthGrey from "../../../../../img/svg/GreyCurrencies/Ethereum";
import { Link } from "react-router-dom";
import BidModal from "../../../../General/Modal/Bid/BidModal";

const Display = (props) => {
  const [showBidModal, setShowBidModal] = useState(false);
  const { sendRequest, status, data, error } = useHttp(
    getMainNewFeaturedItemData
  );

  useInit(sendRequest);

  const bidHandle = () => setShowBidModal(true);

  return (
    <Wrapper>
      {!data ? (
        <div>loading</div>
      ) : (
        <>
          {showBidModal && (
            <BidModal itemData={data} onClose={() => setShowBidModal(false)} />
          )}
          <Background>
            <img
              src="https://public.nftstatic.com/static/nft/zipped/316b937f6ce043ca885aef2908984df9_zipped.png"
              alt=""
            />
          </Background>
          <Div>
            <FeaturedX>
              <a href={`item/${data.id}`} className="image">
                <img src={data.general.src} alt="" />
              </a>
              <InfoX>
                <GeneralInfoX>
                  <div>
                    <UserProfileCardModified data={data} />
                  </div>
                  <h2>{data.general.name}</h2>
                </GeneralInfoX>
                <BidDetailsX>
                  <div className="bid">
                    <div className="annotation">Heighest bid</div>
                    <div className="bid__value">
                      <EthGrey />
                      <div>{data.bids.active[0].amount}</div>
                      <span>ETH</span>
                    </div>
                  </div>
                  <div className="timer">
                    <div className="annotation">Auction ends in</div>
                    <Timer
                      style={{
                        padding: "0.8rem",
                        fontSize: "1.2rem",
                        borderRadius: "1rem",
                      }}
                      countDownDate={data.bids.active[0].time}
                    />
                  </div>
                </BidDetailsX>
                <ButtonsContainerX>
                  <ButtonRoundedX onClick={bidHandle}>Place Bid</ButtonRoundedX>
                  <LinkHollowX to={`item/${data.id}`}>See More</LinkHollowX>
                </ButtonsContainerX>
              </InfoX>
            </FeaturedX>
          </Div>
        </>
      )}
    </Wrapper>
  );
};

const LinkHollowX = styled(Link)`
  padding: 0.2rem 0;
  width: 18rem;

  background-color: var(--color-white);
  border: 1px solid var(--color-black);
  border-radius: 1.6rem;
  box-shadow: none;

  font-size: 2rem;
  font-family: var(--font-primary);
  font-weight: 500;
  text-decoration: none;
  color: var(--anchorTag-color-link);

  cursor: pointer;

  transition: all 0.2s ease;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: none;
    transform: translateY(-1px);
    color: var(--color-black);
  }
`;

const ButtonRoundedX = styled.button`
  width: 18rem;
  height: 6rem;
  padding: 0.4rem 0;

  border: 0;
  border-radius: 1.6rem;
  box-shadow: none;

  background-color: var(--button-black);

  font-size: 2rem;
  font-family: var(--font-primary);
  font-weight: 500;
  color: var(--color-white);

  cursor: pointer;

  transition: all 0.1s ease;

  &:hover {
    transform: translateY(-1px);
  }
`;

const ButtonsContainerX = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 2rem;
`;

const Background = styled.div`
  position: absolute;
  z-index: 1;

  -webkit-mask-image: -webkit-gradient(
    linear,
    center top,
    center bottom,
    from(rgba(0, 0, 0, 0.2)),
    to(rgba(0, 0, 0, 0))
  );

  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    opacity: 0.5;
  }
`;

const Div = styled.div`
  z-index: 10;
  max-width: min(120rem, 100% - 4rem);
  height: 90%;
  padding-top: 5rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GeneralInfoX = styled.div`
  display: flex;
  flex-direction: column;
`;

const BidDetailsX = styled.div`
  margin: 1rem 0 3rem 0;

  display: flex;
  flex-direction: column;

  .bid {
    display: flex;
    flex-direction: column;

    &__value {
      display: flex;
      align-items: center;

      margin-top: -1rem;

      font-size: 3rem;
      font-family: var(--font-primary);
      font-weight: 600;

      svg {
        transform: scale(1);
        color: var(--color-black);
      }

      span {
        margin-left: 1rem;
      }
    }
  }

  .annotation {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  .timer {
  }
`;

const FeaturedX = styled.div`
  z-index: 10;
  width: 100%;
  height: 100%;
  margin-bottom: 5rem;

  display: flex;
  justify-content: center;
  gap: 4rem;

  .image {
    flex: 0 0 max-content;
    flex-shrink: 0;
    user-select: none;

    height: 100%;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-width: 100%;
      max-height: 100%;

      border-radius: 1rem;
      object-fit: cover;
      cursor: pointer;
    }
  }
`;

const InfoX = styled.div`
  height: 100%;
  text-align: left;

  & > :first-child {
    display: flex;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  .UserProfileCard {
    padding-bottom: 5rem;
  }

  h2 {
    font-size: 5rem;
    line-height: 6rem;
    text-align: left;
  }
`;

const UserProfileCardModified = styled(UserProfileCard)``;

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: calc(100vh - 14rem);
`;

export default Display;
