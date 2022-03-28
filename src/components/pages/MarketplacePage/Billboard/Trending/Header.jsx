import React from "react";
import styled from "styled-components";

const Header = ({ title = "fafa" }) => {
  return (
    <Wrapper>
      <TitleX>{title}</TitleX>
    </Wrapper>
  );
};

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
