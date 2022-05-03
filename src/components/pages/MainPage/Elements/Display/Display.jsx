import React from "react";
import styled from "styled-components";

import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import AcUnitOutlinedIcon from "@material-ui/icons/AcUnitOutlined";

import Tooltip from "../../../../General/Tooltip/Tooltip";
import LinkHollow from "../../../../Links/LinkHollow";
import ButtonRounded from "../../../../General/Buttons/ButtonRounded";
import Timer from "../../../../General/Timer/Timer";
import UserProfileCard from "../../../../General/User/UserProfileCard";
import { getMainNewFeaturedItemData } from "../../../../../lib/api";
import useHttp from "../../../../../hooks/useHttp";
import useInit from "../../../../../hooks/useInit";
import EthGrey from "../../../../../img/svg/GreyCurrencies/Ethereum";

const Display = (props) => {
  const { sendRequest, status, data, error } = useHttp(
    getMainNewFeaturedItemData
  );

  useInit(sendRequest);

  return (
    <Wrapper>
      {!data ? (
        <div>loading</div>
      ) : (
        <>
          <Background>
            <img
              src="https://public.nftstatic.com/static/nft/zipped/316b937f6ce043ca885aef2908984df9_zipped.png"
              alt=""
            />
          </Background>
          <Div>
            <FeaturedX>
              <div className="image">
                <img src={data.general.src} alt="" />
              </div>
              <InfoX>
                <GeneralInfoX>
                  <div>
                    <UserProfileCardModified data={data} />
                  </div>
                  <Link href="https://www.abv.bg">
                    <h2>{data.general.name}</h2>
                  </Link>
                </GeneralInfoX>
                <BidDetailsX>
                  <div className="bid">
                    <div className="annotation">Current bid</div>
                    <div className="bid__value">
                      <EthGrey />
                      <div>{data.bids.active[0].amount}</div>
                      <span>ETH</span>
                    </div>
                  </div>
                  <div className="timer">
                    <div className="annotation">Ending in</div>
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
                <ButtonsDiv>
                  <ModifiedButton>Bid</ModifiedButton>
                  <LinkHollowX href={`item/${data.id}`}>See more</LinkHollowX>
                </ButtonsDiv>
              </InfoX>
            </FeaturedX>
          </Div>
        </>
      )}
    </Wrapper>
  );
};

const LinkHollowX = styled.a`
  padding: 0.5rem 5rem;

  background-color: var(--color-white);
  border: 1px solid var(--color-black);
  border-radius: 1.6rem;
  box-shadow: none;

  font-size: 3.5rem;
  font-family: var(--font-primary);
  font-weight: 500;
  color: var(--anchorTag-color-link);

  cursor: pointer;

  transition: all 0.4s ease;

  &:hover {
    background-color: none;
    transform: translateY(-1px);
    color: var(--color-black);
  }
`;

const ModifiedButton = styled(ButtonRounded)`
  padding: 0.5rem 11rem;

  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-1px);
  }
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

const ButtonsDiv = styled.div`
  display: flex;
  justify-content: flex-start;

  button:first-of-type {
    margin-right: 4rem;
  }
`;

const UserProfileCardModified = styled(UserProfileCard)``;

const Link = styled.a`
  &,
  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
    color: inherit;
  }
`;

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: calc(100vh - 14rem);
`;

export default Display;
