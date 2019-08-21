import React from "react";
import { Switch, Route } from "react-router-dom";
import Account from "./components/Account";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import MapLanding from "./components/MapLanding";
import About from "./components/Space";

export default (
  <Switch>
    <Route path="/register" component={Register} />
    <Route path="/account" component={Account} />
    <Route path="/login" component={Login} />
    <Route exact path="/" component={Home} />
    <Route path="/mapLanding" component={MapLanding} />
    <Route path="/about" component={About} />
    <Route path="/" render={() => <h1>404 page not found</h1>} />
  </Switch>
);
