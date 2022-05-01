import React, { useEffect, useState } from "react";
import styled from "styled-components";

import useHttp from "../../../../hooks/useHttp";
import useInit from "../../../../hooks/useInit";
import { getTopCollections } from "../../../../lib/api";
import CollectionItem from "./CollectionItem/CollectionItem";
import Header from "./Header/Header";

import sortMethods from "../../../../helpers/MainPageTopCollectionsSort";
import useHomePageContext from "../../../../hooks/HomePage/useHomePageContext";

const TopCollections = (props) => {
  const {
    state: { collectionsTimeHorizon },
    dispatch,
  } = useHomePageContext();

  const {
    sendRequest,
    status,
    data: allCollections,
    error,
  } = useHttp(getTopCollections);

  const [shownCollections, setShownCollections] = useState([]);

  useInit(sendRequest);

  useEffect(() => {
    if (allCollections && allCollections.length > 0) {
      const final = [...allCollections]
        .sort(sortMethods[collectionsTimeHorizon.selected])
        .slice(0, 20);
      setShownCollections(final);
    }
  }, [allCollections, collectionsTimeHorizon.selected]);

  return (
    <Wrapper>
      <Header
        options={collectionsTimeHorizon.options}
        selectedOption={collectionsTimeHorizon.selected}
        setSelectedOption={(val) =>
          dispatch({ type: "collectionsTimeHorizon", value: val })
        }
      />
      <CollectionsX>
        {shownCollections.map((data, i) => {
          return (
            <CollectionItem
              key={i}
              timeHorizon={collectionsTimeHorizon.selected}
              position={i + 1}
              data={data}
            />
          );
        })}
      </CollectionsX>
    </Wrapper>
  );
};

const CollectionsX = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(5, 1fr);
  column-gap: 3rem;
`;

const Wrapper = styled.div`
  /* background-color: green; */
  /* height: 18rem; */
  width: 100%;
`;

export default TopCollections;
