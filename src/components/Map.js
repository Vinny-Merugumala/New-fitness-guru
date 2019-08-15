import React, { Component } from "react";
import ReactMapboxGl from "react-mapbox-gl";
import store from "../redux/store";
import { filterLocations } from "../helpers";
import resetCurrentLocation from "../actions/resetCurrentLocation";
import MapMarker from "./MapMarker";
import MyPopup from "./MyPopup";
require("dotenv").config();

const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAP_TOKEN
});

class MyMap extends Component {
  render() {
    const { currentLocation, filter, currentFocus } = this.props.data;
    const { venues } = this.props.data.locations.response;
    const filteredVenues = filterLocations(venues, filter);

    return (
      currentFocus && (
        <Map
          style="mapbox://styles/stlbabu/cjzbisj4l1a281cnwq56v0yaz"
          containerStyle={{ width: "100%", height: "100%" }}
          center={currentFocus}
          zoom={[13]}
          onClick={() => store.dispatch(resetCurrentLocation())}
        >
          {filteredVenues.map(venue => (
            <MapMarker key={venue.id} venue={venue} />
          ))}
          {currentLocation.id && <MyPopup currentLocation={currentLocation} />}
          {filteredVenues.length === 0}
        </Map>
      )
    );
  }
}

export default MyMap;
