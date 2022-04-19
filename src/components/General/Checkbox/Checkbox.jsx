import React from "react";
import styled from "styled-components";

const Checkbox = ({ label, className: version, setIsChecked }) => {
  return (
    <Wrapper className={version}>
      <input
        type="checkbox"
        onChange={(ev) => setIsChecked(ev.target.checked)}
      />
      <span>{label}</span>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
  }

  input {
    appearance: none;
    -webkit-appearance: none;

    height: 18px;
    width: 18px;

    border: 1px solid var(--button-color-blue);
    border-radius: 4px;

    display: flex;
    align-items: center;
    justify-content: center;

    &:checked {
      background: var(--button-color-blue);

      &:before {
        transform: scale(1);
      }
    }

    &:before {
      content: "";
      width: 0.65em;
      height: 0.65em;
      clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
      transform: scale(0);
      background-color: var(--color-white);
    }
  }
`;

export default Checkbox;
