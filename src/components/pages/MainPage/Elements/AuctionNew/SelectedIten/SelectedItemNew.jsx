import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Timer from "../../../../../General/Timer/Timer";
import { randomIntFromInterval } from "../../../../../../helpers/MathHelpers";
import CurrencyIcon from "../../../../../General/AssetCard/AssetCardInfo/CurrencyView/CurrencyIcon";

const SelectedItemNew = ({ showcaseItemData }) => {
  var date = new Date();
  date.setDate(date.getDate() + randomIntFromInterval(1, 10));
  date.setHours(randomIntFromInterval(1, 23));
  date.setMinutes(date.getMinutes() + randomIntFromInterval(1, 60));
  let finDate = date.setSeconds(randomIntFromInterval(1, 60));

  return !showcaseItemData ? null : (
    <Wrapper to={`/collection/${showcaseItemData.project.name}`}>
      <ViewX>
        <img src={showcaseItemData.general.src} alt="" />
      </ViewX>
      <FooterX>
        <AvatarContainerX>
          <img src={showcaseItemData.contract.creator.avatar} alt="" />
        </AvatarContainerX>
        <InfoX>
          <CreatorNameX>{showcaseItemData.contract.creator.name}</CreatorNameX>
          <BidInfoX>
            <span>Last Bid: </span>
            <div>
              {/* {showcaseItemData.bids.active[0].currency}{" "} */}
              <CurrencyIcon
                currency={showcaseItemData.bids.active[0].currency}
              />
              <span> {showcaseItemData.bids.active[0].amount}</span>
            </div>
          </BidInfoX>
        </InfoX>
        <TimerContainerX>
          <Timer
            style={{
              padding: "0.8rem",
              fontSize: "1rem",
              borderRadius: "1rem",
            }}
            // countDownDate={showcaseItemData.bids.active[0].time}
            countDownDate={finDate}
          />
        </TimerContainerX>
      </FooterX>
    </Wrapper>
  );
};

const CreatorNameX = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-black);

  text-overflow: ellipsis;
  white-space: wrap;
  overflow: hidden;
`;

const BidInfoX = styled.div`
  width: max-content;

  display: flex;
  align-items: center;
  gap: 1rem;

  & > div {
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }

  svg {
    border-radius: 50%;
    color: var(--color-white);
  }

  & > span:first-of-type {
    font-weight: 400;
  }
`;

const InfoX = styled.div`
  flex: 1;
  min-width: 0;

  text-overflow: ellipsis;
  white-space: wrap;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  span {
    font-size: 1.4rem;
    font-weight: 600;
  }
`;

const AvatarContainerX = styled.div`
  height: 100%;

  img {
    border-radius: 50%;
    height: 100%;
  }
`;

const FooterX = styled.div`
  position: relative;
  padding-top: 2rem;
  flex-basis: 10%;
  width: 100%;
  height: 15%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const ViewX = styled.div`
  flex: 1;
  overflow: hidden;

  img {
    width: auto;
    height: 100%;
    width: 100%;

    object-fit: cover;

    border-radius: 1rem;
    background: var(--color-white);
  }
`;

const TimerContainerX = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  /* bottom: 5%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%); */

  background: var(--color-white);
  padding: 0.8rem 0.8rem 0.8rem 0.8rem;
  flex: 0 0 min-content;

  border-radius: 1.6rem;
`;

const Wrapper = styled(Link)`
  height: 100%;
  max-height: 44rem;
  padding: 1rem;
  min-width: 0;
  flex: 1;

  display: flex;
  flex-direction: column;

  border: 1px solid var(--color-border);
  border-radius: 1rem;

  text-decoration: none;
  color: inherit;
`;

export default SelectedItemNew;
