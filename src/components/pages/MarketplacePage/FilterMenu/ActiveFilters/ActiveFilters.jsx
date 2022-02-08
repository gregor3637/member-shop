import React from "react";
import styled from "styled-components";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

import Filters from "./Filters/Filters";
import ActionButton from "../../CommonElements/ActionButton/ActionButton";

const ActiveFilters = ({ state, dispatch }) => {
  const handleClearAll = () => {
    dispatch({ type: "reset" });
  };

  const panelContent =
    state.count === 0 ? (
      <AbsentX>
        <span>No filters have been selected</span>
      </AbsentX>
    ) : (
      <ScrollbarX>
        <Filters state={state} dispatch={dispatch} />
      </ScrollbarX>
    );

  return (
    <Wrapper>
      <MainWrapperX>{panelContent}</MainWrapperX>
      <FooterX>
        <ButtonWrapper>
          <ActionButton
            text={"Clear All"}
            onClick={handleClearAll}
            isDisabled={state.count === 0}
          />
        </ButtonWrapper>
      </FooterX>
    </Wrapper>
  );
};

const AbsentX = styled.div`
  /* background: red; */
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.6rem;
  font-weight: 600;
  text-align: center;
`;

const ScrollbarX = styled(SimpleBar)`
  height: 100%;
`;

const MainWrapperX = styled.div`
  flex: 1;
  overflow: hidden;
`;

const ButtonWrapper = styled.div`
  width: 15rem;
  margin: 0 auto;
`;

const FooterX = styled.div`
  padding: 1rem 0;

  border-top: 1px solid var(--color-border);
`;

const Wrapper = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
`;

export default ActiveFilters;
