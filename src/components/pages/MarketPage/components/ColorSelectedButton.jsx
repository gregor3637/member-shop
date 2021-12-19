import React, { useImperativeHandle } from "react";
import styled from "styled-components";

const ColorSelectedButton = React.forwardRef((props, ref) => {
  return (
    <Styled ref={ref} data-name={props.value} onClick={props.onClick}>
      {props.value}
    </Styled>
  );
});

const Styled = styled.div`
  background-color: yellowgreen;
  display: inline-block;

  padding: 0 2rem;
  margin: 1rem;

  cursor: pointer;
`;

export default ColorSelectedButton;
