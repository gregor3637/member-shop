import React from "react";
import styled from "styled-components";

const Tab_Details = ({ currency, details }) => {
  let {
    name,
    dropDate,
    listPrice,
    editionSupply /* eslint-disable-line */,
    edition,
    editionType /* eslint-disable-line */,
    season,
    rarity,
    license,
    brand,
    collection,
    series,
    annotations /* eslint-disable-line */,
  } = details;

  return (
    <Styled>
      <Row>
        <div>Name:</div>
        <div>{name}</div>
      </Row>

      <Row>
        <div>Drop Date:</div>
        <div>{dropDate}</div>
      </Row>

      <Row>
        <div>List Price:</div>
        <div>{listPrice}</div>
      </Row>

      <Row>
        <div>Currency:</div>
        <div>{currency}</div>
      </Row>

      <Row>
        <div>Editions:</div>
        <div>{edition}</div>
      </Row>

      <Row>
        <div>Season</div>
        <div>{season}</div>
      </Row>

      <Row>
        <div>Rarity</div>
        <div>{rarity}</div>
      </Row>

      <Row>
        <div>License:</div>
        <div>{license}</div>
      </Row>

      <Row>
        <div>Brand:</div>
        <div>{brand}</div>
      </Row>

      <Row>
        <div>Series: </div>
        <div>{series}</div>
      </Row>

      <Row>
        <div>Collection: </div>
        <div>{collection}</div>
      </Row>
    </Styled>
  );
};

const Styled = styled.div`
  margin-top: 1rem;
`;

const Row = styled.div`
  display: flex;
  font-size: 2rem;

  margin-bottom: 1rem;

  div:first-of-type {
    width: 30%;
  }
`;

export default Tab_Details;
