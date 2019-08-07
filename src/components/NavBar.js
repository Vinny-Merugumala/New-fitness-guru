import React from "react";
import { useAuth0 } from "../components/react-auth0-wrapper";
import { Link } from "react-router-dom";
import "../styles/index.css";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <body className="lg:px-16 px-6 flex  justify-end items-center flex-wrap bg-blue-400 py-2">
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
        <div class="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
          <nav class="flex justify-end">
            {!isAuthenticated && (
              <button
                class="inline-block text-sm px-5 py-3 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
                onClick={() => loginWithRedirect({})}
              >
                Log in
              </button>
            )}

            {isAuthenticated && (
              <button
                class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
                onClick={() => logout()}
              >
                Log out
              </button>
            )}

            {isAuthenticated && (
              <div class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                <Link
                  class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
                  to="/"
                >
                  Home
                </Link>
                <Link
                  class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
                  to="/profile"
                >
                  Profile
                </Link>
              </div>
            )}
          </nav>
        </div>
      </div>
    </body>
  );
};

export default NavBar;
