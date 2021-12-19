import React from "react";
import styled from "styled-components";
import useMarketFilters from "../../../../hooks/Market/useMarketFilters";
import HollowButton from "../../../General/Buttons/HollowButton";
import SelectedFulterButton from "./SelectedFulterButton";

const SelectedFiltersNew = (props) => {
  const { state, dispatch: updateMarkedFilters } = useMarketFilters();

  //take all filters that are 'true'
  const selectedRanks = state["rank"];
  const selectedChains = state["chains"];

  const rankButtons = selectedRanks.map((x, i) => {
    return (
      <SelectedFulterButton
        key={i}
        text={x}
        onClick={() => {
          updateMarkedFilters({ type: "rank", value: x });
        }}
      />
    );
  });

  const chainButtons = selectedChains.map((x, i) => {
    return (
      <SelectedFulterButton
        key={i}
        text={x}
        onClick={() => {
          updateMarkedFilters({ type: "chains", value: x });
        }}
      />
    );
  });

  const hasFilters = rankButtons.length > 0 || chainButtons.length > 0;

  console.log(chainButtons);

  return (
    <>
      {hasFilters && (
        <Styled>
          {rankButtons}
          {chainButtons}
          <HollowButtonX>Clear All</HollowButtonX>
        </Styled>
      )}
    </>
  );
};

const HollowButtonX = styled(HollowButton)`
  font-size: 1.4rem;
  font-weight: 500;
`;

const Styled = styled.div`
  background-color: var(--color-white);
  background-color: var(--color-white);
  flex: 1;
  margin-bottom: 2rem;
  padding: 1rem;

  display: flex;
  flex-wrap: wrap;

  border-radius: var(--marketplace-border-radius);
`;

export default SelectedFiltersNew;
