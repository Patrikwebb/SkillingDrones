import * as React from "react";
import { Switch, Route, Redirect } from "react-router";

import Home from "components/pages/Users/Home";
import DroneDetail from "../DroneDetail";

import ScrollToTop from "components/common/ScrollToTop";

function UserRoutes() {
  return (
    <>
      <ScrollToTop>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/drone/:id/:name">
            <DroneDetail />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/">
            <Redirect to="/" />
          </Route>
        </Switch>
      </ScrollToTop>
    </>
  );
}

export default UserRoutes;
