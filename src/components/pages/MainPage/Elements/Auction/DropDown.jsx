import React, { useRef, useState } from "react";
import styled from "styled-components";

import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Styled = styled.div`
  font-family: var(--font-primary);
  font-weight: 700;
  color: var(--color-pageMain-headings);

  .transition {
    transition: all 0.4s ease-in-out;
  }

  .wrapper {
    font-size: 3rem;
  }

  .list {
    position: relative;

    display: inline-block;
    margin-left: 6px;
  }

  select {
    display: inline;
    border: 0;
    width: auto;
    margin-left: 10px;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    color: $color--primary;
    transition: all 0.4s ease-in-out;

    &:hover {
      cursor: pointer;
    }

    option {
      border: 0;
      padding: 10px;
      -webkit-appearance: none;
      -moz-appearance: none;
    }
  }
  .options {
    font-size: 3rem;
    user-select: none;
    color: var(--color-red-bright);
    cursor: pointer;

    .icon {
      font-size: 2.5rem;
    }

    &:hover {
      filter: brightness(65%);
    }
  }
`;

const DropDown = (props) => {
  const selectorRef = useRef(null);
  const [isMenuShown, setIsMenuShown] = useState(false);

  const doMagic = (ev) => {
    selectorRef.current.style.visibility = "hidden";
    // listRef.current.style.display = isMenuShown ? "none" : "inline";
    setIsMenuShown(!isMenuShown);
  };

  const onCloseOpions = (val) => {
    // selectorRef.current.style.display = "block";
    selectorRef.current.style.visibility = "visible";
    setIsMenuShown(false);
  };

  return (
    <Styled>
      <div className="wrapper">
        Auctions:
        <div className="list" onClick={doMagic}>
          <FontAwesomeIcon
            icon={faCaretDown}
            className="icon"
          ></FontAwesomeIcon>
          <span className="options" ref={selectorRef}>
            All
          </span>
        </div>
      </div>
    </Styled>
  );
};

export default DropDown;
