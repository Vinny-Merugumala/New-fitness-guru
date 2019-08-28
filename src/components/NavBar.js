import React, { Component } from "react";
import "../app.css";
import { Link } from "react-router-dom";
import "../styles/index.css";
import axios from "axios";

class NavBar extends Component {
  logout() {
    axios
      .get("/auth/logout")
      .then(() => {
        this.props.updateUser({});
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <body class="antialiased bg-gray-200">
        <header className="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2">
          <div className="flex-1 flex justify-between items-center" />

          <label for="menu-toggle" class="pointer-cursor lg:hidden block">
            <svg
              className="fill-current text-gray-900"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </label>
          <input class="hidden" type="checkbox" id="menu-toggle" />

          <div
            class="hidden lg:flex lg:items-center lg:w-auto w-full"
            id="menu"
          >
            <nav>
              <ul class="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
                <li>
                  <Link
                    to="/login"
                    class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <button
                    type="submit"
                    class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                    onClick={this.logout}
                  >
                    Logout
                  </button>
                </li>
                <li>
                  <Link
                    to="/about"
                    class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/account"
                    class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                  >
                    Account
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </body>
    );
  }
}

export default NavBar;
