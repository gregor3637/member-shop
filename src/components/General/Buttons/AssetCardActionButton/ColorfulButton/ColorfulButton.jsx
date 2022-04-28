import React from "react";
import styled from "styled-components";

const ColorfulButton = ({ label, isDisabled, onClick, className: version }) => {
  return (
    <Wrapper className={version} disabled={isDisabled} onClick={onClick}>
      {label}
    </Wrapper>
  );
};

// const Wrapper = styled(AssetCardActionButton)`
//   color: var(--color-white);
//   text-transform: uppercase;

//   background-size: 200% auto;
//   background-color: #4158d0;
//   background-image: linear-gradient(
//     43deg,
//     #4158d0 0%,
//     #c850c0 46%,
//     #ffcc70 100%
//   );

//   &:disabled {
//     background-color: #4158d0;
//     background-image: linear-gradient(43deg, #9d9d9d 0%, #ffffff 100%);
//   }
// `;
const Wrapper = styled.button`
  width: 100%;

  border-radius: var(--action-button--border-radius);
  padding: 0.5rem 1rem;

  border: none;
  background-color: var(--color-blue);
  color: var(--color-white);
  cursor: pointer;

  &:hover {
    background: var(--action-button--background--hover);
  }

  &:disabled {
    background-color: var(--color-grey20);
    color: var(--color-grey50);
    cursor: auto;
  }
`;

export default ColorfulButton;
