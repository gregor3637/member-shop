import React from "react";

import FakeOrStolen from "./FakeOrStolen";
import Other from "./Other";
import StolenComponent from "./StolenComponent";
import FormButton from "../../Buttons/FormButton";

export const ObtainReportComponents = (
  reportId,
  onClose,
  setAdditionalFormData
) => {
  const data = {
    fake: <FakeOrStolen setAdditionalFormData={setAdditionalFormData} />,
    sensitive: <FormButton>Report</FormButton>,
    spam: <FormButton>Report</FormButton>,
    stolen: <StolenComponent onClose={onClose} />,
    other: <Other onClose={onClose} />,
    default: <FormButton disabled>Report</FormButton>,
  };

  let el = data[reportId] ? data[reportId] : data["default"];

  return el;
};
