import React from "react";
import styled from "styled-components";

import Footer from "../../Footer/Footer";
import InputTextField from "../MarketplacePage/CommonElements/InputTextField/InputTextField";

const SignupPage = (props) => {
  return (
    <>
      <WrapperX>
        <ContentX>
          <div>
            <h1>Create an account</h1>
            <TitleLabelX>Required fields have an asterisk: *</TitleLabelX>
          </div>
          <UserInputFieldsX>
            <UserInputTextFieldsX>
              <NamesContainerX>
                <span>
                  <label for="first-name">First name*</label>
                  <InputTextField
                    type="text"
                    id="first-name"
                    name="first-name"
                  />
                </span>
                <span>
                  <label for="last-name">Last name*</label>
                  <InputTextField type="text" id="last-name" name="last-name" />
                </span>
              </NamesContainerX>
              <LoginCredentialsX>
                <span>
                  <label for="email">Email*</label>
                  <InputTextField type="text" id="email" name="email" />
                </span>
                <span>
                  <label for="password">Password*</label>
                  <InputTextField
                    type="password"
                    id="password"
                    name="password"
                  />
                </span>
                <span>
                  <label for="re-password">Repeat password*</label>
                  <InputTextFieldX
                    type="password"
                    id="re-password"
                    name="re-password"
                  />
                </span>
              </LoginCredentialsX>
            </UserInputTextFieldsX>
            <ConfirmationX>
              <div className="checkbox-outer">
                <div>
                  <CheckboxX
                    type="checkbox"
                    id="confirmation"
                    name="confirmation"
                    className="checkbox"
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
            <button>Create free Account</button>
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
