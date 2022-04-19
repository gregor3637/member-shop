import React from "react";
import styled from "styled-components";

import AttentionDot from "../../../../General/AttentionDot/AttentionDot";
import Switch from "../../../../General/Switch/Switch";
import SwitchDynamic from "../../../../General/Switch/SwitchDynamic";
import SectionHeadingLink from "../SectionHeadingLink";

const SectopmTrendingHeader = () => {
  const options = ["All", "Ethereum", "Solana"];

  return (
    <Wrapper>
      <HeadStyled>
        <AttentionDot radius={10} color={"#f67d7d"} margin="0 1rem 0 0" />
        <h2>Trending Auctions</h2>
        <SwitchContainerX>
          <SwitchDynamic options={options} />
        </SwitchContainerX>
      </HeadStyled>

      <div>
        <ButtonX>See all</ButtonX>
      </div>
    </Wrapper>
  );
};

const SwitchContainerX = styled.div`
  margin-left: 2rem;
`;

const ButtonX = styled.button`
  border-radius: 1rem;
  padding: 0.6rem 1.2rem;
  height: auto;

  border: 1px solid var(--color-grey20);
  background: var(--color-none);

  cursor: pointer;
  font-weight: 600;
  
  transition: all 0.2s ease;

  &:hover {
    color: var(--color-white);
    background: var(--color-black);
  }
`;

const HeadStyled = styled.div`
  display: flex;
  align-items: center;

  h2 {
    font-size: 2.4rem;
    font-weight: 600;
    position: relative;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default SectopmTrendingHeader;
