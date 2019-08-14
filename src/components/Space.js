import React from "react";
import { Parallax } from "react-scroll-parallax";

function Space() {
  return (
    <div className="space-container" id="about">
      <div className="white-container">
        <h1>hi</h1>
      </div>
      {/* <Parallax className="parallax-pic" y={[-20, 20]} tagOuter="figure"> */}
      <div clasName="parallax-pic">
        <img
          className="parallax-pic"
          src="https://c.wallhere.com/photos/91/f3/working_out_gyms_smoke-1421271.jpg!d"
          alt="sunlogo"
        />
      </div>
      {/* </Parallax> */}
    </div>
  );
}

export default Space;
