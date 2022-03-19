import React from "react";
import styled from "styled-components";

import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import DropdownCheckButton from "../../Buttons/DropdownCheckButton/DropdownCheckButton";

const TickButton = ({ isSelected, label, onClick }) => {
  return (
    <DropdownCheckButton
      isSelected={isSelected}
      label={label}
      onClick={() => onClick(label)}
      ActiveIcon={<CheckSelectedX />}
      InactiveIcon={<CheckTransparentX />}
    />
  );
};

const CheckTransparentX = styled(DoneRoundedIcon)`
  color: var(--color-none);
`;
const CheckSelectedX = styled(DoneRoundedIcon)`
  color: var(--color-blue);
  transform: scale(1.5);
`;

export default TickButton;
