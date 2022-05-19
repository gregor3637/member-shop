import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import User from "./User/User";
import Notifications from "./Notifications/Notifications";
import Alerts from "./Alerts/Alerts";
import NotFound from "./NotFound/NotFound";

const getView = (tab) => {
  const options = {
    profile: <User />,
    // notifications: <Notifications />,
    // alerts: <Alerts />,
    notFound: <NotFound />,
  };

  return options[tab] || options["notFound"];
};

const View = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const tab = queryParams.get("tab");

  return <Wrapper>{getView(tab)}</Wrapper>;
};

const Wrapper = styled.div`
  min-width: 60rem;
  margin: 0 auto;
  padding: 2rem;

  flex: 1;
`;

export default View;
