import React, { useRef } from "react";
// import styled from "styled-components";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

// const Tooltip = (props) => {
//   return (
//     <Tippy content={<span>Tooltip</span>}>
//       {props.children}
//     </Tippy>
//   );
// };
// const Tooltip = (props) => {
//   return (
//     <Tippy interactive={true} content="Tooltiptt" interactiveBorder={20}>
//       {props.children}
//     </Tippy>
//   );
// };
const Tooltip = (props) => {
  const ref = useRef();
  return (
    <>
      <div ref={ref}>{props.children}</div>
      {/* <a href="https://google.com" ref={ref}>das</a> */}
      <Tippy interactive={true} content={props.content} reference={ref} />
    </>
  );
};

// const TooltipStyled = styled.div``;

export default Tooltip;
