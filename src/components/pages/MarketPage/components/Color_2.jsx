import React, { useEffect, useReducer, useRef, useState } from "react";
import styled from "styled-components";

const Color_2 = (props) => {
  const buttonsRef = useRef({
    white: { isClicked: false, btn: null },
    black: { isClicked: false, btn: null },
    brown: { isClicked: false, btn: null },
    navy: { isClicked: true, btn: null },
    blue: { isClicked: true, btn: null },
    yellow: { isClicked: false, btn: null },
  });

  const [clickedButtons, setClickedButtons] = useState([]);

  const toggle = (e) => {
    const color = e.target.dataset.name;
    let isClicked = !buttonsRef.current[color].isClicked;
    buttonsRef.current[color].isClicked = isClicked;

    const remove = (color) => {
      clickedButtons.current.push(color);
    };

    if (isClicked) {
      e.target.classList.add("clicked");
    //   setClickedButtons([c]);
    } else {
      e.target.classList.remove("clicked");
      clickedButtons.current.splice(clickedButtons.current.indexOf(color), 1);
    }

    console.log("clickedButtons.current vvv");
    console.log(clickedButtons.current);
  };

  const displayButtons = Object.entries(buttonsRef.current).map((keyValue) => {
    const [color, data] = keyValue;
    let { isClicked, btn } = data;

    return (
      <div
        key={color}
        className="options"
        data-name={color}
        // ref={(el) => (buttonsRef.current[color]["btn"] = el)}
        ref={(el) => (btn = el)}
        onClick={toggle}
      >
        {color}
      </div>
    );
  });

  const buttonContainer = <Styled>{displayButtons}</Styled>;

  const take = (color) => {
    buttonsRef.current[color].isClicked = false;
    buttonsRef.current[color].btn.classList.remove("clicked");
    clickedButtons.current.splice(clickedButtons.current.indexOf(color), 1);
  };

  console.log("COLOR renderrrrrrr");

  return {
    clicked: clickedButtons.current,
    take,
    component: buttonContainer,
  };
};

const Styled = styled.div`
  background-color: green;

  .options {
    background-color: red;
    display: inline-block;

    padding: 0 2rem;
    margin: 1rem;

    cursor: pointer;
  }

  .clicked {
    background-color: violet;
  }
`;

export default Color_2;
