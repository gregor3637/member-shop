import React from "react";
import styled from "styled-components";

const LinkHollow = (props) => {
  return (
    <LinkHollowStyled style={props.style} className={props.className}>
      {props.children}
    </LinkHollowStyled>
  );
};

const LinkHollowStyled = styled.a`
  background-color: none;
  border-radius: 1rem;

  border: 1px solid var(--color-black);
  color: var(--anchorTag-color-link);

  cursor: pointer;
`;

export default LinkHollow;
