import React from "react";

import styled from "styled-components";
import Bottom from "./Bottom/Bottom";
import Middle from "./Middle/Middle";
import Top from "./Top/Top";

const Footer2 = (props) => {
  return (
    <Wrapper>
      <div>
        <Top />
        <Middle />
        <Bottom />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background-color: var(--color-grey10);

  & > div {
    width: 96rem;
    margin: 0 auto;
  }
`;

export default Footer2;
