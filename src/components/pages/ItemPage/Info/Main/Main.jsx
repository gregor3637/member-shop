import React, { useContext } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

import TabBids from "./Tab/Tabs/TabBids/TabBids";
import TabHome from "./Tab/Tabs/TabHome";
import Tab from "./Tab/Tab";
import TabDetails from "./Tab/Tabs/TabDetails/TabDetails";
import ItemCardContext2 from "../../../../../store/Item/ItemCardContext2";
import Tab_Bids from "../../../../pages/ItemPage/Elements/Tab/Tab_Bids";

const Main = () => {
  const { path, url } = useRouteMatch();
  const ctx = useContext(ItemCardContext2);

  return (
    <Wrapper>
      <ScrollbarX forceVisible="y" autoHide={true}>
        <Switch>
          <Route path={path} exact>
            <TabHome />
          </Route>
          <Route path={`${path}/details`} exact>
            <Tab homePath={url} label={"Details"}>
              <TabDetails />
            </Tab>
          </Route>
          <Route path={`${path}/bids`} exact>
            <Tab homePath={url} label={"Bids"}>
              {/* <TabBids /> */}
              <Tab_Bids bids={ctx.bids.active} />
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
      </ScrollbarX>
    </Wrapper>
  );
};

const ScrollbarX = styled(SimpleBar)`
  height: 100%;
`;

const Wrapper = styled.div`
  padding: 2rem 1rem;
  height: 100%;
  overflow-y: auto;
  min-height: 0px;
`;

export default Main;
