import React from "react";
import styled from "styled-components";
import Tippy from "@tippyjs/react";

const DropDown = (props) => {
  return (
    <TippyX
      content={props.content}
      // onCreate={setInstance}
      arrow={false}
      interactive={true}
      appendTo="parent"
      placement="bottom-start"
      offset={[0, 0]}
      // showOnInit={true}
      // trigger="click"
      hideOnClick
    >
      {props.children}
    </TippyX>
  );
};

const TippyX = styled(Tippy)`
  background-color: var(--color-white);
  min-width: 20rem;
  z-index: 500;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  border-radius: 0;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  overflow: hidden;

  .tippy-content {
    padding: 0;
  }
`;
export default DropDown;
