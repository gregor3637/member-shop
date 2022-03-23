import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ItemBid = ({
  className,
  data: {
    user: { name, avatar },
    time,
    amount,
    currency,
  },
}) => {
  return (
    <Wrapper className={className}>
      <Link to={`user/${name}`}>
        <img src={avatar} alt="" />
      </Link>

      <span>
        <Link to={`user/${name}`}>{name}</Link>
      </span>
      <PriceX>
        {amount} {currency}
      </PriceX>

      <TimeX>
        <span>At: {time} </span>
      </TimeX>
    </Wrapper>
  );
};

const PriceX = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const TimeX = styled.div`
  grid-column: 2 / span 1;
  font-size: 1.2rem;
`;

const Wrapper = styled.div`
  width: 100%;
  z-index: 1;

  flex: 1;

  display: grid;
  grid-template-columns: min-content 1fr max-content;
  grid-template-rows: 1fr min-content;
  align-items: center;
  position: relative;

  span {
    padding-left: 1rem;
    padding-right: 2rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  & > a {
    grid-column: 1 / span 1;
    grid-row: 1 / span 2;

    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    img {
      width: 3rem;
      height: 3rem;

      border-radius: 50%;
    }
  }
`;

export default ItemBid;
