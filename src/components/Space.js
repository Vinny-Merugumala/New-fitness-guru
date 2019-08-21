import React from "react";
import { Link } from "react-scroll";

function Space() {
  return (
    <body className="about-big" id="home-big-return">
      <div className="middle-container-home" />
      <div className="bottom-container-home">
        <h1>Simply Fitness</h1>
      </div>

      <div className="bottom-container-mini">
        <h2>
          Our mission is to deliver you all of your fitness needs. Use the
          search engine below to find fitness centers near you.
        </h2>
      </div>
      <div className="soft-scroll">
        <Link
          activeClass="active"
          to="map"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <button class="bg-blue-500 hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Click Here To Start
          </button>
        </Link>
      </div>
    </body>
  );
}

export default Space;
