import React, { Component } from "react";
import store from "../redux/store";
import "../app.css";

import LocationList from "./LocationList";
import Map from "../components/Map";

class MapHome extends Component {
  render() {
    const state = store.getState();
    return (
      !state.homepageIsOpen && (
        <div className="Main">
          <LocationList data={state} />
          <Map data={state} />
        </div>
      )
    );
  }
}

export default MapHome;
