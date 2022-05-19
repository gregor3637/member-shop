import React, { useState } from "react";
import styled from "styled-components";
import Select from "react-select";

import useQuery from "../../../hooks/useQuery";
import RequestControl from "./RequestControl";

const selectOptions = {
  default: { value: "default", label: "-" },
  TrustAndSafety: {
    value: "TrustAndSafety",
    label: "Trust & Safety Report",
  },
  MyCollectionAndItems: {
    value: "MyCollectionAndItems",
    label: "My Collections & Items",
  },
  TransactionError: {
    value: "TransactionError",
    label: "Transaction Error",
  },
};

const RequestsPage = (props) => {
  let query = useQuery();
  let ticketFormId = query.get("ticket_form_id");
  const initialSelect = ticketFormId === null ? "default" : "TrustAndSafety";

  // eslint-disable-next-line
  const [reportType, setReportType] = useState(initialSelect);

  const [formData, setFormData] = useState(RequestControl(initialSelect));

  const onSelectChanged = (selectedOpts) => {
    setReportType(selectedOpts.value);
    setFormData(RequestControl(selectedOpts.value));
  };

  return (
    <WrapperX>
      <h1>Submit a request</h1>
      <DivX>
        <label htmlFor="">How can we help?</label>

        <SelectX
          options={[...Object.values(selectOptions)]}
          onChange={onSelectChanged}
          defaultValue={{ ...selectOptions[initialSelect] }}
        />
      </DivX>
      {formData}
    </WrapperX>
  );
};

const WrapperX = styled.div`
  /* background-color: var(--background-light-color); */
  width: 80rem;
  height: 100%;
  margin: 0 auto;
  padding: 0 10rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 1.6rem;

  h1 {
    padding-bottom: 2rem;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;

    label {
      font-size: 1.4rem;
      margin-top: 2rem;
    }

    input,
    textarea {
      padding: 0.1rem 0.5rem;
      font-size: inherit;
      border-radius: 0.5rem;
      border: 0.1rem solid var(--color-button-dark-inactive);

      &:focus {
        outline: none;
        border: 0.1rem solid var(--color-black);
      }
    }

    textarea {
      height: 150px;
    }
  }
`;

const DivX = styled.div`
  width: 100%;
  align-self: center;
`;

const SelectX = styled(Select)`
  font-size: 1.4rem;
  max-width: 100%;
`;

export default RequestsPage;
