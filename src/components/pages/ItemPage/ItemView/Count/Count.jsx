import React from "react";
import styled from "styled-components";

const Count = ({ current, total }) => {
  return (
    <Wrapper>
      <span>
        {current} of {total}
      </span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;

  padding: 0.5rem 1rem;

  display: flex;
  align-items: center;
  gap: 0.2rem;

  font-size: 1.4rem;
  background: var(--color-grey20);
  border-radius: 0.6rem;
`;

export default Count;
