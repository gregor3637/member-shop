import React from "react";

import EthereumImg from "../../../../../../../img/currency/Ether.png";
import BitcoinImg from "../../../../../../../img/currency/BTC.svg";
import USDTImg from "../../../../../../../img/currency/USDT.svg";

const currencyOptions = {
  ETH: {
    value: "ETH",
    label: "Ethereum (ETH)",
    currencyImg: <img src={EthereumImg} alt="BTC" />,
  },
  BTC: {
    value: "BTC",
    label: "Bitcoin (BTC)",
    currencyImg: <img src={BitcoinImg} alt="ETH" />,
  },
  USDT: {
    value: "USDT",
    label: "Tether (USDT)",
    currencyImg: <img src={USDTImg} alt="USD" />,
  },
  USDC: {
    value: "USDT",
    label: "USDC (USDC)",
    currencyImg: <img src={USDTImg} alt="USD" />,
  },
};

export default currencyOptions;
