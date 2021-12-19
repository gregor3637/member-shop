import React from "react";
import ReactDOM from "react-dom";
import Backdrop from "../../Backdrop/Backdrop";
import ReportPopup from "./ReportPopup";

const ReportModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ReportPopup onClose={props.onClose} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ReportModal;
