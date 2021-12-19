import React from "react";
import styled from "styled-components";
import LinkHollow from "../../../../Links/LinkHollow";

const CardDiv = styled.div`
  background-color: ${(props) => props.backgroundColor || "red"};

  height: 70rem;
  border-radius: 1rem;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

const Info = styled.div`
  padding: 0 4rem;
  flex: 1;

  display: flex;
  flex-direction: column;

  color: var(--color-white);

  h6 {
    padding: 2rem 0;
    font-size: 2.2rem;
    font-weight: 600;
  }

  p {
    flex: 1;
    font-size: 1.6rem;
  }

  span {
    font-size: 1.2rem;
    padding-bottom: 2rem;
  }
`;

const Styled = styled.div`
  flex: 1;
  text-align: center;

  h4 {
    font-size: 2rem;
    padding-bottom: 1rem;
  }
`;

const ModifiedLink = styled(LinkHollow)`
  padding: 1rem 1.5rem;
  margin-bottom: 2rem;

  align-self: center;

  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-white);
  border-color: var(--color-white);

  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    color: var(--color-black);
    background-color: var(--color-white);
  }
`;

const CardItem = ({ cardInfo }) => {
  return (
    <Styled>
      <h4>{cardInfo.sectionName}</h4>
      <CardDiv backgroundColor={cardInfo.backgroundColor}>
        <img src={cardInfo.img} alt="" />
        <Info>
          <h6>{cardInfo.cardTitle}</h6>
          <p>{cardInfo.cardDescription}</p>
          <ModifiedLink style={{ marginRight: "1rem" }}>
            Find out more
          </ModifiedLink>
        </Info>
      </CardDiv>
    </Styled>
  );
};

export default CardItem;
