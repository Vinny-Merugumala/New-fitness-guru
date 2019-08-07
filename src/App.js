import React, { Component } from "react";
import "./styles/tailwind.css";
import NavBar from "./components/NavBar";
import routes from "./routes";
import "./reset.css";
import SearchHome from "./components/SearchHome";

class App extends Component {
  render() {
    return (
      <div className="App">
        {routes}
        <SearchHome />
      </div>
    );
  }
}

export default App;
