import React from "react";
import styled from "styled-components";

import ButtonRounded from "../../../../General/Buttons/ButtonRounded";
import SectopmTrendingHeader from "./TrendingHeader";
import useCardsDataChunk from "../../../../../hooks/useCardsDataChunk";
import AssetCard from "../../../../General/AssetCard/AssetCard";
import AssetCardFlexible from "../../../../General/AssetCard/AssetCardFlexible";

const Trending = (props) => {
  const { setPage, isAllLoaded, status, error, entries } = useCardsDataChunk(
    0,
    8
  );

  const loadMoreCards = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <Wrapper>
      <SectopmTrendingHeader />
      <GridX>
        {entries.map((el, i) => (
          <AssetCardFlexible key={i} data={el} />
        ))}
      </GridX>
      {error && <Error className="errorMsg">{error}</Error>}
      {!isAllLoaded && (
        <ButtonRoundedX onClick={loadMoreCards}>
          {status === "pending" ? "Loading..." : "Load More"}
        </ButtonRoundedX>
      )}
    </Wrapper>
  );
};

const Error = styled.p`
  margin-top: 2rem;

  text-align: center;
  color: red;
  font-size: 2rem;
  font-weight: 600;
`;

const ButtonRoundedX = styled(ButtonRounded)`
  margin-top: 3rem;
  padding: 1.2rem 1.8rem;
  justify-self: center;

  border: 1px solid var(--color-grey40);;
  background-color: transparent;

  font-size: 1.8rem;
  font-weight: 600;
  color: var(--anchorTag-color-link);

  transition: all 0.2s ease;

  &:hover {
    background-color: var(--color-black);
    color: var(--color-white);
  }
`;

const GridX = styled.div`
  margin-top: 1rem;

  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 2rem;
  justify-items: center;

  @media (max-width: 1800px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
  @media (max-width: 1550px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  @media (max-width: 1350px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const Wrapper = styled.div`
  display: grid;
`;

export default Trending;
