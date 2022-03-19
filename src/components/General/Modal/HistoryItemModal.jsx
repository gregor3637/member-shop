import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import Backdrop from "../Backdrop/Backdrop";
import Share from "./Share";

const HistoryItemModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Wrapper className="ooooooooooooooooooo">
          <div>testtttttttttttttt</div>
          <div>testtttttttttttttt</div>
          <div>testtttttttttttttt</div>
          <div>testtttttttttttttt</div>
          <div>testtttttttttttttt</div>
          <div>testtttttttttttttt</div>
          <div>testtttttttttttttt</div>
          <div>testtttttttttttttt</div>
        </Wrapper>,
        document.getElementById("overlay-info")
      )}
    </>
  );
};

const Wrapper = styled.div`
  position: absolute;
  padding: 2rem 2rem;
  top: 50%;
  right: 50%;
  width: 100%;
  height: 100%;
  z-index: 999;
  transform: translate(50%, -50%);
  background: var(--color-black);
  opacity: 50%;
`;

export default HistoryItemModal;
