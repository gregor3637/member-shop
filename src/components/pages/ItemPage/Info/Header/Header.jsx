import React, { useContext } from "react";
import styled from "styled-components";
import { matchPath, useRouteMatch, useLocation, Link } from "react-router-dom";

import MoreButtonContent from "./MoreButtonContent/MoreButtonContent";
import Watched from "../../../MarketplacePage/FilterResults/AssetsView/TableView/Watch/Watch";
import { printify } from "../../../../../helpers/PrintifyNumbers";
import ItemCardContext2 from "../../../../../store/Item/ItemCardContext2";

const Header = () => {
  const itemCtx = useContext(ItemCardContext2);
  const favCount = printify(itemCtx.socialMedia.stats.favorites);

  let location = useLocation();
  let { url } = useRouteMatch();
  const match = matchPath(location.pathname, {
    path: "/itemTest/:quoteId/:tab",
    exact: false,
    strict: false,
  });

  return (
    <Wrapper>
      <BottomX>
        <h2>{itemCtx.general.name}</h2>
      </BottomX>
      <TopX>
        {match && (
          <BackX to={url}>
            <span>&lt; Back</span>
          </BackX>
        )}
        <WatchedX id={itemCtx.id} favoritesCount={favCount} />
        <MoreButtonX isBidActive={false} isBuyActive={false} />
      </TopX>
    </Wrapper>
  );
};

const BackX = styled(Link)`
  padding: 0 0.5rem;
  justify-self: start;

  display: flex;
  align-items: center;

  border: 1px solid var(--color-none);
  border-radius: 0.6rem;
  cursor: pointer;

  text-decoration: inherit;
  color: inherit;

  &:hover {
    background-color: var(--color-grey20);
  }
`;

const WatchedX = styled(Watched)`
  border-radius: 0.5rem;
  padding: 0 0.5rem;
  grid-column: 2 / 3;

  svg {
    margin-right: 0;
    transform: scale(0.6);
  }
`;

const MoreButtonX = styled(MoreButtonContent)`
  border-color: var(--color-none);

  grid-column: 3 / 4;

  justify-self: end;
`;

const TopX = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: stretch;
`;

const BottomX = styled.div`
  width: 100%;
  padding-bottom: 0.3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    padding: 0 2rem;
    font-size: 2rem;
    text-align: center;

    word-break: break-word;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 0.5rem 1rem 0.3rem 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid var(--color-grey20);
`;

export default Header;
