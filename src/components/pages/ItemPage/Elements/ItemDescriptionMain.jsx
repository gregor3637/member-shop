import React, { useContext } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import ItemCardContext from "../../../../store/ItemCardContext";
import styled from "styled-components";
import TabBids from "./Tab/Tab_Bids";
import TabDetails from "./Tab/Tab_Details";
import TabOwners from "./Tab/Tab_Owners";
import TabHistory from "./Tab/Tab_History";
import TabMore from "./Tab/Tab_More";

const Styled = styled.div``;

const ItemDescriptionMain = (props) => {
  const match = useRouteMatch();

  const ctx = useContext(ItemCardContext);

  return (
    <Styled>
      <Switch>
        <Route path={match.path} exact>
          <TabDetails currency={ctx.currency} details={ctx.details} />
        </Route>
        <Route path={`${match.path}/bids`} exact>
          <TabBids bids={ctx.bids} />
        </Route>
        <Route path={`${match.path}/owners`} exact>
          <TabOwners owners={ctx.ownersData} />
        </Route>
        <Route path={`${match.path}/history`} exact>
          <TabHistory history={ctx.historyData} />
        </Route>
        <Route path={`${match.path}/more`} exact>
          <TabMore id={ctx.id} />
        </Route>
      </Switch>
    </Styled>
  );
};

export default ItemDescriptionMain;
