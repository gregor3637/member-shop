import React from "react";
import styled from "styled-components";

import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import CloseIcon from "@material-ui/icons/Close";

const Input = ({ inputVal, handleInput, className }) => {
  return (
    <Styled className={className}>
      <input
        value={inputVal}
        type="text"
        placeholder="Search"
        onInput={(ev) => handleInput(ev.target.value)}
      />
      <IconsDivX>
        {!inputVal && <SearchOutlinedIcon />}
        {inputVal && (
          <div onClick={() => handleInput("")}>
            <CloseIcon />
          </div>
        )}
      </IconsDivX>
    </Styled>
  );
};

const IconsDivX = styled.div`
  height: 100%;
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 2.6rem;
  }

  & > div {
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Styled = styled.div`
  position: relative;

  input {
    width: 100%;
    padding: 0.4rem 4rem 0.4rem 1.2rem;
    border-radius: 1.5rem;

    background-color: var(--background-search);
    border: none;
    outline: 0;

    &:hover,
    &:focus {
      background-color: var(--background-search-focused);
    }
  }
`;

export default Input;
