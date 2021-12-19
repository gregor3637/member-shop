import React, { useState } from "react";
import styled from "styled-components";
import Select from "react-select";

import FAIcon from "../../FAIcon/FAIcon";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { ObtainReportComponents } from "./ReportAdditionaElements";

const reasonsMap = new Map([
  ["fake", { value: "fake", label: "Fake collection or possible scam" }],
  [
    "sensitive",
    { value: "sensitive", label: "Explicit and sensitive content" },
  ],
  ["spam", { value: "spam", label: "Spam" }],
  ["stolen", { value: "stolen", label: "Might be stolen" }],
  ["other", { value: "other", label: "Other" }],
]);

const ReportPopup = (props) => {
  // eslint-disable-next-line 
  const [isSubmitOngoing, setIsSubmitOngoing] = useState(false);
  const [reportType, setReportType] = useState(null);
  const [additionalFormData, setAdditionalFormData] = useState(null);

  const onChange = (selectedOpts, { option: currentSelectedOpt }) => {
    setReportType(selectedOpts.value);
  };
  
// eslint-disable-next-line 
  const sendReport = () => {
    console.log("asd");
  };

  const reportCaseComponents = ObtainReportComponents(
    reportType,
    // props.onClose,
    props.onClose,
    setAdditionalFormData
  );

  const onSubmitHandler = (ev) => {
    console.log("ReoprtPopup | onSubmitHandler 0");
    console.log(additionalFormData);
    console.log("ReoprtPopup | onSubmitHandler 1");
    ev.preventDefault();

    setIsSubmitOngoing(true);

    setTimeout(() => {
      setIsSubmitOngoing(false);
      console.log("---------------- onSubmitHandler");
      props.onClose();
    }, 2000);
  };

  return (
    <Styled>
      <CloseButtonX onClick={props.onClose}>
        <FAIcon icon={faTimes}></FAIcon>
      </CloseButtonX>
      <img src="" alt="" />
      <FormX onSubmit={onSubmitHandler}>
        <FormHeadingX>Report this item</FormHeadingX>
        <section>
          <label htmlFor="zzzast">I think this item is...</label>
          <SelectX
            placeholder="Select a reason"
            options={[...reasonsMap.values()]}
            onChange={onChange}
          />
          {reportCaseComponents}
        </section>
      </FormX>
    </Styled>
  );
};

const SelectX = styled(Select)`
  font-size: 1.4rem;
`;

const Styled = styled.div`
  position: fixed;
  z-index: 999;
  right: 50%;
  top: 20%;
  transform: translateX(50%);

  background-color: red;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 50rem;
  background-color: white;

  border-radius: 1rem;
`;

const CloseButtonX = styled.button`
  padding: 0.5rem;
  position: absolute;
  right: 2rem;
  top: 2rem;

  background-color: transparent;
  border: none;

  cursor: pointer;
`;

const FormHeadingX = styled.div`
  width: 100%;
  padding: 2rem 0;

  text-align: center;
  font-size: 2rem;
  font-weight: 600;

  border-bottom: 1px solid var(--color-border);
`;

const FormX = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  section {
    flex: 1;
    width: 100%;

    padding: 3rem 2rem;

    display: flex;
    flex-direction: column;

    label {
      padding-bottom: 1rem;

      font-size: 1.6rem;
      font-weight: 700;
    }
  }

  footer {
    flex: 0;
  }
`;

export default ReportPopup;
