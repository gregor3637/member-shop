import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const View = ({ id, src, count }) => {
  return (
    <Wrapper to={`itemTest/${id}`}>
      <ImageHolderX>
        <img src={src} alt="nft view" />
      </ImageHolderX>
      {count && <CountX>x {count}</CountX>}
    </Wrapper>
  );
};

const CountX = styled.div`
  margin-top: 0.5rem;
  padding: 0 1.6rem;
  background: var(--color-white);

  border: 1px solid var(--color-border);
  border-radius: var(--market-itemsWrapper-header-elements-border-radius);
  cursor: pointer;
`;

const ImageHolderX = styled.div`
  height: 60px;
  width: 60px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 1rem;

    object-fit: cover;
  }
`;

// const Wrapper = styled.div`
const Wrapper = styled(Link)`
  margin: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  span {
    flex-basis: 30%;
  }
`;

export default View;
