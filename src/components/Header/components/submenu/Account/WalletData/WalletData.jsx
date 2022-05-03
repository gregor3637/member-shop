import React, { useState } from "react";
import styled from "styled-components";

import Balance from "./Balance/Balance";
import OfferBalance from "./OfferBalance/OfferBalance";

const WalletData = (props) => {
  const [balance, setBalance] = useState(1);
  const [offerBallance, setOfferBallance] = useState(1);

  const address = "0xD23a4cFe5D0325ABdaF06620C9e6ec14b00bDa5d";

  return (
    <Wrapper>
      <RowX>
        <Balance balance={balance} address={address} />
      </RowX>
      <RowX>
        <OfferBalance balance={offerBallance} />
      </RowX>
    </Wrapper>
  );
};

const RowX = styled.div`
  /* background: var(--test-g); */
  width: 100%;
  height: 7rem;
  padding: 1rem 0;
`;

const Wrapper = styled.div`
  padding: 0 1rem;

  border: 1px solid var(--color-grey20);
  border-radius: 1rem;

  & > div:first-of-type {
    border-bottom: 1px solid var(--color-grey20);
  }
`;

export default WalletData;
