import React from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import NotificationItem from "./NotificationItem/NotificationItem";
import SubmitFormButton from "../../components/SubmitFormButton/SubmitFormButton";
import NotificationSettingsRadioButton from "../../../../General/Formik/components/custom/NotificationSettingsRadioButton";
import RadioButton from "../../../../General/Formik/components/RadioButton";
import RadioTest from "./RadioTest";
import EthGrey from "../../../../../img/svg/GreyCurrencies/Ethereum";
import FormikControl from "../../../../General/Formik/FormikControl";
import InputURL from "../../../../General/Formik/InputURL";

const initialValues = {
  soldItemNotice: "none",
  bidNotice: "notificationt",
  newsletterNotice: "alert",
  minBid: "0.005",
};

const radioOptions = [
  { key: "alert", value: "alert" },
  { key: "notificationt", value: "notificationt" },
  { key: "none", value: "none" },
];

const Alerts2 = (props) => {
  const onSubmit = (value, onSubmitProps) => {
    console.log("---------Alerts2 OnSubmit --> ", value);
  };

  return (
    <Wrapper>
      <h2>Messaging</h2>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        // validationSchema={validationSchema}
        enableReinitialize
      >
        {(formik) => {
          return (
            <Form>
              <RadioTest
                title={"Item Sold"}
                description={"When someone purchased one of your items"}
                name="soldItemNotice"
                options={radioOptions}
              />
              <RadioTest
                title={"Bid Activity"}
                description={"When someone bids on one of your items"}
                name="bidNotice"
                options={radioOptions}
              />
              <RadioTest
                title={"Newsletter"}
                description={"Occasional updates from the team"}
                name="newsletterNotice"
                options={radioOptions}
              />
              <BidThresholdX>
                <div>
                  <span>Minimum Bid Threshold</span>
                  <p>
                    Receive notifications only when you receive offers with a
                    <br />
                    value greater than or equal to this amount of ETH
                  </p>
                </div>

                <InputURL
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
  margin: 6rem 0 2rem 0;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  font-size: 1.6rem;

  span {
    font-weight: 600;
  }

  p {
    color: var(--color-grey40);
    white-space: wrap;
  }
`;

const NotificationsContainerX = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Wrapper = styled.div`
  & > h2 {
    margin-bottom: 1.6rem;

    font-size: 3rem;
    text-align: center;
  }
`;

export default Alerts2;
