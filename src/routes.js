import React from "react";
import { Switch } from "react-router-dom";
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";
// import MapHome from "./components/MapHome";
// import Home from "./components/Home";

export default (
  <Switch>
    {/* <Route path="/home" component={Home} /> */}
    {/* <Route path="/MapHome" component={MapHome} /> */}
    <PrivateRoute path="/profile" component={Profile} />
  </Switch>
);
