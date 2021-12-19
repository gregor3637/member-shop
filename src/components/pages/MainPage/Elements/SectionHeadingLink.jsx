import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

const Styled = styled.a`
  display: flex;
  justify-content: center;

  font-size: 3rem;
  font-weight: 600;
  font-family: var(--font-primary);
  text-decoration: none;
  color: var(--anchorTag-color-link);

  display: flex;
  align-items: center;

  .icon {
    font-size: 2.5rem;
    margin-left: 1rem;
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

const SectionHeadingLink = (props) => {
  return (
    <Styled href={props.url}>
      <div>{props.text}</div>
      <FontAwesomeIcon icon={faCaretRight} className="icon"></FontAwesomeIcon>
    </Styled>
  );
};


export default SectionHeadingLink;
