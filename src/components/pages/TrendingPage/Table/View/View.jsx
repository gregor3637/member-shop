import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const View = ({ id, src, collectionName }) => {
  return (
    <Wrapper to={`item/${id}`}>
      <img src={src} alt="nft view" />
      <span>{collectionName}</span>
    </Wrapper>
  );
};

// const Wrapper = styled.div`
const Wrapper = styled(Link)`
  /* background: var(--test-y); */
  height: 100%;
      width: max-content;


  display: flex;
  justify-content: left;
  align-items: center;
  gap: 1rem;

  overflow: hidden;

  text-decoration: inherit;

  img {
    height: 4rem;
    width: 4rem;
    border-radius: 50%;

    object-fit: cover;
  }

  span {
    font-size: 1.6rem;
    font-weight: 600;
  }
`;

export default View;
