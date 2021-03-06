import { combineReducers } from "redux";

import { homepageIsOpen } from "./reducer";
import { controls } from "./reducer";
import { currentLocation } from "./reducer";
import { currentFocus } from "./reducer";
import { filter } from "./reducer";
import { locations } from "./reducer";
import { search } from "./reducer";
import authreducer, { updateName, updateUsername, resetState } from "./auth";

export default combineReducers({
  homepageIsOpen,
  controls,
  currentLocation,
  currentFocus,
  filter,
  locations,
  search,
  updateName,
  updateUsername,
  resetState,
  authreducer
});
