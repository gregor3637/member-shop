import React from "react";
import styled from "styled-components";
import Tooltip from "./Tooltip";

const TooltipSticker = (props) => {
  const vision = { padding: props.padding };

  return (
    <Tooltip content={props.content}>
      <Wrapper style={vision}>{props.children}</Wrapper>
    </Tooltip>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border-radius: 1rem;
  /* background-color: var(--color-white); */

  &:hover .toggle {
    background-color: var(--color-border);
  }
`;

export default TooltipSticker;
