import React from "react";
import styled from "styled-components";

const CreditBlock = ({ title, user: { name, avatar }, annotations = null }) => {
  return (
    <Wrapper>
      <TopX>
        <TitleX>{title}</TitleX>
        {annotations && <AnnotationX>{annotations}</AnnotationX>}
      </TopX>
      <BottomX>
        <img src={avatar} alt="" />
        <a href="user.profile">{name}</a>
      </BottomX>
    </Wrapper>
  );
};

const AnnotationX = styled.span`
  padding-left: 0.5rem;
  color: var(--color-text);
`;

const TitleX = styled.span`
  color: var(--color-black);
  font-size: 1.2rem;
  font-weight: 600;
`;

const TopX = styled.div`
  display: flex;
  flex-direction: row;

  span {
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

const BottomX = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 4rem;
    margin-right: 1rem;
    border-radius: 50%;
  }

  a {
    font-size: 2rem;
    text-decoration: none;
  }
`;

const Wrapper = styled.div`
  width: 50%;
`;

export default CreditBlock;
