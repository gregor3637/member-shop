import React, { useEffect, useReducer, useRef, useState } from "react";
import styled from "styled-components";

import useInit from "../../../../hooks/useInit";
import ColorButton from "./ColorButton";
import ColorSelectedButton from "./ColorSelectedButton";

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.value];

    case "remove":
      const index = state.indexOf(action.value);
      if (index > -1) {
        return [...state.slice(0, index), ...state.slice(index + 1)];
      }
      return state;

    default:
      return state;
  }
};

const Color_5 = ({
  dispatchPickedInfo,
  dispatchingKey,
  setElements,
  options,
}) => {
  const [selected, dispatch] = useReducer(reducer, []);
  const [optionButtons, setOptionButtons] = useState([]);
  const btnDataRef = useRef({});

  useEffect(() => {
    const component = (
      <>
        {selected.map((chain, i) => {
          return (
            <ColorSelectedButton
              key={i}
              value={chain}
              onClick={(ev) => {
                const chainBtnValue = ev.target.dataset.name;
                const index = selected.indexOf(chainBtnValue);

                btnDataRef.current[chainBtnValue].classList.toggle("clicked");

                if (index > -1) {
                  removeSelected(chain);
                }
              }}
            />
          );
        })}
      </>
    );

    dispatchPickedInfo({
      type: dispatchingKey,
      selected: selected,
    });

    setElements(component);
  }, [dispatchPickedInfo, setElements, dispatchingKey, selected]);

  const addSelected = (value) => {
    dispatch({ type: "add", chain: value, value });
  };

  const removeSelected = (value) => {
    dispatch({ type: "remove", chain: value, value: value, test: "dadsa" });
  };

  const initializeButtons = (btnOptionsMap) => {
    //initilialize object where we link displayed buttons
    options.forEach((value) => {
      btnDataRef.current[value] = null;
    });

    //create and link displayed buttons
    const displayedOptionButtons = Object.entries(btnOptionsMap).map(
      (keyValue) => {
        const [chain, btnRef] = keyValue;

        return (
          <ColorButton
            key={chain}
            color={chain}
            addColor={addSelected}
            removeColor={removeSelected}
            ref={(el) => (btnDataRef.current[chain] = el)}
          />
        );
      }
    );

    setOptionButtons(displayedOptionButtons);
  };

  useInit(initializeButtons, btnDataRef.current);

  return <Styled>{optionButtons}</Styled>;
};

const Styled = styled.div`
  background-color: green;
`;

export default Color_5;
