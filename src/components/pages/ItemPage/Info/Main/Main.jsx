import React, { useContext } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import styled from "styled-components";

import TabBids from "./Tab/Tabs/TabBids/TabBids";
import TabNavigationButtons from "./Tab/Tabs/TabNavigation/TabNavigationButtons";
import TabDetails from "./Tab/Tabs/TabDetails/TabDetails";
import ItemCardContext2 from "../../../../../store/Item/ItemCardContext2";
import TabHistory from "./Tab/Tabs/TabHistory/TabHistory";

const Main = () => {
  const { path } = useRouteMatch();
  const ctx = useContext(ItemCardContext2);

  return (
    <Wrapper>
      <Switch>
        <Route path={path} exact>
          <TabNavigationButtons />
        </Route>
        <Route path={`${path}/details`} exact>
          <TabDetails />
        </Route>
        <Route path={`${path}/bids`} exact>
          <TabBids bids={ctx.bids.active} />
        </Route>
        <Route path={`${path}/history`} exact>
          <TabHistory history={ctx.itemHistory} />
        </Route>
        <Route path={`${path}/more`} exact>
          {"hhhhhhhhhhhzzzzzzzzzzz"}
        </Route>
      </Switch>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 1;
  padding: 2rem 1rem;
  min-height: 0px;
`;

export default Main;
