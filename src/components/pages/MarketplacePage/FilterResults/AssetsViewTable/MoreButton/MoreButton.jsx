import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

const MoreButton = () => {
  return (
    <Wrapper>
      <FontAwesomeIcon icon={faEllipsisH}></FontAwesomeIcon>
    </Wrapper>
  );
};

const Wrapper = styled.button`
  padding: 0 0.5rem;

  display: flex;
  align-items: center;

  color: var(--color-grey50);
  border: 1px solid var(--border-color);
  background-color: var(--color-white);
  border-radius: 1rem;
  transition: all 0.4s ease;

  &:hover {
    background-color: var(--color-grey10);
  }
`;

export default MoreButton;
