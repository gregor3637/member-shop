import React from "react";
import styled from "styled-components";

const Backdrop = ({ onClose }) => {
  return <Styled onClick={onClose} />;
};

const Styled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* width: 500px;
  height: 100vh; */
  z-index: 990;
  background: rgba(0, 0, 0, 0.75);
`;

export default Backdrop;
