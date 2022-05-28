import React from "react";
import styled from "styled-components";



const GeneralHelp = (props) => {
  return (
    <Wrapper>
      Visit our <a href="">help center</a> to learn how to get started with{" "}
      <br />
      buying, selling, and creating.
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 2rem 3rem;
  background-color: var(--color-grey10);

  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey50);

  a {
    text-decoration: inherit;
    color: var(--color-blue);
  }
`;

export default GeneralHelp;
