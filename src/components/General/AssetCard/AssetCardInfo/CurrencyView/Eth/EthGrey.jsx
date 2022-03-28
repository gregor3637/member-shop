import React from "react";
import styled from "styled-components";

import EtherGrey from "../../../../../../img/currency/EtherGrey.png";

const EthGrey = (props) => {
  return <Wrapper src={EtherGrey} alt="" />;
};

const Wrapper = styled.img`
  width: 16px;
  height: 16px;
`;

export default EthGrey;
