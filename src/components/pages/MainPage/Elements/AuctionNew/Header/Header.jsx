import React, { useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import SortBy2 from "../../../../../../../src/components/General/SortBy/SortBy2";
import useHomePageContext from "../../../../../../hooks/HomePage/useHomePageContext";

const Header = () => {
  const {
    state: { categoryType, categoryTimeHorizon },
    dispatch,
  } = useHomePageContext();

  const history = useHistory();
  const handleOnClick = useCallback(
    () => history.push("/marketplace"),
    [history]
  );

  return (
    <Wrapper>
      <LeftX>
        <HeaderTitleX>Top</HeaderTitleX>
        <SwitchContainerX>
          <SortBy2X
            options={categoryType.options}
            selectedOption={categoryType.selected}
            onOptionSelect={(val) => dispatch({ type: "categoryType", value: val })}
          />
        </SwitchContainerX>
        <h2>Auctions</h2>
        <HeaderTitleX>&nbsp; over last</HeaderTitleX>
        <SwitchContainerX>
          <SortBy2X
            options={categoryTimeHorizon.options}
            selectedOption={categoryTimeHorizon.selected}
            onOptionSelect={(val) =>
              dispatch({ type: "categoryTimeHorizon", value: val })
            }
          />
        </SwitchContainerX>
      </LeftX>
      <RightX>
        <button onClick={handleOnClick}>See more</button>
      </RightX>
    </Wrapper>
  );
};

const LeftX = styled.div`
  display: flex;
  align-items: center;
`;

const RightX = styled.div`
  button {
    padding: 0.6rem 1.2rem;
    height: auto;

    border: 1px solid var(--color-border);
    border-radius: var(--home-page--buttons--border-radius);
    background: var(--color-none);

    cursor: pointer;
    font-weight: 600;

    transition: all 0.2s ease;

    &:hover {
      color: var(--color-white);
      background: var(--color-black);
    }
  }
`;

const SortBy2X = styled(SortBy2)`
  border: 1px solid var(--color-grey20);
  border-radius: var(--home-page--buttons--border-radius);
`;

const SwitchContainerX = styled.div`
  margin: 0 1rem;

  border-color: red;
`;

const HeaderTitleX = styled.span``;

const Wrapper = styled.div`
  margin-bottom: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  ${HeaderTitleX},
  h2 {
    font-size: 2.4rem;
    font-weight: 600;
    position: relative;
  }
`;

export default Header;
