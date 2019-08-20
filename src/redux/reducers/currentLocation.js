import {
  CHANGE_CURRENT_LOCATION,
  RESET_CURRENT_LOCATION
} from "../../constants";

export const currentLocation = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_CURRENT_LOCATION: {
      return action.payload;
    }
    case RESET_CURRENT_LOCATION: {
      return {};
    }
    default: {
      return state;
    }
  }
};
