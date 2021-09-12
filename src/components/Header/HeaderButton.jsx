import React from "react";
import styled from "styled-components";

const HeaderButton = ({ icon, text }) => {
  return (
    <HeaderButtonStyled>
      {icon && icon}
      {text && <span>{text}</span>}
    </HeaderButtonStyled>
  );
};

const HeaderButtonStyled = styled.a`
  min-width: 7rem;
  padding: 0 1rem;
  height: 100%;
  position: relative;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    &::after {
      content: "";
      background-color: orange;
      cursor: pointer;
      display: block;
      height: 2px;
      left: 0px;
      bottom: 0px;
      position: absolute;
      width: 100%;
    }
  }

  svg {
    font-size: 2rem;
    font-size: 3.5rem;
  }
`;
export default HeaderButton;
