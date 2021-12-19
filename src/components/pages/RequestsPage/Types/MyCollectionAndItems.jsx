import React from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import FormikControl from "../../../General/Formik/FormikControl";
import FormButton from "../../../General/Buttons/FormButton";

const MyCollectionAndItems = (props) => {
  const onSubmit = (value, onSubmitProps) => {
    console.log("---------OnSubmit MyCollectionAndItems--> ", value);
  };

   const initialValues = {
    email: "gogogo@abv.bg",
    subject: "MyCollectionAndItems subject",
    description: "MyCollectionAndItems description",
    walletAddress: "MyCollectionAndItems_x321312fr213213",
    collectionURL: "MyCollectionAndItems_Collection",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid Email Format")
      .required("Requester: Email: cannot be blank"),
    subject: Yup.string().required("Subject: cannot be blank"),
    description: Yup.string().required("Description: cannot be blank"),
    walletAddress: Yup.string().required("Wallet Address: cannot be blank"),
    collectionURL: Yup.string().required("Transaction Hash: cannot be blank"),
  });

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
              control="textarea"
              type="text"
              label="Description"
              instructions="Please enter as many details as you can. We will respond as soon as possible."
              name="description"
            />
            <FormikControl
              control="input"
              type="text"
              label="Wallet Address"
              instructions="Your crypto wallet address. It starts with '0x'. Please DO NOT enter your residential or street address."
              name="walletAddress"
            />
            <FormikControl
              control="input"
              type="text"
              label="URL to your collection"
              instructions="Please enter the full URL to your collection URL (ie. oepnsea.io/collection/(yourCollectionName)"
              name="collectionURL"
            />
            <FormButtonX
              type="submit"
              disabled={!formik.isValid || formik.isSubmitting}
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

export default MyCollectionAndItems;
