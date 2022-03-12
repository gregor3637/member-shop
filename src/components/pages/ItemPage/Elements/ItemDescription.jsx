import React, { useState } from "react";
import styled from "styled-components";

import ItemDescriptionFooter from "./ItemDescriptionFooter";
import ItemDescriptionHeading from "./ItemDescriptionHeading";
import ItemDescriptionMain from "./ItemDescriptionMain";
import ItemDescriptionNavigation from "./ItemDescriptionNavigation";

const ItemDescription = () => {
  const [isContentShown, setIsContentShown] = useState(false);

  const toggleContentHandler = () => {
    console.log("toggle content");
    setIsContentShown((prev) => !prev);
  };

  return (
    <Styled>
      <StickyX>
        <ItemDescriptionHeading />
        <ItemDescriptionNavigation toggleContent={toggleContentHandler} />
        <ItemDescriptionMain isContentShown={isContentShown} />
      </StickyX>
      <ItemDescriptionFooter />
    </Styled>
  );
};

const StickyX = styled.div`
  position: relative;
  height: 100%;
  padding-right: 2rem;
`;

const Styled = styled.div`
  max-width: 60rem;
  margin-left: auto;
  min-height: calc(100vh - 7rem);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default ItemDescription;
