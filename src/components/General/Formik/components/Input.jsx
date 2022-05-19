import React from "react";
import { Field } from "formik";

function Input({ name, ...rest }) {
  return <Field id={name} name={name} {...rest} />;
}

export default Input;
