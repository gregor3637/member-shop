import React from "react";
import styled from "styled-components";

import ButtonRounded from "../../../../General/Buttons/ButtonRounded";
import ShopCardNew from "../../../../General/Shop/ShopCardNew";
import SectopmTrendingHeader from "./TrendingHeader";
import useCardsDataChunk from "../../../../../hooks/useCardsDataChunk";

const Trending = (props) => {
  // const { setPage, isAllLoaded, status, entries, error } = useCardsDataChunk(
  //   0,
  //   8
  // );
  const { setPage, isAllLoaded, status, error, entries } = useCardsDataChunk(
    0,
    8
  );
  console.log("isAllLoaded " + isAllLoaded);

  const loadMoreCards = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <Styled>
      <SectopmTrendingHeader />
      <Grid>
        {entries.map((el, i) => {
          return <ShopCardNew key={i} data={el} />;
        })}
      </Grid>
      {error && <Error className="errorMsg">{error}</Error>}
      {!isAllLoaded && (
        <ModifiedButton onClick={loadMoreCards}>
          {status === "pending" ? "Loading..." : "Load More"}
        </ModifiedButton>
      )}
    </Styled>
  );
};

const Error = styled.p`
  margin-top: 2rem;

  text-align: center;
  color: red;
  font-size: 2rem;
  font-weight: 600;
`;

const ModifiedButton = styled(ButtonRounded)`
  margin-top: 3rem;
  padding: 1.2rem 1.8rem;
  justify-self: center;

  border: 1px solid black;
  background-color: transparent;

  font-size: 1.8rem;
  font-weight: 600;
  color: var(--anchorTag-color-link);

  transition: all 0.4s ease;

  &:hover {
    background-color: var(--color-black);
    color: var(--color-white);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 4rem;
  justify-items: center;
`;

const Styled = styled.div`
  display: grid;
`;

export default Trending;
