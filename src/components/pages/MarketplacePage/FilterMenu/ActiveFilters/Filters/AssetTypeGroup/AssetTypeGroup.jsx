import React from "react";
import styled from "styled-components";

import ActiveFilterButton from "../ActiveFilterButton/ActiveFilterButton";
import ActiveFilterGroupButton from "../ActiveFilterGroupButton/ActiveFilterGroupButton";

const AssetTypeGroup = ({ context, contextName, label, dispatch }) => {
  if (context.length === 0) {
    return <></>;
  }

  return (
    <Wrapper>
      <ActiveFilterGroupButton
        label={label}
        onClick={() => {
          dispatch({ type: "reset", state: contextName });
        }}
      />

      {context.map((x, i) => {
        return (
          <ActiveFilterButton
            key={i}
            onClick={() => {
              dispatch({ type: contextName, value: x });
            }}
          >
            <span style={{ fontWeight: 400 }}>{x}</span>
          </ActiveFilterButton>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export default AssetTypeGroup;
