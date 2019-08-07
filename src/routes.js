import React from "react";
import { Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";
import SearchHome from "./components/SearchHome";
import NavBar from "./components/NavBar";

export default (
  <Switch>
    <Route exact path="/" component={NavBar} />
    <Route path="/searchHome" component={SearchHome} />
    <PrivateRoute path="/profile" component={Profile} />
  </Switch>
);
