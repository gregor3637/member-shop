import React from "react";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import HistoryEvent from "./HistoryEvent";

const HistoryEventModal = ({ data, onClose }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={onClose} />,
        document.getElementById("backdrop-info")
      )}
      {ReactDOM.createPortal(
        <HistoryEvent onClose={onClose} data={data} />,
        document.getElementById("overlay-info")
      )}
    </>
  );
};

export default HistoryEventModal;
