import React from "react";

// import EtherLogo from "../../../../../img/svg/EthWhite.svg";
// import Ethereum from "../../../../../img/svg/GreyCurrencies/Ethereum.jsx";
import Polygon from "../../../../../img/svg/GreyCurrencies/Polygon.jsx";
import Solana from "../../../../../img/svg/GreyCurrencies/SolanaSmall.jsx";
import EtherGrey from "../CurrencyView/Eth/EthGrey";

const icons = {
  Ethereum: <EtherGrey />,
  Polygon: <Polygon />,
  Solana: <Solana />,
};

//TODO: rename this to 'BlockchainView
const BlockchainView = ({ blockchain }) => {
  return icons[blockchain] || null;
};

export default BlockchainView;
