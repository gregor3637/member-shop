import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import useInit from "../../../../hooks/useInit";
import ColorButton from "./ColorButton";
import ColorSelectedButton from "./ColorSelectedButton";

const Color_4 = ({
  setPickedColors,
  pickedColorsButtonContainerRef,
  debugValue,
}) => {
  const btnDataRef = useRef({
    colors: {
      black: null,
      red: null,
      green: null,
      brown: null,
      white: null,
      pink: null,
    },
    // activeButtons: [],
  });

  const [selected, setSelected] = useState([]);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    console.log(debugValue + " ++UseEffect RUN vvv");
    console.log(selected);

    const component = (
      <>
        {selected.map((colorValue, i) => {
          return (
            <ColorSelectedButton
              key={i}
              color={colorValue}
              onClick={(ev) => {
                const colorValue = ev.target.dataset.name;
                const index = selected.indexOf(colorValue);

                console.log(debugValue + " removeActiveButton vvv");
                console.log(debugValue + " index = " + index);
                // console.log(btnDataRef.current.colors[colorValue]);
                console.log(btnDataRef.current.colors);

                btnDataRef.current.colors[colorValue].classList.toggle(
                  "clicked"
                );

                if (index > -1) {
                  setSelected((pr) => {
                    pr.splice(index, 1);
                    return pr;
                  });
                  // setSelected((pr) => [
                  //   ...pr.slice(0, index),
                  //   ...pr.slice(index + 1),
                  // ]);
                }
              }}
            />
          );
        })}
      </>
    );

    console.log(debugValue + " selected vvv");
    console.log(selected);
    pickedColorsButtonContainerRef.current = <>{component}</>;

    setPickedColors(selected);
  }, [setPickedColors, selected, pickedColorsButtonContainerRef]);

  const initializeButtonsRef = (buttonCollorMap) => {
    const toggle = (ev, selectedArr) => {
      const value = ev.target.dataset.name;

      const index = selectedArr.indexOf(value);

      console.log(debugValue + " toggle selected buttons vv");
      console.log(value);
      console.log(index);
      console.log(selectedArr);

      if (index > -1) {
        console.log(debugValue + " REMOVING from selected array");
        // setSelected((pr) => [...pr.slice(0, index), ...pr.slice(index + 1)]);
        setSelected((pr) => {
          pr.splice(index, 1);
          console.log('prev');
          console.log(pr);
          return pr;
        });
        // btnDataRef.current.activeButtons.splice(index, 1);
      } else {
        console.log(debugValue + " ADDING to selected array");
        setSelected((pr) => {
          pr.push(value);
          pr.push(value);
          console.log('prev');
          console.log(pr);
          return pr;
        });
        // btnDataRef.current.activeButtons.push(value);
      }

      ev.target.classList.toggle("clicked");
    };

    console.log(debugValue + " ????? initializeButtonsRef");
    const buttons = Object.entries(buttonCollorMap).map((keyValue) => {
      const [color, btnRef] = keyValue;
      console.log();

      return (
        <ColorButton
          key={color}
          color={color}
          ref={(el) => (btnDataRef.current.colors[color] = el)}
          onClick={(ev) => toggle(ev, selected)}
        />
      );
    });

    setOptions(buttons);
  };

  useInit(initializeButtonsRef, btnDataRef.current.colors);

  return <Styled>{options}</Styled>;
};

const Styled = styled.div`
  background-color: green;

  .option {
    background-color: yellowgreen;
    display: inline-block;

    padding: 0 2rem;
    margin: 1rem;

    cursor: pointer;
  }
`;

export default Color_4;
