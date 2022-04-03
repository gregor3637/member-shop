import React from "react";
import styled from "styled-components";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

import { useGetAssetItemsAlike } from "../../../../../../../../hooks/Item/useGetAssetItemsAlike";
import LoadingSpinner from "../../../../../../../General/LoadingSpinner/LoadingSpinner";
import PageElements from "./PageElements/PageElements";

const TabMore = ({ assetCardsId }) => {
  //0 get first batch of N db element, corresponding to id
  //1 for each dbElement create a card
  //2 if scroll beyond N element, load second batch of N elements
  //3 do the step 2 until no more elements to load

  const { setPage, hasMore, status, entries } = useGetAssetItemsAlike(
    5,
    assetCardsId
  );

  return (
    <Wrapper>
      <ScrollbarX forceVisible="y" autoHide={true}>
        <PageElements
          elementsData={entries}
          loading={status === "pending"}
          hasMore={hasMore}
          setPageNumber={setPage}
        />

        {status === "pending" && (
          <LoadingContainerX>
            <LoadingSpinnerX />
          </LoadingContainerX>
        )}
      </ScrollbarX>
    </Wrapper>
  );
};

const ScrollbarX = styled(SimpleBar)`
  height: 100%;
  display: flex;
`;

const LoadingSpinnerX = styled(LoadingSpinner)``;

const LoadingContainerX = styled.div`
  width: 100%;
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  overflow: hidden;

  ${LoadingSpinnerX} {
    justify-self: center;
    align-self: center;
  }
`;

export default TabMore;
