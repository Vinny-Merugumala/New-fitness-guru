import React from "react";
// import { Parallax } from "react-scroll-parallax";

function Space() {
  return (
    <div className="space-container" id="about">
      <div className="white-container">
        <div className="px-8 py-12 mt-4 md:mt-0 md:ml-6">
          <h1 className="text-5xl font-bold text-red-600 leading-tight mt-4 md:mt-0 md:ml-6">
            Fitness Gurus is a search service that makes finding your nearby
            fitness needs easier. Just input your city in the search below, and
            find nearby fitness centers.
            <span className="text-blue-500">
              ... Fitness Connection Free of charge. Use it.
            </span>
          </h1>
        </div>
      </div>
      {/* <Parallax className="parallax-pic" y={[-20, 20]} tagOuter="figure"> */}

      {/* </Parallax> */}
    </div>
  );
}

export default Space;
