import React from "react";
import { ErrorMessage } from "formik";
import styled from "styled-components";

import Input from "./components/Input";
import RadioButton from "./components/RadioButton";
import Select from "./components/Select";
import Textarea from "./components/Textarea";
import CheckboxGroup from "./components/CheckboxGroup";
import DatePicker from "./components/DatePicker";
import TextError from "./components/TextError";
import SelectInput from "./components/SelectInput";

function FormikControl({
  className: version,
  control,
  label,
  name,
  instructions,
  ...rest
}) {
  let component = null;
  switch (control) {
    case "input":
      component = <Input name={name} {...rest} />;
      break;

    case "textarea":
      component = <Textarea name={name} {...rest} />;
      break;

    case "select":
      component = <Select name={name} {...rest} />;
      break;
    case "selectInput":
      component = <SelectInput name={name} {...rest} />;
      break;

    case "radio":
      component = <RadioButton name={name}  {...rest} />;
      break;

    case "checkbox":
      component = <CheckboxGroup name={name} label={label} {...rest} />;
      break;

    case "date":
      component = <DatePicker name={name} {...rest} />;
      break;

    default:
      component = null;
      break;
  }

  return (
    <Wrapper className={version}>
      <LabelX htmlFor={name}>{label}</LabelX>
      {component}
      {instructions && <PX>{instructions}</PX>}
      <ErrorMessage name={name} component={TextError} />
    </Wrapper>
  );
}

const PX = styled.p`
  font-size: 1.2rem;
`;
const LabelX = styled.label`
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-black);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  .error {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--color-red-pale);
  }
`;

export default FormikControl;
