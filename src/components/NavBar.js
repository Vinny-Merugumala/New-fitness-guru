import React from "react";
import { useAuth0 } from "../components/react-auth0-wrapper";
import { Link } from "react-router-dom";
import "../styles/index.css";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div className="nav-big">
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
              {isAuthenticated && (
                <div>
                  <Link to="/">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                      Home
                    </button>
                  </Link>
                  <Link to="/profile">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                      Profile
                    </button>
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
      <div className="middle-container-home">
        <img
          className="logo"
          src="https://fiverr-res.cloudinary.com/image/upload/t_attachment_thumb,q_auto,f_auto/v1/secured-attachments/message/delivery_attachments/2050301da5fc044b28a1f1e4859d792f-1565013592769/2.jpg?__cld_token__=exp=1565212677~hmac=9b012a25b2002a6907bd875e3639c2bc45f3012a472afed91301a2eb30b7e082"
          alt="logo"
        />
      </div>
      <div className="bottom-container-home">
        <h1>Simply Fitness</h1>
      </div>
      <div className="soft-scroll">
        <Link to="/searchBar">
          <button class="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Click Here
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
