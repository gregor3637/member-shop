import React from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import FormikControl from "../../../General/Formik/FormikControl";
import FormButton from "../../../General/Buttons/FormButton";

const initialValues = {
  email: "",
  subject: "",
  type: [],
  fakeItemUrl: "",
  originalItemUrl: "",
  description: "",
};

const selectOptions = [
  { label: "FraudulentActivity", value: "Fraudulent Activity" },
  { label: "Copyright", value: "Copyright infrigement" },
  { label: "Explicit", value: "Explicit and sensitive content" },
];

initialValues.email = "TrustAndSafety@abv.bg";
initialValues.subject = "TrustAndSafety subject";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid Email Format").required("Required"),
  subject: Yup.string().required("Required"),
  type: Yup.array().min(1, "Required at least one"),
});

const TrustAndSafety = (props) => {
  const onSubmit = (value, onSubmitProps) => {
    console.log("---------OnSubmit TrustAndSafety--> ", value);
  };

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
      enableReinitialize
    >
      {(formik) => {
        return (
          <Form>
             <FormikControl
              control="input"
              type="email"
              label="Your email address"
              name="email"
            />
            <FormikControl
              control="input"
              type="text"
              label="Subject"
              name="subject"
            />
            <FormikControl
              control="selectInput"
              label="Type of report"
              options={selectOptions}
              isMulti={true}
              placeholder={"Choose type"}
              name="type"
            />
            <FormikControl
              control="input"
              type="text"
              label="URL to item/collection you wish to report"
              name="fakeItemUrl"
            />
            <FormikControl
              control="input"
              type="text"
              label="URL to legitimate asset or works, on or off OpenSea (proof of authorship)(optional) "
              name="originalItemUrl"
            />
            <FormikControl
              control="textarea"
              type="text"
              label="Description"
              instructions="Please enter as many details as you can."
              name="description"
            /> 
            <FormButtonX
              type="submit"
              // disabled={!formik.isValid || formik.isSubmitting}
            >
              Submit
            </FormButtonX>
          </Form>
        );
      }}
    </Formik>
  );
};

const FormButtonX = styled(FormButton)``;

export default TrustAndSafety;
