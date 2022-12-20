import React from "react";
import styled from "styled-components";

import LoadingSpinner from "../../../../General/LoadingSpinner/LoadingSpinner";

const InputTextField = ({
  className: version,
  inputVal,
  id,
  name,
  type,
  onChange = () => {},
  onClear,
  placeholder,
  isLoading,
}) => {
  return (
    <Wrapper className={`search ${version}`}>
      <ContainerX>
        <InputX
          id={id}
          type={type}
          name={name}
          placeholder={placeholder || ""}
          onChange={onChange}
          value={inputVal}
        />
      </ContainerX>
    </Wrapper>
  );
};



const InputX = styled.input`
  height: 3.6rem;
  width: 100%;

  border: none;

  font-family: inherit;
  font-size: 1.6rem;
  color: inherit;
  outline: none;
  transition: all 0.2s;

  &:focus {
    border-color: var(--color-black);
  }
`;

const ContainerX = styled.div`
  position: relative;
  width: 100%;
  padding: 0 1.2rem;
  flex: 1;

  background-color: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--market-itemsWrapper-header-elements-border-radius);

  display: flex;
  align-items: center;
  justify-content: start;
`;


const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export default InputTextField;
