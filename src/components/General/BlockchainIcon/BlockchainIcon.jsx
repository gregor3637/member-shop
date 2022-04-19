import React from "react";

import EthereumImg from "../../../img/currency/Ether.png";
import KlaytnImg from "../../../img/currency/klaytn.png";
import PolygonImg from "../../../img/currency/polygon.svg";

const chainsData = {
  Ethereum: <img src={EthereumImg} alt="" />,
  Polygon: <img src={PolygonImg} alt="" />,
  Klaytn: <img src={KlaytnImg} alt="" />,
};

const BlockchainIcon = ({ name }) => {
  if (chainsData[name] === undefined) {
    throw new Error("No such blockchain icon");
  }

  return chainsData[name];
};

export default BlockchainIcon;
