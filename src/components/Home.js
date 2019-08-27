import React from "react";
// import routes from "../routes";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
import Img from "../styles/imgs/2.jpg";

function Home() {
  return (
    <body className="home-big" id="home-big-return">
      <div className="middle-container-home">
        <img className="logo" src={Img} alt="logo" />
      </div>
      <div className="bottom-container-home">
        <h1>Simply Fitness</h1>
      </div>
      <div className="bottom-container-mini">
        <h2>FIND YOUR NEARBY FITNESS NEEDS</h2>
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

export default Home;
