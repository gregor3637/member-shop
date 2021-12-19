import React from "react";
import { Field } from "formik";

function Textarea(props) {
  const { name, ...rest } = props;
  return <Field as="textarea" id={name} name={name} {...rest} />;
}

export default Textarea;
