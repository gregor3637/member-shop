import React from "react";
import styled from "styled-components";
import SectionHeadingLink from "./SectionHeadingLink";



const SectionHeading = (props) => {
  const left = (
    <ContainerStyled>
      <CircleStyled />
      <h2>{props.title}</h2>
    </ContainerStyled>
  );

  return (
    <SectionHeadingStyled>
      {left}
      <SectionHeadingLink text="Browse" url="https://abv.bg" />
    </SectionHeadingStyled>
  );
};

const CircleStyled = styled.div`
  width: 10px;
  height: 10px;
  background-color: #f67d7d;
  border-radius: 500px;
  animation: fadeIn ease 2s infinite;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const SectionHeadingStyled = styled.div`
  width: 100%;
  border-bottom: var(--line);

  display: flex;
  justify-content: space-between;
  align-items: center;

  .circle {
  }

  h2 {
    padding-left: 0.5rem;
    font-size: 2rem;
  }
`;

const ContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AnchorStyled = styled.a`
  display: flex;
  justify-content: center;

  font-size: 2rem;
  font-weight: 600;
  font-family: var(--font-primary);
  text-decoration: none;
  color: var(--anchorTag-color-link);

  display: flex;
  align-items: center;

  svg {
    font-size: 4rem;
    margin-right: -1rem;
    margin-left: -1rem;
    transition: all 0.3s ease;
    color: inherit;
  }

  &:hover {
    color: var(--anchorTag-color-hover);
  }

  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
    color: inherit;
  }
`;
export default SectionHeading;
