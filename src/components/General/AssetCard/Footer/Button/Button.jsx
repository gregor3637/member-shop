import React from "react";
import styled from "styled-components";

const Button = ({ label, isDisabled = false }) => {
  return (
    <Wrapper disabled={isDisabled}>
      <span>{label}</span>
    </Wrapper>
  );
};

const Wrapper = styled.button`
  width: 115px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;
  text-transform: uppercase;
  color: white;

  outline: none;
  border: none;
  border-radius: 1.8rem;

  cursor: pointer;
  background-size: 200% auto;
  background-color: #4158d0;
  background-image: linear-gradient(
    43deg,
    #4158d0 0%,
    #c850c0 46%,
    #ffcc70 100%
  );

  span {
    font-size: 1.4rem;
    font-weight: 500;
  }

  &:disabled {
    background-color: #4158d0;
    background-image: linear-gradient(43deg, #9d9d9d 0%, #ffffff 100%);
  }
`;

export default Button;
