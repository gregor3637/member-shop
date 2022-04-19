import React  from "react";
import styled from "styled-components";

import ItemView from "./ItemView";
import LoadingSpinner from "../../../General/LoadingSpinner/LoadingSpinner";

const ItemViewContainer = ({ status, footerHeight }) => {
  return (
    <Wrapper>
      {status === "pending" ? (
        <LoadingSpinner />
      ) : (
        <ItemView status={status} footerHeight={footerHeight} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  background: var(--color-white);
  flex: 1;
  height: 100%;

  overflow: clip;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 1px solid var(--color-border);
  border-radius: var(--market-filters--outerWrapper-radius);
`;

export default ItemViewContainer;
