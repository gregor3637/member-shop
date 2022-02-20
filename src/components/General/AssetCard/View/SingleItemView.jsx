import React from "react";
import styled from "styled-components";

const SingleItemView = (props) => {
  return (
    <Wrapper>
      <img src={props.data.src} alt="avatar" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;

    border-radius: 2rem;
    object-fit: cover;
  }
`;

export default SingleItemView;
