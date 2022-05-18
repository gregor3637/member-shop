import React, { Suspense } from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";

import RequestsPage from "./pages/RequestsPage/RequestsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ItemPage2 from "./pages/ItemPage/ItemPage2";
import TrendingPage from "./pages/TrendingPage/TrendingPage";
import CollectionsPage from "./pages/CollectionsPage/CollectionsPage";
import ActivityPage from "./pages/ActivityPage/ActivityPage";
import AccountPage from "./pages/AccountPage/AccountPage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";

const MarketplacePage = React.lazy(() =>
  import("./pages/MarketplacePage/MarketplacePage")
);

const Main = (props) => {
  return (
    <Suspense fallback={<p>loading...</p>}>
      <Wrapper className="xxx-main">
        <Switch>
          <Route path="/" exact>
            <MainPage />
          </Route>

          <Route path="/login">
            <LoginPage />
          </Route>

          <Route path="/item/:quoteId">
            <ItemPage2 />
          </Route>

          <Route path="/requests/:data">
            <RequestsPage />
          </Route>

          <Route path="/requests/">
            <RequestsPage />
          </Route>

          <Route path="/trending/">
            <TrendingPage />
          </Route>

          <Route path="/collections/">
            <CollectionsPage />
          </Route>

          <Route path="/activity/">
            <ActivityPage />
          </Route>

          <Route path="/marketplace">
            <MarketplacePage />
          </Route>

          <Route path="/accout" exact>
            <AccountPage />
          </Route>

          <Route path="/accout/settings">
            <SettingsPage />
          </Route>

          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </Wrapper>
    </Suspense>
  );
};

const Wrapper = styled.main`
  background-color: white;
  flex: 1;
  flex-grow: 1;

  display: flex;
  flex-direction: column;
`;

export default Main;
