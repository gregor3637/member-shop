import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import useHomePageContext from "../../../../../hooks/HomePage/useHomePageContext";

import AttentionDot from "../../../../General/AttentionDot/AttentionDot";
import SwitchDynamic from "../../../../General/Switch/SwitchDynamic";

const SectopmTrendingHeader = () => {
  const {
    state: { trendingAuction },
    dispatch,
  } = useHomePageContext();

  const history = useHistory();
  const handleOnClick = useCallback(
    () => history.push("/marketplace"),
    [history]
  );

  return (
    <Wrapper>
      <HeadStyled>
        <AttentionDot radius={10} color={"#f67d7d"} margin="0 1rem 0 0" />
        <h2>Trending Auctions</h2>
        <SwitchContainerX>
          <SwitchDynamic
            selected={trendingAuction.selected}
            options={trendingAuction.options}
            onSelection={(v) => {
              dispatch({ type: "trendingAuction", value: v })
            }}
          />
        </SwitchContainerX>
      </HeadStyled>

      <div>
        <ButtonX onClick={handleOnClick}>See all</ButtonX>
      </div>
    </Wrapper>
  );
};

const SwitchContainerX = styled.div`
  margin-left: 2rem;
`;

const ButtonX = styled.button`
  padding: 0.6rem 1.2rem;
  height: auto;

  border: 1px solid var(--color-border);
  border-radius: var(--home-page--buttons--border-radius);
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
  margin-bottom: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default SectopmTrendingHeader;
