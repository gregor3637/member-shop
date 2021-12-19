import React from "react";
import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Field } from "formik";

function DatePicker(props) {
  const { name, ...rest } = props;

  return (
    <Field name={name}>
      {({ form, field }) => {
        const { setFieldValue } = form;
        const { value } = field;

        return (
          <DateView
            id={name}
            {...field}
            {...rest}
            selected={value}
            onChange={(val) => setFieldValue(name, val)}
          />
        );
      }}
    </Field>
  );
}

export default DatePicker;
