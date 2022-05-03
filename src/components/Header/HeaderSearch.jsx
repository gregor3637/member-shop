import React, { useEffect, useState } from "react";
import styled from "styled-components";

import MainPageInput from "../Inputs/MainPageInput";

import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";

const HeaderSearch = (props) => {
  const [showClearButton, setShowClearButton] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setShowClearButton(query ? true : false);
  }, [query]);

  let onFocusHandler = () => {};

  let onBlurHandler = () => {};

  let onChangeHandler = (ev) => {
    setQuery(ev.target.value);
  };

  let onClearInputHandler = (ev) => {
    ev.preventDefault();
    setQuery("");
  };

  let closeIcon = <CancelOutlinedIcon />;

  return (
    <HeaderSearchX className={"search "}>
      <ContainerX>
        <SearchDivX>
          <SearchOutlinedIcon />
        </SearchDivX>
        <MainPageInput
          style={{ paddingLeft: "4rem", paddingRight: "3rem" }}
          type="text"
          placeholder="Search items, collections and accounts"
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          onChange={onChangeHandler}
          value={query}
        />
        {showClearButton && (
          <ButtonClear onClick={onClearInputHandler}>{closeIcon}</ButtonClear>
        )}
      </ContainerX>
    </HeaderSearchX>
  );
};

const ContainerX = styled.div`
  position: relative;
  /* max-width: 700px; */
  flex: 1;

  overflow: hidden;

  display: flex;
  align-items: center;
`;

const SearchDivX = styled.div`
  position: absolute;
  display: flex;

  svg {
    font-size: 2.5rem;
  }

  left: 1.2rem;
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
    font-size: 3rem;
  }
`;

const HeaderSearchX = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
`;

export default HeaderSearch;
