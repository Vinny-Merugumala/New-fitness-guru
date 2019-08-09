import React, { Component } from "react";
import Map from "./Map";

class MapHome extends Component {
  render() {
    return (
      <div className="mapHome-container" id="mapHomePage">
        <Map
          google={this.props.google}
          center={{ lat: 32.7773406, lng: -96.797665 }}
          height="300px"
          zoom={15}
        />
      </div>
    );
  }
}

export default MapHome;
