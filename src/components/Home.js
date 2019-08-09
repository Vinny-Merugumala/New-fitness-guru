import React from "react";
import routes from "../routes";
import { Link } from "react-scroll";

function Home() {
  return (
    <body className="home-big" id="home-big-return">
      <div className="middle-container-home">
        <img
          className="logo"
          src="https://fiverr-res.cloudinary.com/image/upload/t_attachment_thumb,q_auto,f_auto/v1/secured-attachments/message/delivery_attachments/2050301da5fc044b28a1f1e4859d792f-1565013592769/2.jpg?__cld_token__=exp=1565300715~hmac=e5601c4f984c4eb68c06948b8333a19a97e7b8953f7ef049ac097e18f54dd3bb"
          alt="logo"
        />
      </div>
      <div className="bottom-container-home">
        <h1>Simply Fitness</h1>
      </div>
      <div className="soft-scroll">
        <Link
          activeClass="active"
          to="mapHomePage"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <button class="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Click Here To Start
          </button>
        </Link>
      </div>
      {routes}
    </body>
  );
}

export default Home;
