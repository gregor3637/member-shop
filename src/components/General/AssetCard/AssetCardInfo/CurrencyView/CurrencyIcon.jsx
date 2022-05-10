import React from "react";

// import EtherLogo from "../../../../../img/svg/EthWhite.svg";
// import Ethereum from "../../../../../img/svg/GreyCurrencies/Ethereum.jsx";
import Polygon from "../../../../../img/svg/GreyCurrencies/Polygon.jsx";
import Solana from "../../../../../img/svg/GreyCurrencies/SolanaSmall.jsx";
import USDT from "../../../../../img/svg/GreyCurrencies/USDT.jsx";
import EtherGrey from "./Eth/EthGrey";

const currencyImages = {
  ETH: <EtherGrey />,
  // WETH: <Ethereum />,
  MATIC: <Polygon />,
  SOL: <Solana />,
  USDT: <USDT />,
  BUSD: <USDT />,
};

//TODO: rename this to 'CurrencyIcon
const CurrencyIcon = ({ currency }) => {
  return currencyImages[currency] || null;
};

export default CurrencyIcon;
