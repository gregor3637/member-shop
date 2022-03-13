import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ItemBid = ({ className, user, time, value, currency }) => {
  let passedTime = time;
  const { name, avatar } = user;

  return (
    <Wrapper className={className}>
      <img src={avatar} alt="" />
      <span>
        <Link to={`user/${name}`}>{name}</Link>
      </span>
      <PriceX>
        {value} {currency}
      </PriceX>

      <TimeX>
        <span>At: {passedTime} </span>
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
  /* background: var(--test-r); */
  /* height: 4rem; */
  /* padding-bottom: 2rem; */
  /* padding: 1rem 0; */
  z-index: 1;
  margin-top: 1.1rem;
  /* border-bottom: 1px solid black; */

  flex: 1;

  display: grid;
  grid-template-columns: min-content 1fr max-content;
  grid-template-rows: 1fr min-content;
  align-items: center;
  position: relative;

  /* border-radius: 1rem; */

  a {
    color: inherit;
    text-decoration: inherit;
  }

  img {
    grid-column: 1 / span 1;
    grid-row: 1 / span 2;
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;

    border-radius: 50%;
  }

  &:before {
    content: "";
    width: 0.6rem;
    height: 0.6rem;
    position: absolute;
    left: -2.1rem;
    top: calc(50% -4rem);
    top: 50%;
    z-index: 5;

    background-color: black;
    border: 1px solid #000000;
    border-radius: 50%;
  }
`;

export default ItemBid;
