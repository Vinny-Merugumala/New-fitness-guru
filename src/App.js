import React, { Component } from "react";
import "./styles/tailwind.css";
import NavBar from "./components/NavBar";
import routes from "./routes";
import "./reset.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />

        {routes}
      </div>
    );
  }
}

export default App;
