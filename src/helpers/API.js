import rp from "request-promise";
require("dotenv").config();

export const fetchLocations = (location = "", details = "") => {
  let options = {
    uri: "https://api.foursquare.com/v2/venues/search",
    qs: {
      client_id: process.env.FOURSQUARE_CLIENT_ID,
      client_secret: process.env.FOURSQUARE_CLIENT_SECRET,
      v: 20180323,
      near: location,
      limit: 30,
      intent: "browse"
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
