import React from "react";
import styled from "styled-components";

const AssetCardActionButton = ({
  label,
  className,
  onClick,
  isDisabled = false,
}) => {
  return (
    <Wrapper className={className} disabled={isDisabled} onClick={onClick}>
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
  color: var(--color-black);

  outline: none;
  border: none;
  border-radius: 1.8rem;

  cursor: pointer;
  background-size: 200% auto;
  background-color: var(--color-none);

  span {
    font-size: 1.4rem;
    font-weight: 500;
  }

  &:hover {
    background-color: var(--color-grey20);
  }
`;

export default AssetCardActionButton;
