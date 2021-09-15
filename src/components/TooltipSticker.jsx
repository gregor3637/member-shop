import React from "react";
import styled from "styled-components";
import Tooltip from "./Tooltip";

const TooltipSticker = (props) => {
  return (
    <Tooltip content={props.message}>
      <TooltipStickerStyled>{props.children}</TooltipStickerStyled>
    </Tooltip>
  );
};

const TooltipStickerStyled = styled.div`
  cursor: pointer;

  background-color: black;
  padding: 1rem;
  border-radius: 1rem;
  color: white;
`;

export default TooltipSticker;
