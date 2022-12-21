import React, { useContext, useReducer, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import InputTextField from "../MarketplacePage/CommonElements/InputTextField/InputTextField";
import AuthContext from "../../../store/AuthContext";
import { required, length, email } from "../../../helpers/validators";

const LoginCredentialsPage = (props) => {
  // const [email, setEmail] = useState("");
  const authContext = useContext(AuthContext);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isAuthLoading, setIsAuthLoading] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [error, setError] = useState(null);
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState();

  const emailInitialValues = {
    touched: false,
    value: "",
    valid: false,
    validators: [required, email],
  };
  const passwordInitialValues = {
    touched: false,
    value: "",
    valid: false,
    validators: [required, length({ min: 5 })],
  };

  const [emailValues, setEmailValues] = useReducer(
    (curVals, newVals) => ({ ...curVals, ...newVals }),
    emailInitialValues
  );
  const [passwordValues, setPasswordValues] = useReducer(
    (curVals, newVals) => ({ ...curVals, ...newVals }),
    passwordInitialValues
  );

  const emailChangeHandler = (ev) => {
    let value = ev.target.value;
    let isValid = true;
    for (const validator of emailValues.validators) {
      isValid = isValid && validator(value);
    }

    setEmailValues({ valid: isValid, value: value });
    setIsFormValid(passwordValues.valid && isValid);
  };

  const passwordChangeHandler = (ev) => {
    let value = ev.target.value;
    let isValid = true;
    for (const validator of passwordValues.validators) {
      isValid = isValid && validator(value);
    }

    setPasswordValues({ valid: isValid, value: value });
    setIsFormValid(emailValues.valid && isValid);
  };

  const loginHandler = (event, authData) => {
    event.preventDefault();
    setIsAuthLoading(true);
    fetch("http://localhost:8080/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({
      //   email: '12345@abv.bg',
      //   password: '12345'
      // }),
      body: JSON.stringify({
        email: emailValues.value,
        password: passwordValues.value
      }),
    })
      .then((res) => {
        if (res.status === 422) {
          throw new Error("Validation failed.");
        }
        if (res.status !== 200 && res.status !== 201) {
          console.log("Error!");
          throw new Error("Could not authenticate you!");
        }
        return res.json();
      })
      .then((resData) => {
        console.log("***Success", resData);
        authContext.onLogin();

        setIsAuthLoading(false);
        setIsAuth(true);
        setToken(resData.token);
        setUserId(resData.userId);

        const remainingMilliseconds = 60 * 60 * 1000;
        const expiryDate = new Date(
          new Date().getTime() + remainingMilliseconds
        );

        localStorage.setItem("token", resData.token);
        localStorage.setItem("userId", resData.userId);
        localStorage.setItem("expiryDate", expiryDate.toISOString());
        // this.setAutoLogout(remainingMilliseconds);
      })
      .catch((err) => {
        console.log("****err", err);

        setIsAuth(false);
        setIsAuthLoading(false);
        setError(err);
      });
  };

  return (
    <Wrapper onSubmit={loginHandler}>
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
              <label htmlFor="first-name">Email</label>
              <InputTextField
                type="text"
                id="first-name"
                name="first-name"
                onChange={emailChangeHandler}
                value={emailValues.value}
                onBlur={(ev) => setEmailValues({ touched: true })}
              />
            </div>
            <div>
              <label htmlFor="first-name">Password</label>
              <InputTextField
                type="text"
                id="first-name"
                name="first-name"
                onChange={passwordChangeHandler}
                value={passwordValues.value}
                onBlur={(ev) => setPasswordValues({ touched: true })}
              />
            </div>
          </UserInputX>

          <ButtonContainerX>
            <button  disabled={!isFormValid}>Log In</button>
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

    background-color: var(--button-color-blue);
    border-radius: 9999px;
    border: none;

    font-weight: 600;
    color: var(--color-white);
    cursor: pointer;

    &:disabled {
      background:  var(--button-color-blue-light);
      cursor: default;
    }
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

const Wrapper = styled.form`
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
