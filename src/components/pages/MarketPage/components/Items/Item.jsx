import React from "react";
import styled from "styled-components";

import Img from "../../../../../img/test/MarketItem.jpg";

const Item = (props) => {
  return (
    <Styled className={props.className}>
      <img src={Img} alt="" />
    </Styled>
  );
};

const Styled = styled.div`
  /* background-color: green; */

  max-width: 100%;
  padding: 1rem 2rem;

  display: flex:
  justify-content: center;
  align-items: center;
  /* margin: auto; */

  img {
      object-fit: cover;
    /* height: auto; */
    width: 100%;
  }
`;

export default Item;
