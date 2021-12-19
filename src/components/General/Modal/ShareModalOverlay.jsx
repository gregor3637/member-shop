import React from "react";
import ReactDOM from "react-dom";
import Backdrop from "../Backdrop/Backdrop";
import Share from "./Share";

const ShareModalOverlay = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Share  onClose={props.onClose}/>,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ShareModalOverlay;
