import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const category = ["innerwear", "dress", "robe", "pajamas", "sweater"];
const material = ["modal", "cotton", "spandex", "tencel", "rayon"];

const Color = (props) => {
  const buttonsRef = useRef({
    white: { isClicked: false, btn: null },
    black: { isClicked: false, btn: null },
    brown: { isClicked: false, btn: null },
    navy: { isClicked: false, btn: null },
    blue: { isClicked: false, btn: null },
    yellow: { isClicked: false, btn: null },
  });

  //   const [buttons, setButtons] = useState({});

  //------------------
  //------------------
  //------------------

  const onColorHandle = (e) => {
    const name = e.target.dataset.name;

    const isClicked = !buttonsRef.current[name].isClicked;
    buttonsRef.current[name].isClicked = isClicked;

    if (isClicked) {
      e.target.classList.add("clicked");
    } else {
      e.target.classList.remove("clicked");
    }

    // setButtons(filtered);
    props.update(buttonsRef);
  };

  //   const onActiveFilterButtonHandle = (e, btn) => {
  //     btn.classList.remove("clicked");

  //     const name = e.target.dataset.name;
  //     const group = e.target.dataset.group;

  //     const returnedTarget = Object.assign({}, buttons);
  //     delete returnedTarget[name];

  //     setButtons(returnedTarget);
  //     buttonsRef.current[name].isClicked = false;
  //   };

  //------------------
  //------------------
  //------------------

  const colorsButtons = Object.keys(buttonsRef.current).map((colorName) => {
    const btn = (
      <div
        key={colorName}
        className="color"
        data-name={colorName}
        onClick={onColorHandle}
        ref={(el) => (buttonsRef.current[colorName]["btn"] = el)}
      >
        {colorName}
      </div>
    );
    return btn;
  });

  //   const toggledButtons = Object.entries(buttons).map((keyValue) => {
  //     const [color, data] = keyValue;
  //     const { isClicked, btn } = data;

  //     return (
  //       <div
  //         key={color}
  //         className="selected"
  //         data-name={color}
  //         onClick={(e) => {
  //           onActiveFilterButtonHandle(e, btn);
  //         }}
  //       >
  //         {color}
  //       </div>
  //     );
  //   });

  //------------------
  //------------------
  //------------------

  return (
    <Styled>
      {/* <div> {toggledButtons}</div> */}
      {colorsButtons}
    </Styled>
  );
};

const Styled = styled.div`
  background-color: green;

  font-size: var(--fontSize-navigation);

  .color {
    background-color: red;
    display: inline-block;

    padding: 0 2rem;
    margin: 1rem;

    cursor: pointer;
  }

  .selected {
    background-color: violet;
    display: inline-block;

    padding: 0 2rem;
    margin: 1rem;

    cursor: pointer;
  }

  .clicked {
    background-color: pink;
  }
`;

export default Color;
