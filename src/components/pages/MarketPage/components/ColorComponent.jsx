import { update } from "lodash";
import React, { useRef, useState } from "react";
import ColorButton from "./ColorButton";

const ColorComponent = (updateFunc) => {
  console.log("START Child");
  const btnDataRef = useRef({
    colors: {
      black: null,
      red: null,
      green: null,
      brown: null,
      white: null,
      pink: null,
    },
    activeButtons: [],
  });

  const toggle = (ev) => {
    const value = ev.target.dataset.name;

    const index = btnDataRef.current.activeButtons.indexOf(value);

    if (index > -1) {
      btnDataRef.current.activeButtons.splice(index, 1);
    } else {
      btnDataRef.current.activeButtons.push(value);
    }

    console.log("t activeButtons vv");
    console.log(btnDataRef.current.activeButtons);

    ev.target.classList.toggle("clicked");


    // updateFunc((old) => old + 1);
  };

  const restoreButtonInitialStyle = (color) => {
    const index = btnDataRef.current.indexOf(color);
    btnDataRef.current.activeButtons.splice(index, 1);

    btnDataRef.current.colors[color].removeStyle();
  };

  const component = (
    <>
      {Object.entries(btnDataRef.current.colors).map((keyValue) => {
        const [color, btnRef] = keyValue;

        return (
          <ColorButton
            key={color}
            color={color}
            ref={btnRef}
            // ref={(el) => (buttonsRef.current[colorName]["btn"] = el)}
            onClick={toggle}
          />
        );
      })}
    </>
  );

  return [
    btnDataRef.current.activeButtons,
    component,
    restoreButtonInitialStyle,
  ];
};

export default ColorComponent;
