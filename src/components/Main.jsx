import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";

import ItemPage from "./pages/ItemPage/ItemPage";
import RequestsPage from "./pages/RequestsPage/RequestsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import MarketPageNew from "./pages/MarketPage/MarketPageNew";

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
          <MarketPageNew/>
        </Route>

        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </Styled>
  );
};

const Styled = styled.main`
  height: 100%;
  padding-top: 7rem;


  display: flex;
  flex-direction: column;
`;

export default Main;
