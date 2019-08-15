import rp from "request-promise";
require("dotenv").config();

export const fetchLocations = (location = "", details = "") => {
  let options = {
    uri: "https://api.foursquare.com/v2/venues/search",
    qs: {
      client_id: process.env.REACT_APP_FOURSQUARE_CLIENT_ID,
      client_secret: process.env.REACT_APP_FOURSQUARE_CLIENT_SECRET,
      v: 20180323,
      near: location,
      limit: 100,
      intent: "browse",
      categoryId: "4bf58dd8d48988d175941735"
    },
    json: true
  };

  if (details.length > 0) {
    options.qs.query = details;
  }

  return rp(options)
    .then(response => {
      return response;
    })
    .catch(err => {
      console.log(err);
      return [];
    });
};
