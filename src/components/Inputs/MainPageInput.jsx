import React from "react";
import styled from "styled-components";

const MainPageInputStyled = styled.input`
  height: 65%;
  padding: 1rem 1rem;

  flex: 1;

  border: 1px solid var(--border-color);
  border-radius: 1rem;

  font-family: inherit;
  font-size: 1.6rem;
  color: inherit;

  transition: all 0.2s;

  &:focus {
    border-color: var(--color-black);
  }
`;

const MainPageInput = (props) => {
  return <MainPageInputStyled {...props} />;
};

export default MainPageInput;
