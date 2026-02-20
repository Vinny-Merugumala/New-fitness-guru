import axios from "axios";

export const fetchLocations = (location = "", details = "") => {
  let params = {
    client_id: process.env.REACT_APP_FOURSQUARE_CLIENT_ID,
    client_secret: process.env.REACT_APP_FOURSQUARE_CLIENT_SECRET,
    v: 20180323,
    near: location,
    limit: 100,
    intent: "browse",
    categoryId: "4bf58dd8d48988d175941735"
  };

  if (details.length > 0) {
    params.query = details;
  }

  return axios
    .get("https://api.foursquare.com/v2/venues/search", { params })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.log(err);
      return [];
    });
};
