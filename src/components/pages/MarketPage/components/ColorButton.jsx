import React, { useImperativeHandle } from "react";
import styled from "styled-components";

const ColorButton = (props, ref) => {
  const onClickHandler = (ev) => {
    let isActive = ev.target.classList.contains("clicked");
    ev.target.classList.toggle("clicked");

    if (isActive) {
      props.removeColor(props.color);
    } else {
      props.addColor(props.color);
    }
  };

  return (
    <Styled ref={ref} data-name={props.color} onClick={onClickHandler}>
      {props.color}
    </Styled>
  );
};

const Styled = styled.div`
  background-color: red;
  display: inline-block;

  padding: 0 2rem;
  margin: 1rem;

  cursor: pointer;

  &.clicked {
    background-color: violet;
  }
`;

export default React.forwardRef(ColorButton);
