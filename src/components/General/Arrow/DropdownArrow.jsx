import React from "react";
import styled from "styled-components";

const DropdownArrow = ({ isOpen, className }) => {
  let cls = !isOpen ? className : "open-dropdown " + className;
  return <Styled className={cls} />;
};

const Styled = styled.div`
  /* width: 1rem; */
  height: 1rem;
  position: relative;

  &:before,
  &:after {
    position: absolute;
    left: 0;
    content: "";

    width: 2px;
    height: 10px;
    transition: 0.3s ease;

    display: inline-block;
    border-bottom: 10px solid var(--color-black);
  }

  &:before {
    transform: rotate(-135deg);
  }

  &:after {
    transform: rotate(135deg);
    left: -6px;
  }

  &.open-dropdown {
    transform: rotate(0);

    &:before {
      transform: rotate(-45deg);
    }
    &:after {
      transform: rotate(45deg);
    }
  }
`;

export default DropdownArrow;
