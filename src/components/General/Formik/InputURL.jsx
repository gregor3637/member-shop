import React from "react";
import styled from "styled-components";
import { Field, ErrorMessage } from "formik";
import TextError from "./components/TextError";

const InputURL = ({ className: version, title, titleIcon, description, name, ...rest }) => {
  return (
    <Wrapper className={version}>
      <DisplayInfoX>
        <LabelX htmlFor={name}>
          <div>
            {titleIcon && titleIcon}
            {title}
          </div>
          {description && <span>{description}</span>}
        </LabelX>
        <FieldX id={name} name={name} {...rest} />
      </DisplayInfoX>
      <ErrorMessage name={name} component={TextError} />
    </Wrapper>
  );
};

const LabelX = styled.label`
  margin: 0 1rem;

  flex: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  span {
    color: var(--color-grey50);
    font-size: 1.2rem;
  }

  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-black);

  svg {
    width: 2rem;
    height: 2rem;
  }
`;

const FieldX = styled(Field)`
  padding: 0 2rem;
  flex: 50%;
  border: none;
  border-radius: 0.8rem;

  outline: none;
  border: 1px solid var(--color-grey20);

  &:hover {
    border: 1px solid var(--color-grey40);
  }

  &:focus {
    border: 1px solid var(--color-grey50);
  }
`;

const DisplayInfoX = styled.div`
  height: 4rem;
  display: flex;

  /* border: 1px solid var(--color-grey50); */
  border-radius: 0.8rem;
  background-color: var(--color-grey10);
`;

const Wrapper = styled.div``;

export default InputURL;
