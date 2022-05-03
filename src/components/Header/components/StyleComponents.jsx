import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkX = styled(Link)`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  font-size: var(--fontSize-dropdown);
  font-weight: var(--fontWeight-dropdown);
  text-decoration: none;
  color: inherit;
`;

export const UlX = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;

  color: var(--color-black);

`;

export const LiX = styled.li`
  width: 100%;
  height: 6rem;
  padding: 0 1.5rem;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 1rem;

  &:not(:last-child) {
    /* border-bottom: 1px solid var(--color-border); */
  }

  &:hover {
    /* box-shadow: var(--boxShadow-dropdown); */
    background: var(--color-grey10);
  }
`;

export const ImgX = styled.img`
  height: 3rem;
  padding-right: 0.5rem;
`;
