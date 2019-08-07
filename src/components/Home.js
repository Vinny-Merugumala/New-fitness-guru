import React, { Component } from "react";
import "../styles/index.css";
import Background from "../styles/imgs/Yoga-Background.jpeg";
import "../app.css";

class Home extends Component {
  render() {
    const imageUrl = Background;
    return (
      <div className="home" style={{ backgroundImage: `url(${imageUrl})` }}>
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
      </div>
    );
  }
}

export default Home;
