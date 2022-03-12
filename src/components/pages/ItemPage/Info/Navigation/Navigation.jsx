import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import styled from "styled-components";

import TabBids from "./Tab/Tabs/TabBids";
import TabHome from "./Tab/Tabs/TabHome";
import Tab from "./Tab/Tab";

const Navigation = () => {
  const { path, url } = useRouteMatch();

  return (
    <Wrapper>
      <Switch>
        <Route path={path} exact>
          <TabHome />
        </Route>
        <Route path={`${path}/details`} exact>
          <Tab homePath={url} label={"Details"}>
            {"Details"}
          </Tab>
        </Route>
        <Route path={`${path}/bids`} exact>
          <Tab homePath={url} label={"Bids"}>
            <TabBids />
          </Tab>
        </Route>
        <Route path={`${path}/owners`} exact>
          <Tab homePath={url} label={"Owners"}>
            {"890890"}
          </Tab>
        </Route>
        <Route path={`${path}/history`} exact>
          <Tab homePath={url} label={"History"}>
            {"zzzzzzzzzzzzzz"}
          </Tab>
        </Route>
        <Route path={`${path}/more`} exact>
          <Tab homePath={url} label={"More"}>
            {"hhhhhhhhhhh"}
          </Tab>
        </Route>
      </Switch>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 2rem 1rem;
  height: 100%;
`;

export default Navigation;
