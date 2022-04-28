import React, { useEffect, useState } from "react";
import styled from "styled-components";

import useHttp from "../../../../hooks/useHttp";
import useInit from "../../../../hooks/useInit";
import { getTopCollections } from "../../../../lib/api";
import CollectionItem from "./CollectionItem/CollectionItem";
import Header from "./Header/Header";

import sortMethods from "../../../../helpers/MainPageTopCollectionsSort";

const TopCollections = (props) => {
  const {
    sendRequest,
    status,
    data: allCollections,
    error,
  } = useHttp(getTopCollections);

  const [timeOptions, setTimeOptions] = useState(Object.keys(sortMethods));
  const [timeHorizon, setTimeHorizon] = useState(timeOptions[0]);
  const [shownCollections, setShownCollections] = useState([]);

  useEffect(() => {
    sendRequest();
  }, []);

  useEffect(() => {
    if (allCollections && allCollections.length > 0) {
      const final = [...allCollections]
        .sort(sortMethods[timeHorizon])
        .slice(0, 20);
      setShownCollections(final);
    }
  }, [allCollections, timeHorizon]);

  //   const collection = Array.from(Array(20).keys());

  //   useInit(sendRequest);
  return (
    <Wrapper>
      <Header
        options={timeOptions}
        selectedOption={timeHorizon}
        setSelectedOption={setTimeHorizon}
      />
      <CollectionsX>
        {shownCollections.map((data, i) => {
          return (
            <CollectionItem
              key={i}
              timeHorizon={timeHorizon}
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
