import React from "react";
import styled from "styled-components";
import Tooltip from "./Tooltip";

const TooltipSticker = (props) => {
  const vision = { padding: props.padding };

  return (
    <Tooltip content={props.content}>
      <TooltipStickerStyled style={vision}>
        {props.children}
      </TooltipStickerStyled>
    </Tooltip>
  );
};

const TooltipStickerStyled = styled.div`
  border-radius: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: black;
`;

export default TooltipSticker;
