import React, { useState } from "react";
import styled from "styled-components";
import Tippy from "@tippyjs/react";

const DropDown = (props) => {
  return (
    <TippyX
      onCreate={props.setInstance}
      content={props.content}
      // onCreate={setInstance}
      arrow={false}
      interactive
      // appendTo="parent"
      placement="bottom-end"
      // showOnInit={true}
      trigger="click"
      hideOnClick={props.hideOnClick !== undefined ? props.hideOnClick : true}
    >
      {props.children}
    </TippyX>
  );
};

const TippyX = styled(Tippy)`
  height: 50vh;
  overflow: scroll;
  background-color: var(--color-white);
  background-color: red;
  min-width: 20rem;
  z-index: 500;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  border-radius: 1rem;
  /* border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem; */
  overflow: hidden;

  .tippy-content {
    padding: 0;
    overflow: scroll;
  }
`;
export default DropDown;
