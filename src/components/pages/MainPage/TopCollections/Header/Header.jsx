import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import SortBy2 from "../../../../../../src/components/General/SortBy/SortBy2";

const Header = ({ options, selectedOption, setSelectedOption }) => {
  const history = useHistory();
  const handleOnClick = useCallback(
    () => history.push("/marketplace"),
    [history]
  );

  return (
    <Wrapper>
      <LeftX>
        <h2>Top collections in the last</h2>
        <SwitchContainerX>
          <SortBy2X
            options={options}
            selectedOption={selectedOption}
            onOptionSelect={(val) => setSelectedOption(val)}
          />
        </SwitchContainerX>
      </LeftX>
      <RightX>
        <button onClick={handleOnClick}>Go to Rankings</button>
      </RightX>
    </Wrapper>
  );
};

const RightX = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;

  button {
    padding: 0.6rem 1.2rem;
    height: 100%;

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

const LeftX = styled.div`
  display: flex;
  align-items: center;
`;

const SortBy2X = styled(SortBy2)`
  border: 1px solid var(--color-grey20);
  border-radius: var(--home-page--buttons--border-radius);
`;

const SwitchContainerX = styled.div`
  margin-left: 1.4rem;
`;

const Wrapper = styled.div`
  margin-bottom: 1rem;

  display: flex;
  justify-content: space-between;

  h2 {
    font-size: 2.4rem;
    font-weight: 600;
    position: relative;
  }
`;

export default Header;
