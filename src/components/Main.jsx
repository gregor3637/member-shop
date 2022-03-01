import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";

import ItemPage from "./pages/ItemPage/ItemPage";
import RequestsPage from "./pages/RequestsPage/RequestsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import MarketplacePage from "./pages/MarketplacePage/MarketplacePage";


const Main = (props) => {
  return (
    <Styled>
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>

        <Route path="/login">
          <LoginPage />
        </Route>

        <Route path="/item/:quoteId">
          <ItemPage />
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
    </Styled>
  );
};

const Styled = styled.main`
  background-color: white;
  flex: 1;
  flex-grow: 1;

  display: flex;
  flex-direction: column;
`;

export default Main;
