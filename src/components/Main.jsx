import React, { Suspense } from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";

import RequestsPage from "./pages/RequestsPage/RequestsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ItemPage2 from "./pages/ItemPage/ItemPage2";

const MarketplacePage = React.lazy(() =>
  import("./pages/MarketplacePage/MarketplacePage")
);

const Main = (props) => {
  return (
    <Wrapper>
      <Suspense fallback={<p>loading...</p>}>
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

          <Route path="/marketplace">
            <MarketplacePage />
          </Route>

          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </Suspense>
    </Wrapper>
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
