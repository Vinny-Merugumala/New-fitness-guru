import React from "react";
import { useAuth0 } from "../components/react-auth0-wrapper";
import { Link } from "react-scroll";
import "../styles/index.css";
import { Link as RouteLink } from "react-router-dom";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div className="navbar">
      <body className="lg:px-16 px-6 flex  justify-end items-center flex-wrap py-4">
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto justify-end">
          <label for="menu-toggle" class="cursor-pointer lg:hidden block">
            <svg
              class="fill-current text-white-900"
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
            <nav class="flex justify-end">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  About
                </button>
              </Link>
              <div>
                <Link
                  activeClass="active"
                  // to="/home"
                  to="home-big-return"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Home
                  </button>
                </Link>
              </div>
              {isAuthenticated && (
                <div>
                  <Link
                    activeClass="active"
                    to="profile"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <RouteLink to="/profile">
                      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Profile
                      </button>
                    </RouteLink>
                  </Link>
                </div>
              )}
              {!isAuthenticated && (
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  onClick={() => loginWithRedirect({})}
                >
                  Log in
                </button>
              )}

              {isAuthenticated && (
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  onClick={() => logout()}
                >
                  Log out
                </button>
              )}
            </nav>
          </div>
        </div>
      </body>
    </div>
  );
};

export default NavBar;
