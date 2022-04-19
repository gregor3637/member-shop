import React from "react";
import ReactDOM from "react-dom";

import Backdrop from "../../Backdrop/Backdrop";
import AssetCardAction from "./AssetCardAction";
import Buy from "./Buy";

const BuyModal = ({ onClose, itemData }) => {
  const mainContent = <Buy onClose={onClose} itemData={itemData} />;
  const footer = (
    <span>
      Please review your order carefully as payments cannot be cancelled,
      recalled or refunded
    </span>
  );
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <AssetCardAction
          onClose={onClose}
          label="Checkout"
          mainContent={mainContent}
          footer={footer}
        >
          <Buy onClose={onClose} itemData={itemData} />
        </AssetCardAction>,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default BuyModal;
