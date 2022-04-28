import { flexbox } from "@mui/system";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useHomePageContext from "../../../../../../hooks/HomePage/useHomePageContext";
import useCardsDataChunk from "../../../../../../hooks/useCardsDataChunk";
import AssetCardFlexible from "../../../../../General/AssetCard/AssetCardFlexible";
import ButtonRounded from "../../../../../General/Buttons/ButtonRounded";

let firstRender = true;

const GridView = (props) => {
  const [filtered, setFiltered] = useState([]);
  const {
    state: { trendingAuction },
  } = useHomePageContext();

  const {
    setPage,
    isAllLoaded,
    status,
    error,
    entries: downloadedItems,
  } = useCardsDataChunk(0, 7);

  useEffect(() => {
    if (!firstRender) {
      const items =
        trendingAuction.selected === "all"
          ? downloadedItems
          : downloadedItems.filter(
              (x) => x.contract.blockchain === trendingAuction.selected
            );

      setFiltered(items);
    }

    firstRender = false;
  }, [downloadedItems, trendingAuction.selected]);

  const loadMoreCards = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <Wrapper>
      <GridX>
        {filtered &&
          filtered.map((el, i) => <AssetCardFlexible key={i} data={el} />)}
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
  margin: 2rem auto 0 auto;
  padding: 1.2rem 1.8rem;
  width: max-content;

  border: 1px solid var(--color-grey40);
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
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default GridView;
