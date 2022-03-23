import React from "react";

// import EtherLogo from "../../../../../img/svg/EthWhite.svg";
import Ethereum from "../../../../../img/svg/GreyCurrencies/Ethereum.jsx";
import Polygon from "../../../../../img/svg/GreyCurrencies/Polygon.jsx";

const currencyImages = {
  ETH: <Ethereum />,
  WETH: <Ethereum />,
  MATIC: <Polygon />,
};

//TODO: rename this to 'CurrencyIcon
const CurrencyIcon = ({ currency }) => {
  if (currency === "") {
    return null;
  }

  return currencyImages[currency] || null;
};

export default CurrencyIcon;
