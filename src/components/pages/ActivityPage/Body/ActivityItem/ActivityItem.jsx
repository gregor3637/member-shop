import React from "react";
import styled from "styled-components";

import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import DoneIcon from "@mui/icons-material/Done";

const eventTypeIcons = {
  listings: <LocalOfferRoundedIcon />,
  likes: <FavoriteIcon />,
  burn: <LocalFireDepartmentIcon />,
  followings: <DoneIcon />,
  default: <LocalOfferRoundedIcon />,
};

const getIcon = (type) => {
  return eventTypeIcons[type] || eventTypeIcons["default"];
};

const ActivityItem = ({ itemData }) => {
  return (
    <Wrapper>
      <LeftX>
        <img src={itemData.cardImg} alt="" />
        <IconHolderX>{getIcon(itemData.eventType)}</IconHolderX>
      </LeftX>

      <RightX>
        <h4>{itemData.info.description}</h4>
        <TransactionInfoX>
          <span>{itemData.info.prefixInfo}</span>
          <div>
            <img src={itemData.info.user.avatar} alt="" />
            <span>{itemData.info.user.name}</span>
          </div>
          <span>{itemData.info.suffixInfo}</span>
        </TransactionInfoX>
        <p>{itemData.date}</p>
      </RightX>
    </Wrapper>
  );
};

const TransactionInfoX = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-size: 1.4rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
      color: var(--color-black);
      font-weight: 600;
    }
  }

  img {
    height: 15px;
    border-radius: 50%;
  }
`;

const RightX = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: space-between;

  h4 {
    font-size: 2rem;
  }

  & > p {
    font-size: 1.4rem;
  }
`;

const IconHolderX = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.5rem;
  transform: translate(-50%, -50%);

  background: var(--test-g);
  border-radius: 50%;

  svg {
    color: var(--color-white);
    width: 1.2rem;
    height: 1.2rem;
  }

  display: flex;
`;

const LeftX = styled.div`
  position: relative;
  height: 100%;
  /* overflow: hidden; */

  img {
    height: 100%;
    border-radius: 1rem;
  }
`;

const Wrapper = styled.div`
  padding: 2rem;
  height: 120px;

  border: 1px solid var(--color-grey20);
  border-radius: 1rem;
  overflow: hidden;

  display: flex;
  gap: 2rem;
`;

export default ActivityItem;
