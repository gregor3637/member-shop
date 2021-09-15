import React, { useEffect, useState } from "react";
import styled from "styled-components";

import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";

const HeaderSearch = (props) => {
  const [showClearButton, setShowClearButton] = useState(false);
  const [searchStyle, setSearchStyle] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    setShowClearButton(query ? true : false);
  }, [query]);

  let onFocusHandler = () => {
    setSearchStyle("search--focused");
  };

  let onBlurHandler = () => {
    setSearchStyle("");
  };

  let onChangeHandler = (ev) => {
    setQuery(ev.target.value);
  };

  let onClearInputHandler = (ev) => {
    console.log("clicked clear button");
    ev.preventDefault();
    setQuery("");
  };

  let closeIcon = <CancelOutlinedIcon />;

  return (
    <HeaderSearchStyled className={"search " + searchStyle}>
      <div className={"search " + searchStyle}>
        <div className="search__inner-container">
          <div className="search__icon">
            <SearchOutlinedIcon />
          </div>
          <input
            type="text"
            className="search__input"
            placeholder="Search items, collections and accounts"
            onFocus={onFocusHandler}
            onBlur={onBlurHandler}
            onChange={onChangeHandler}
            value={query}
          />
          {showClearButton && (
            <button className="search__button" onClick={onClearInputHandler}>
              {closeIcon}
            </button>
          )}
        </div>
      </div>
    </HeaderSearchStyled>
  );
};

const HeaderSearchStyled = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;

  .search {
    width: 100%;
    max-width: 70rem;
    flex: 1;
    border: var(--line);
    border-radius: 5px;
    background-color: var(--background-light-color);

    &--focused {
      border: var(--border-primary);
    }

    &__inner-container {
      padding: 0 1rem;
      display: flex;
      align-items: center;
    }

    &__icon {
      svg {
        font-size: 2.5rem;
        display: flex;
      }
    }

    &__input {
      padding-right: 10px;
      flex: 1;
      height: 65%;
      background-color: var(--background-light-color);
      border: none;
      padding: 1rem 1rem;

      font-family: inherit;
      font-size: 1.6rem;
      color: inherit;
      transition: all 0.2s;

      &:focus {
        outline: none;
      }
    }

    &__button {
      z-index: 10;
      border: none;
      cursor: pointer;

      display: flex;

      svg {
        font-size: 3rem;
      }
    }
  }
`;

export default HeaderSearch;
