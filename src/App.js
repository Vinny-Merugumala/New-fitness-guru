import React, { Component } from "react";
import "./styles/tailwind.css";
// import routes from "./routes";
import "./reset.css";
import MapHome from "./components/MapHome";
import Space from "./components/Space";
import Navbar from "./components/NavBar";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
        <Space />
        <MapHome />
      </div>
    );
  }
}

export default App;
