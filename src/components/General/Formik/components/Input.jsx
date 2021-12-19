import React from "react";
import { Field } from "formik";

function Input(props) {
  const { name, ...rest } = props;
  return <Field id={name} name={name} {...rest} />;
}

export default Input;
