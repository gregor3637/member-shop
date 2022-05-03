import React from "react";
import styled from "styled-components";

const MainPageInput = (props) => {
  return <MainPageInputX {...props} />;
};

const MainPageInputX = styled.input`
  height: 65%;
  padding: 1rem 1.4rem;

  flex: 1;

  border: 1px solid var(--color-grey20);
  border-radius: 9999px;

  font-family: inherit;
  font-size: 1.6rem;
  color: inherit;

  transition: all 0.2s;

  &:focus {
    border-color: var(--color-grey50);

    outline: none;
  }
`;
export default MainPageInput;
