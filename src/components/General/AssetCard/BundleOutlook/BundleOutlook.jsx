import React from "react";
import styled from "styled-components";

const BundleOutlook = (props) => {
  return (
    <Wrapper style={{ visibility: props.isHidden ? "hidden" : "auto" }}>
      <div style={{ width: "90%", top: 0 }}></div>
      <div style={{ width: "94%", top: "3px" }}></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  height: 6px;
  width: 100%;

  & > div {
    position: absolute;

    background-color: var(--color-white);
    height: 3rem;

    border: 1px solid var(--color-border);
    border-radius: 999999px;

    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }
`;

export default BundleOutlook;
