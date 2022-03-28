import React from "react";
import styled from "styled-components";

const Header = ({ title, annotation }) => {
  return (
    <Wrapper>
      <TitleX>{title}</TitleX>
      <AnnotationX>{annotation}</AnnotationX>
    </Wrapper>
  );
};

const AnnotationX = styled.span`
  font-weight: 500;
  color: var(--color-grey50);

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const TitleX = styled.span`
  font-size: 1.2rem;
  font-weight: 600;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 100%;
`;

export default Header;
