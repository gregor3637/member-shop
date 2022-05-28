import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import User from "./User/User";
import Alerts from "./Alerts/Alerts";
import Alerts2 from "./Alerts/Alerts2";
import NotFound from "./NotFound/NotFound";
import Earnings from "./Earnings/Earnings";

const getView = (tab) => {
  const options = {
    profile: <User />,
    messaging: <Alerts2 />,
    earnings: <Earnings />,
    notFound: <NotFound />,
  };

  return options[tab] || options[!tab ? "profile" : "notFound"];
};

const View = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const tab = queryParams.get("tab");

  return (
    <>
      <Wrapper>{getView(tab)}</Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  /* background: var(--test-y); */
  min-width: 60rem;
  /* margin: 0 auto; */
  padding: 2rem;

  flex: 1;
`;

export default View;
