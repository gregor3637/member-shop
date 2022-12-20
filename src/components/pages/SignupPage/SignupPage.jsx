import React, { useState } from "react";
import { useReducer } from "react";
import styled from "styled-components";

import Footer from "../../Footer/Footer";
import InputTextField from "../MarketplacePage/CommonElements/InputTextField/InputTextField";

const SignupPage = (props) => {
  const [isAuthLoading, setIsAuthLoading] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [error, setError] = useState(null);

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
    isConsenting: false,
  };

  const [formValues, setFormValues] = useReducer(
    (curVals, newVals) => ({ ...curVals, ...newVals }),
    initialValues
  );

  const { firstName, lastName, email, password, repeatPassword, isConsenting } =
    formValues;

  function handleFormChanges(ev) {
    const { name, value } = ev.target;
    console.log("name", name);
    console.log("value", value);
    setFormValues({ [name]: value });
  }

  const signupHandler = (event, authData) => {
    event.preventDefault();
    console.log('***** 11');
    setIsAuthLoading(true);

    fetch("http://localhost:8080/auth/signup", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        repeatPassword,
        isConsenting,
      }),
    })
      .then((res) => {
        if (res.status === 422) {
          throw new Error(
            "Validation failed. Make sure the email address isn't used yet!"
          );
        }
        if (res.status !== 200 && res.status !== 201) {
          console.log("Error!");
          throw new Error("Creating a user failed!");
        }
        return res.json();
      })
      .then((resData) => {
        console.log('*****************resData',resData);
        setIsAuth(true);
        setIsAuthLoading(false);
        // this.props.history.replace("/");
      })
      .catch((err) => {
        console.log(err);
        setIsAuth(false);
        setIsAuthLoading(false);
        setError(err);
      });
  };

  return (
    <>
      <WrapperX onSubmit={signupHandler}>
        <ContentX>
          <div>
            <h1>Create an account</h1>
            <TitleLabelX>Required fields have an asterisk: *</TitleLabelX>
          </div>
          <UserInputFieldsX>
            <UserInputTextFieldsX>
              <NamesContainerX>
                <span>
                  <label htmlFor="firstName">First namee*</label>
                  <InputTextField
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={firstName}
                    onChange={handleFormChanges}
                  />
                </span>
                <span>
                  <label htmlFor="lastName">Last name*</label>
                  <InputTextField
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={lastName}
                    onChange={handleFormChanges}
                  />
                </span>
              </NamesContainerX>
              <LoginCredentialsX>
                <span>
                  <label htmlFor="email">Email*</label>
                  <InputTextField
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleFormChanges}
                  />
                </span>
                <span>
                  <label htmlFor="password">Password*</label>
                  <InputTextField
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handleFormChanges}
                  />
                </span>
                <span>
                  <label htmlFor="repeatPassword">Repeat password*</label>
                  <InputTextFieldX
                    type="password"
                    id="repeatPassword"
                    name="repeatPassword"
                    value={repeatPassword}
                    onChange={handleFormChanges}
                  />
                </span>
              </LoginCredentialsX>
            </UserInputTextFieldsX>
            <ConfirmationX>
              <div className="checkbox-outer">
                <div>
                  <CheckboxX
                    type="checkbox"
                    id="isConsenting"
                    name="isConsenting"
                    className="checkbox"
                    value={isConsenting}
                    onChange={handleFormChanges}
                  />
                </div>
              </div>
              <div className="checkbox-info">
                <span>
                  I certify that I am 18 yereas of age or older, I agree to use
                  User Agreement, and I have read the Privicy Policy.
                </span>
              </div>
            </ConfirmationX>
          </UserInputFieldsX>
          <ButtonContainerX>
            <button type="submit">Create free Account</button>
          </ButtonContainerX>
        </ContentX>
      </WrapperX>
    </>
  );
};

const UserInputTextFieldsX = styled.div`
  span {
    margin-bottom: 10px;
  }

  label {
    padding-bottom: 4px;
  }
`;

const CheckboxX = styled.input``;

const InputTextFieldX = styled(InputTextField)`
  width: 50rem;
  height: 4rem;
`;

const ConfirmationX = styled.div`
  margin-top: 2rem;

  display: flex;
  gap: 1rem;

  .checkbox-outer {
    height: auto;

    div {
      margin-top: 4px;
      width: 24px;
      height: 24px;

      input {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

const LoginCredentialsX = styled.div`
  display: flex;
  flex-direction: column;

  span {
    display: flex;
    flex-direction: column;
  }
`;

const NamesContainerX = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  span {
    flex-grow: 1;
  }
`;

const UserInputFieldsX = styled.div`
  height: 100%;
  padding: 2rem 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TitleLabelX = styled.label`
  font-size: 1.2rem;
  font-weight: 400;
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

const ContentX = styled.div`
  /* background: red; */
  width: min-content;
  padding: 2rem 4rem 3rem 4rem;
  margin: auto auto;

  border: 1px solid var(--color-grey20);
  border-radius: 1rem;
`;

const WrapperX = styled.form`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.4rem;
  font-weight: 500;

  h1 {
    font-size: 3rem;
    width: max-content;
  }
`;

export default SignupPage;
