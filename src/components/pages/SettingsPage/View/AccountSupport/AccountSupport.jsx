import React, { useState } from "react";
import styled from "styled-components";

import DrawerProfileSettings from "../../../../General/Drawer/DrawerProfileSettings";
import GeneralHelp from "./GeneralHelp/GeneralHelp";
import CancelOffers from "./CancelOffers/CancelOffers";
import ContactSupport from "./ContactSupport/ContactSupport";
import CompromisedAccount from "./CompromisedAccount/CompromisedAccount";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import ContactSupportRoundedIcon from "@mui/icons-material/ContactSupportRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";

const AccountSupport = (props) => {
  const [openDrawer, setOpenDrawer] = useState("");

  const clickHandler = (label) => {
    setOpenDrawer(openDrawer !== label ? label : "");
  };

  return (
    <Wrapper>
      <h2>Profile Settings</h2>

      <CollabsableContainerX>
        <DrawerProfileSettings
          label={"General Help"}
          onClick={clickHandler}
          isOpen={"General Help" === openDrawer}
          icon={<HelpOutlineOutlinedIcon />}
        >
          <GeneralHelp />
        </DrawerProfileSettings>
        <DrawerProfileSettings
          label={"Contact Support"}
          onClick={clickHandler}
          isOpen={"Contact Support" === openDrawer}
          icon={<SupportAgentRoundedIcon />}
        >
          <ContactSupport />
        </DrawerProfileSettings>
        <DrawerProfileSettings
          label={"Help with a compromised account"}
          onClick={clickHandler}
          isOpen={"Help with a compromised account" === openDrawer}
          icon={<ReportGmailerrorredOutlinedIcon />}
        >
          <CompromisedAccount />
        </DrawerProfileSettings>
        <DrawerProfileSettings
          label={"Cancel all Ethereum listings and offers"}
          onClick={clickHandler}
          isOpen={"Cancel all Ethereum listings and offers" === openDrawer}
          icon={<HighlightOffOutlinedIcon />}
        >
          <CancelOffers />
        </DrawerProfileSettings>
      </CollabsableContainerX>
    </Wrapper>
  );
};

const CollabsableContainerX = styled.div`
  margin-top: 2rem;

  border: 1px solid var(--color-grey20);
  border-radius: 1rem;

  & > div {
    &:not(:last-child) {
      border-bottom: 1px solid var(--color-grey20);
    }
  }

  .drawer-toggler {
    margin: 1rem 1rem;
  }

  svg {
    size: 2rem;
  }
`;

const Wrapper = styled.div`
  & > h2 {
    font-size: 3rem;
    text-align: center;
  }
`;

export default AccountSupport;
