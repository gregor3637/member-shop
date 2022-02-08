import React from "react";
import styled from "styled-components";

import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";

const CollectionData = ({ items }) => {
  return (
    <>
      {items && (
        <Wrapper>
          <CollectionsOutlinedIcon />
          {items.length} Items
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 0.2rem;

  font-weight: 600;
  color: var(--color-grey70);
`;

export default CollectionData;
