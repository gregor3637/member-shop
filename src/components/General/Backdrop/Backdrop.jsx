import React from "react";
import styled from "styled-components";

const Backdrop = (props) => {
  return <Styled onClick={props.onClose} />;
};

const Styled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 990;
  background: rgba(0, 0, 0, 0.75);
`;

export default Backdrop;
