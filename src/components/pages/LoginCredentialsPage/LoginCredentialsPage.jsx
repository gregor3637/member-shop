import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import InputTextField from "../MarketplacePage/CommonElements/InputTextField/InputTextField";

const LoginCredentialsPage = (props) => {
  return (
    <Wrapper>
      <ContentX>
        <SignUpContainerX>
          <ButtonX>
            <NavLink to={`/signup`}>Sign Up</NavLink>
          </ButtonX>
        </SignUpContainerX>
        <CardX>
          <h1>Sign In</h1>
          <UserInputX>
            <div>
              <label for="first-name">Email</label>
              <InputTextField type="text" id="first-name" name="first-name" />
            </div>
            <div>
              <label for="first-name">Password</label>
              <InputTextField type="text" id="first-name" name="first-name" />
            </div>
          </UserInputX>

          <ButtonContainerX>
            <button>Log In</button>
          </ButtonContainerX>
        </CardX>
        <OtherOptionsX>
          <ButtonX>
            <NavLink to={`/marketplace`}>Cancel signing in</NavLink>
          </ButtonX>
          <ButtonX>
            <span>Forgot password? </span>
          </ButtonX>
        </OtherOptionsX>
      </ContentX>
    </Wrapper>
  );
};

const SignUpContainerX = styled.div`
  width: max-content;

  margin-left: auto;
  margin-bottom: 2rem;
`;

const OtherOptionsX = styled.div`
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

const ButtonX = styled.button`
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;

  span {
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--color-blue);
  }
`;
const ButtonContainerX = styled.div`
  width: 100%;

  button {
    width: 100%;
    padding: 1.4rem 0;

    background-color: var(--button-color-blue-light);
    border-radius: 9999px;
    border: none;

    font-weight: 600;
    color: var(--color-white);
  }
`;

const UserInputX = styled.div`
  padding: 2rem 0;

  div {
    margin-top: 4px;
  }

  input {
    width: 30rem;
  }
`;

const CardX = styled.div`
  width: max-content;
  padding: 2rem 4rem 3rem 4rem;

  border: 1px solid var(--color-grey20);
  border-radius: 1rem;
`;

const ContentX = styled.div`
  a {
    color: #0060b6;
    text-decoration: none;

    font-size: 1.4rem;
    font-weight: 500;
  }

  a:hover {
    color: #00a0c6;
    text-decoration: none;
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 1.4rem;
  font-weight: 500;
`;

export default LoginCredentialsPage;
