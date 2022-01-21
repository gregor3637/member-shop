import React from "react";
import styled from "styled-components";

const LoadingSpinner = (props) => {
  return <Styled className={props.className} />;
};

const Styled = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 6px solid teal;
    border-color: teal transparent teal transparent;
    animation: spinner 1.2s linear infinite;
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default LoadingSpinner;
