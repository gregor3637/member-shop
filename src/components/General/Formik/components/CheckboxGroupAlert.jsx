import React from "react";
import styled from "styled-components";
import { Field } from "formik";

function CheckboxGroupAlert(props) {
  const { label, name, options, ...rest } = props;

  return (
    <Field name={name} {...rest}>
      {({ field }) => {
        return options.map((option) => {
          return (
            <Wrapper key={option.key}>
              <input
                type="checkbox"
                id={option.value}
                {...field}
                value={option.value}
                checked={field.value.includes(option.value)}
              />
              <label htmlFor={option.value}></label>
              <InfoX>
                {/* <label htmlFor={option.value}> */}
                <span>{option.key}</span>
                {option.hint && <p>{option.hint}</p>}
                {/* </label> */}
              </InfoX>
            </Wrapper>
          );
        });
      }}
    </Field>
  );
}

const InfoX = styled.div`
  font-size: 1.4rem;

  span {
    font-weight: 600;
  }
  p {
    display: block;

    font-weight: 500;
    color: var(--color-grey40);
  }
`;

const Wrapper = styled.div`
  padding: 1rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  border: 1px solid var(--color-grey40);
  border-radius: 1rem;

  label {
    position: relative;
    background-color: #fff;
    border: 2px solid #ccc;
    border-radius: 50%;
    cursor: pointer;
    height: 28px;
    left: 0;
    top: 0;
    width: 28px;
  }

  label:after {
    border: 2px solid #fff;
    border-top: none;
    border-right: none;
    content: "";
    height: 6px;
    left: 6px;
    opacity: 0;
    position: absolute;
    top: 8px;
    transform: rotate(-45deg);
    width: 12px;
  }

  input[type="checkbox"] {
    visibility: hidden;
    display: none;
  }

  input[type="checkbox"]:checked + label {
    background-color: var(--color-blue);
    border-color: var(--color-blue);
  }

  input[type="checkbox"]:checked + label:after {
    opacity: 1;
  }
`;

export default CheckboxGroupAlert;
