import React, { useContext } from "react";
import styled from "styled-components";

import MoreButtonContent from "./MoreButtonContent/MoreButtonContent";
import Watched from "../../../MarketplacePage/FilterResults/AssetsView/TableView/Watch/Watch";
import { printify } from "../../../../../helpers/PrintifyNumbers";
import ItemCardContext2 from "../../../../../store/Item/ItemCardContext2";

const Header = () => {
  const itemCtx = useContext(ItemCardContext2);
  const favCount = printify(itemCtx.socialMedia.stats.favorites);

  console.log("favCount ", favCount);
  return (
    <Wrapper>
      <TopX>
        <WatchedX id={itemCtx.id} favoritesCount={favCount} />
        <MoreButtonX isBidActive={false} isBuyActive={false} />
      </TopX>
      <BottomX>
        <h2>{"Tsting Name is going"}</h2>
      </BottomX>
    </Wrapper>
  );
};

const WatchedX = styled(Watched)`
  border-radius: 0.5rem;
  padding: 0 0.5rem;
`;

const MoreButtonX = styled(MoreButtonContent)`
  border-color: var(--color-none);
`;

const TopX = styled.div`
  /* background: var(--test-g); */
  width: 100%;

  display: flex;
  flex-direction: row;
  gap: 0.8rem;
  align-items: end;
  justify-content: space-between;
`;

const BottomX = styled.div`
  /* background: var(--test-g); */
  width: 100%;
  padding-bottom: 0.3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 2rem;
    text-align: center;
  }
`;

const Wrapper = styled.div`
  /* background: var(--test-r); */
  width: 100%;
  padding: 0.5rem 1rem 0 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid var(--color-grey20);
`;

export default Header;
