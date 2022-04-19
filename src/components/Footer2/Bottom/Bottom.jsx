import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Bottom = (props) => {
  return (
    <Wrapper>
      <span>© Member, Inc. All rights reserved.</span>
      <div>
        <ul>
          <li>
            <LinkX to="">
              <span>Terms</span>
            </LinkX>
          </li>
          <li>
            <LinkX to="">
              <span>Privacy policy</span>
            </LinkX>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};
const LinkX = styled(Link)`
  text-decoration: inherit;

  span {
    color: var(--color-grey50);
    font-weight: 600;
  }
`;
const Wrapper = styled.div`
  padding-top: 2rem;
  padding-bottom: 4rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  font-size: 1.4rem;

  ul {
    display: flex;
    gap: 2rem;

    list-style: none;
  }

  & > span {
    color: var(--color-grey40);
  }
`;

export default Bottom;
