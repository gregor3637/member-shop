import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 0 8rem var(--margin-section-bottom) 8rem;
  padding: 0 2rem var(--margin-section-bottom) 2rem;
`;

const ContainerStyled = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

const Section = (props) => {
  return (
    <Wrapper>
      <ContainerStyled>{props.children}</ContainerStyled>
    </Wrapper>
  );
};

export default Section;
