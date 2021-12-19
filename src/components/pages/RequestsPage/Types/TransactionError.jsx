import React from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import FormikControl from "../../../General/Formik/FormikControl";
import FormButton from "../../../General/Buttons/FormButton";

const TransactionError = (props) => {
  const onSubmit = (value, onSubmitProps) => {
    console.log("---------OnSubmit TransactionError--> ", value);
  };

  const initialValues = {
    email: "",
    walletAddress: "",
    transactionHash: "",
    subject: "",
    description: "",
    collectionURL: "",
    type: [],
    fakeItemUrl: "",
    originalItemUrl: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid Email Format")
      .required("Requester: Email: cannot be blank"),
    walletAddress: Yup.string().required("Wallet Address: cannot be blank"),
    transactionHash: Yup.string().required("Transaction Hash: cannot be blank"),
    subject: Yup.string().required("Subject: cannot be blank"),
    description: Yup.string().required("Description: cannot be blank"),
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
              label="Wallet Address"
              name="walletAddress"
            />
            <FormikControl
              control="input"
              type="text"
              label="Transaction Hash"
              instructionso='What is the link to the transaction? Please format reply as "www.etherscan.io/tx/transactionHash", without quotes. For multiple hashes, please separate with a comma. Learn how to find your transaction hash with this guide (https://support.opensea.io/hc/en-us/articles/4406007666579).'
              name="transactionHash"
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

export default TransactionError;
