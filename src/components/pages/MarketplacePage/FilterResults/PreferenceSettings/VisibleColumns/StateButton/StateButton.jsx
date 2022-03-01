import React, { useState } from "react";
import styled from "styled-components";

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import DropdownCheckButton from "../../../../../../General/Buttons/DropdownCheckButton/DropdownCheckButton";

const VisibilityOffIconX = styled(VisibilityOffIcon)`
  color: var(--color-grey50);
`;

const RemoveRedEyeIconX = styled(RemoveRedEyeIcon)`
  color: var(--color-blue);
`;

const StateButton = ({ label, onClick }) => {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <DropdownCheckButton
      isSelected={isChecked}
      label={label}
      onClick={() => {
        onClick();
        setIsChecked((old) => !old);
      }}
      InactiveIcon={<VisibilityOffIconX />}
      ActiveIcon={<RemoveRedEyeIconX />}
    />
  );
};

export default StateButton;
