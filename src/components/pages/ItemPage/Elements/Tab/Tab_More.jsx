import React from "react";
import styled from "styled-components";

import ShopCardNew from "../../../../General/Shop/ShopCardNew";
import ButtonRounded from "../../../../General/Buttons/ButtonRounded";
import useCardsDataChunk2 from "../../../../../hooks/useCardsDataChunk2";
import LoadingSpinner from "../../../../General/LoadingSpinner/LoadingSpinner";

const Tab_More = ({ id }) => {
  const { setPage, isAllLoaded, status, entries } = useCardsDataChunk2(
    0,
    4,
    id
  );

  const isPending = status === "pending";

  const loadMoreCards = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <Wrapper>
      <Grid>
        {entries.map((el, i) => {
          return <ShopCardNew key={i} data={el} />;
        })}
      </Grid>
      {!isAllLoaded && !isPending && (
        <ModifiedButton onClick={loadMoreCards}>Load More</ModifiedButton>
      )}

      {isPending && (
        <Wrapper>
          <LoadingSpinnerX />
        </Wrapper>
      )}
    </Wrapper>
  );
};

const ModifiedButton = styled(ButtonRounded)`
  width: 20rem;
  margin: 3rem auto 0 auto;
  margin-top: 3rem;
  padding: 1.2rem 1.8rem;
  justify-self: center;

  border: 1px solid black;
  background-color: var(--color-white);

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
  width: 100%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 4rem;
  justify-items: center;
`;

const LoadingSpinnerX = styled(LoadingSpinner)`
  margin-top: 2rem;
`;

const Wrapper = styled.div`
  margin: 2rem 0;

  display: flex;
  flex-direction: column;

  ${LoadingSpinnerX} {
    justify-self: center;
    align-self: center;
  }
`;
export default Tab_More;
