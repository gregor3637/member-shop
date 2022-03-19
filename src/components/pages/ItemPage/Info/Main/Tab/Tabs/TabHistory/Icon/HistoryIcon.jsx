import React from "react";

import PanToolOutlinedIcon from "@mui/icons-material/PanToolOutlined";
import SwapHorizOutlinedIcon from "@mui/icons-material/SwapHorizOutlined";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import ChildFriendlyRoundedIcon from "@mui/icons-material/ChildFriendlyRounded";
import DirectionsIcon from "@mui/icons-material/Directions";
import DirectionsOffRoundedIcon from "@mui/icons-material/DirectionsOffRounded";

const map = {
  mint: <ChildFriendlyRoundedIcon />,
  transfer: <SwapHorizOutlinedIcon />,
  list: <PanToolOutlinedIcon />,
  sale: <CurrencyExchangeIcon />,
  bid: <DirectionsIcon />,
  bidCancel: <DirectionsOffRoundedIcon />,
};

const HistoryIcon = ({ historyEvent }) => {
  return (
    <span style={{ display: "flex", transform: "scale(1.4)" }}>
      {map["bid"]}
    </span>
  );
};

export default HistoryIcon;
