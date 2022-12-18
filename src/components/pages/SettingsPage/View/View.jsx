import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import Profile from "./Profile/Profile";
import Messaging from "./Messaging/Messaging";
import Messaging2 from "./Messaging/Messaging2";
import Offers from "./Offers/Offers";
import Earnings from "./Earnings/Earnings";
import AccountSupport from "./AccountSupport/AccountSupport";
import NotFound from "./NotFound/NotFound";

const getView = (tab) => {
  const options = {
    profile: <Profile />,
    // messaging: <Messaging />,
    messaging: <Messaging2 />,
    offers: <Offers />,
    earnings: <Earnings />,
    "account support": <AccountSupport />,
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
