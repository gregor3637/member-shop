import React from "react";
import styled from "styled-components";
import { Field } from "formik";

const NotificationSettingsRadioButton = ({ label, name, options, ...rest }) => {
  return (
    <Field name={name} {...rest}>
      {({ field }) => {
        return options.map((option) => {
          return (
            <React.Fragment key={option.key}>
              <input
                type="radio"
                id={option.value}
                {...field}
                value={option.value}
                checked={field.value === option.value}
              />
              <label htmlFor={option.value}>{option.key}</label>
            </React.Fragment>
          );
        });
      }}
    </Field>
  );
};

const Wrapper = styled.div`
  background-color: green;
`;

export default NotificationSettingsRadioButton;
