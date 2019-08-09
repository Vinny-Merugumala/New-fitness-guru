import React from "react";
import { Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";
import MapHome from "./components/MapHome";
import Home from "./components/Home";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/MapHome" component={MapHome} />
    <PrivateRoute path="/profile" component={Profile} />
  </Switch>
);
