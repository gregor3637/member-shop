import React from "react";
import { Field } from "formik";

function RadioButton(props) {
  const { label, name, options, ...rest } = props;

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
}

export default RadioButton;
