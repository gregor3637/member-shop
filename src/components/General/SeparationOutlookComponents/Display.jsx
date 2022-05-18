import React from "react";
import styled from "styled-components";

const Display = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  background: var(--color-white);
  flex: 1;
  height: 100%;

  overflow: clip;
  display: flex;
  flex-direction: column;

  border: 1px solid var(--color-border);
  border-radius: var(--market-filters--outerWrapper-radius);
`;

export default Display;
