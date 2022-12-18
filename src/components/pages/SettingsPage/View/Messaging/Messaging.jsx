import React, { useState } from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import CheckboxGroupAlert from "../../../../General/Formik/components/CheckboxGroupAlert";
import FormButton from "../../../../General/Buttons/FormButton";
import InputURL from "../../../../General/Formik/InputURL";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CurrencyIcon from "../../../../General/AssetCard/AssetCardInfo/CurrencyView/CurrencyIcon";
import EthGrey from "../../../../../img/svg/GreyCurrencies/Ethereum";
import SubmitFormButton from "../../components/SubmitFormButton/SubmitFormButton";

const checkboxOptions = [
  {
    key: "Item Sold",
    value: "cOption1",
    hint: "When someone purchased one of your items 111",
  },
  {
    key: "Bid Activity",
    value: "cOption2",
    hint: "When someone bids on one of your items",
  },
  {
    key: "Newsletter",
    value: "cOption3",
    hint: "Occasional updates from the team",
  },
];
const initialValues = { checkboxOptions: ["cOption1", "cOption2"] };

const validationSchema = Yup.object({
  checkboxOptions: Yup.array().required("Required"),
});

const Messaging = (props) => {
  const onSubmit = (value, onSubmitProps) => {
    console.log("--------- Messaging OnSubmit TransactionError--> ", value);
  };

  return (
    <Wrapper>
      <h2>Messaging</h2>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
        enableReinitialize
      >
        {(formik) => {
          return (
            <Form>
              <CheckboxGroupAlert
                type="email"
                name="checkboxOptions"
                options={checkboxOptions}
              />

              <BidThresholdX>
                <div>
                  <span>Minimum Bid Threshold</span>
                  <p>
                    Receive notifications only when you receive offers with a
                    <br />
                    value greater than or equal to this amount of ETH
                  </p>
                  {/* <p>value greater than or equal to this amount of ETH</p> */}
                </div>

                <InputURLX
                  title="ETH"
                  titleIcon={<EthGrey />}
                  // titleIcon={<CurrencyIcon currency={"ETH"} />}
                  description={"Ethereum"}
                  name="minBid"
                  placeholder={"0.005"}
                />
              </BidThresholdX>
              <SubmitFormButton
                type="submit"
                disabled={!formik.isValid || formik.isSubmitting}
              >
                Save
              </SubmitFormButton>
            </Form>
          );
        }}
      </Formik>
    </Wrapper>
  );
};

const BidThresholdX = styled.div`
  margin: 2rem 0;

  font-size: 1.6rem;

  span {
    font-weight: 600;
  }

  p {
    color: var(--color-grey40);
    white-space: wrap;
  }
`;

const InputURLX = styled(InputURL)`
  margin-top: 2rem;
  svg {
    width: 1.2rem;
    height: 1.2rem;
  }
`;

const Wrapper = styled.div`
  /* background: var(--test-r); */

  & > h2 {
    margin-bottom: 1.6rem;

    font-size: 3rem;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export default Messaging;
