import React, { useEffect, useReducer, useRef, useState } from "react";
import styled from "styled-components";
import useInit from "../../../../hooks/useInit";


//uses useStateWithInitMemory
const Color_3 = ({ state, setState, initialState }) => {
  console.log("START Child");
  
  const buttonsRef = useRef([]);

  const initializeButtonsRef = (initValues) => {
    initValues.forEach((val) => {
      const button = (
        <div
          key={val}
          className="options"
          data-name={val}
          ref={(ref) => (buttonsRef.current[val] = ref)}
          onClick={toggle}
        >
          {val}
        </div>
      );

      buttonsRef.current.push(button);
    });
  };

  useInit(initializeButtonsRef, initialState);

  const toggle = (ev) => {
    const value = ev.target.dataset.name;
    let index = state.indexOf(value);

    if (index > -1) {
      setState((pr) => [...pr.slice(0, index), ...pr.slice(index + 1)]);
    } else {
      setState((pr) => [...pr, value]);
    }

    ev.target.classList.toggle("clicked");
  };

  console.log("===========RENDER=============");
  const buttons = initialState.map((val) => {
    return (
      <div key={val} className="options" data-name={val} onClick={toggle}>
        {val}
      </div>
    );
  });

  useEffect(() => {}, [state]);

  return <Styled>{buttons}</Styled>;
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

export default Color_3;
