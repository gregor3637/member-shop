import React from "react";
import styled from "styled-components";

const SectionStyled = styled.section`
  padding: 0 8rem var(--margin-section-bottom) 8rem;
`;

const ContainerStyled = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const Section = (props) => {
  return (
    <SectionStyled>
      <ContainerStyled>{props.children}</ContainerStyled>
    </SectionStyled>
  );
};

export default Section;
