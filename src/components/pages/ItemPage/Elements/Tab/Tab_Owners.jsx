import React from "react";
import styled from "styled-components";

const Tab_Owners = ({ owners }) => {
  let row = owners.map((entry, idx) => {
    return (
      <RowX key={idx}>
        <PositionX>#{idx + 1}</PositionX>

        <img src={entry.user.avatar} alt="" />
        <UserInfoX>
          <a href="user.profile">{entry.user.name}</a>
          <PurchaseInfoX>
            date :<b>{entry.dateOfOwnership}</b>
            price :
            <b>
              {entry.value} {entry.currency}{" "}
            </b>
          </PurchaseInfoX>
        </UserInfoX>

        <ButtonContainerX>
          <button>Bid</button>
          <button>Buy</button>
        </ButtonContainerX>
      </RowX>
    );
  });

  return <Styled>{row}</Styled>;
};

const PurchaseInfoX = styled.div`
  display: flex;

  b {
    margin-right: 1rem;
  }
`;

const UserInfoX = styled.div`
  a {
    font-size: 2rem;
  }
`;
//------------------------------------

const RowX = styled.div`
  height: 4.4rem;
  display: flex;
  align-items: center;

  margin: 2.4rem 0;

  img {
    height: 100%;
    border-radius: 50%;
    margin-right: 1.5rem;

    border: 1px solid var(--color-border);

    object-fit: cover;
  }
`;

const PositionX = styled.div`
  height: 4.4rem;
  width: 4.4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  /* border-radius: 1rem;
  border: 1px solid var(--color-border);
  background-color: var(--color-white); */

  font-size: 1.4rem;
`;

const ButtonContainerX = styled.div`
  margin-left: auto;

  button {
    /* padding: 1rem 3rem; */
    position: relative;
    height: 4.4rem;
    width: 8rem;

    border: none;
    border-radius: 2.5rem;

    background-color: #0066ff;
    color: var(--color-white);

    font-weight: 600;
    font-size: 1.6rem;
    cursor: pointer;

    &:first-of-type {
      margin-right: 1rem;
      background-color: #d9e8ff;
      color: #0066ff;
    }

    &:after {
      content: "........";
      color: var(--color-black);
      width: 50%;
      position: absolute;
      left: 25%;
      bottom: -2rem;
    }
  }
`;

const Styled = styled.div`
  ${RowX}:last-child {
    ${ButtonContainerX} button:after {
      content: none;
    }
  }
`;
export default Tab_Owners;
