import React from "react";
import styled from "styled-components";

import SortBy2 from "../../../../../../src/components/General/SortBy/SortBy2";

const Header = ({ options, selectedOption, setSelectedOption }) => {
  return (
    <Wrapper>
      <h2>Top collections over</h2>
      <SwitchContainerX>
        <SortBy2X
          options={options}
          selectedOption={selectedOption}
          onOptionSelect={(val) => setSelectedOption(val)}
        />
      </SwitchContainerX>
    </Wrapper>
  );
};

const SortBy2X = styled(SortBy2)`
  border: 1px solid var(--color-grey20);
  border-radius: var(--home-page--buttons--border-radius);
`;

const SwitchContainerX = styled.div`
  margin-left: 2rem;
`;

const Wrapper = styled.div`
  margin-bottom: 1rem;

  display: flex;
  align-items: center;

  h2 {
    font-size: 2.4rem;
    font-weight: 600;
    position: relative;
  }
`;

export default Header;
