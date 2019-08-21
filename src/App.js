import React, { Component } from "react";
import "./styles/tailwind.css";
import "./reset.css";
import MapHome from "./components/MapHome";
// import Space from "./components/Space";
import Navbar from "./components/NavBar";
// import Home from "./components/Home";
import MapLanding from "./components/MapLanding";
import routes from "./routes";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        {routes}
        {/* <Home /> */}
        {/* <Space /> */}
        <MapLanding />
        <Header />
        <MapHome />
      </div>
    );
  }
}

export default App;
