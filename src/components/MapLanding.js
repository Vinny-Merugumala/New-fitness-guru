import React from "react";
import "../app.css";

import store from "../redux/store";
import { fetchLocations } from "../helpers/API";
import { populateLocations } from "../actions/populateLocations";
import { changeLocation, changeSearch } from "../actions/changeSearch";
import { openHomepage } from "../actions/openHomepage";
import { calculateAverageCoordinates } from "../helpers";
import changeMapFocus from "../actions/changeMapFocus";
import Buttons from "../components/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";

class MapLanding extends React.Component {
  state = {
    loading: false,
    badQuery: false
  };

  handleClick = (query, id) => event => {
    event.preventDefault();
    store.dispatch(changeSearch(query));
  };

  handleChange = event => {
    event.preventDefault();
    store.dispatch(changeLocation(event.target.value));
  };

  handleSubmit = (location, details) => event => {
    event.preventDefault();
    this.setState({ loading: true, badQuery: false });
    fetchLocations(location, details)
      .then(response => {
        const locations = response.response.venues;
        store.dispatch(populateLocations(response));
        store.dispatch(changeMapFocus(calculateAverageCoordinates(locations)));
        store.dispatch(openHomepage(false));
        this.setState({ loading: false });
      })
      .catch(err => {
        this.setState({ loading: false, badQuery: true });
      });
  };

  render() {
    const state = store.getState();
    const { location, detail } = state.search;
    const { controls, homepageIsOpen } = state;
    return (
      homepageIsOpen && (
        <div
          className="Landing__hero"
          aria-label="landing page with city background"
          id="map"
        >
          <h1 className="Landing__hero_main">Fitness Guru's</h1>
          <h2 className="Landing__hero_secondary">
            Find the Best Fitness Centers Around You
          </h2>
          <form className="Landing__form">
            <div className="Landing__form__buttons">
              <Buttons
                controls={controls}
                onClick={this.handleClick}
                variant="white"
              />
            </div>
            <label className="Landing__form__label">
              <div>
                <input
                  className="Landing__form__input"
                  onChange={this.handleChange}
                  type="text"
                  placeholder="City name..."
                />
                <SearchIcon />
              </div>
            </label>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              onClick={this.handleSubmit(location, detail)}
              disabled={this.state.loading}
            >
              Search
            </Button>
          </form>
          {this.state.loading && (
            <CircularProgress
              color="secondary"
              style={{ color: "#00bcd4" }}
              size={82}
            />
          )}
        </div>
      )
    );
  }
}
export default MapLanding;
