import React from "react";
import styled from "styled-components";

import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import CloseIcon from "@material-ui/icons/Close";
import LoadingSpinner from "../../../../General/LoadingSpinner/LoadingSpinner";

const InputSearch = ({
  inputVal,
  onInput,
  onClear,
  placeholder,
  isLoading,
}) => {
  return (
    <Wrapper className={"search "}>
      <ContainerX>
        <PrefixIconWrapperX>
          {!isLoading ? <SearchOutlinedIcon /> : <LoadingSpinnerX />}
        </PrefixIconWrapperX>
        <InputX
          type="text"
          placeholder={placeholder || "Search"}
          onChange={onInput}
          value={inputVal}
        />
        {!!inputVal && (
          <ButtonClear onClick={onClear}>
            <CloseIcon />
          </ButtonClear>
        )}
      </ContainerX>
    </Wrapper>
  );
};

const PrefixIconWrapperX = styled.div`
  flex-shrink: 0;

  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 2.5rem;
  }
`;

const LoadingSpinnerX = styled(LoadingSpinner)`
  width: 100%;
  height: 100%;

  &:after {
    content: " ";
    width: 18px;
    height: 18px;
    border: 2px solid teal;
    border-color: teal transparent teal transparent;
  }
`;

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
  padding-right: 3.8rem;
  flex: 1;

  background-color: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--market-itemsWrapper-header-elements-border-radius);

  display: flex;
  align-items: center;
  justify-content: start;
`;

const ButtonClear = styled.button`
  position: absolute;
  right: 1rem;

  z-index: 10;
  border: none;
  cursor: pointer;

  display: flex;
  background-color: var(--color-white);

  svg {
    font-size: 2.6rem;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
`;

export default InputSearch;
