import React from "react";
import ReactDOM from "react-dom";

import Backdrop from "../../Backdrop/Backdrop";
import AssetCardAction from "../Buy/AssetCardAction";
import Bid from "./Bid";

const BidModal = ({ onClose, itemData }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <AssetCardAction
          onClose={onClose}
          label="Bid"
          mainContent={<Bid onClose={onClose} itemData={itemData} />}
        />,

        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default BidModal;
