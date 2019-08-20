// initial state
const initialState = {
  location: "",
  detail: "Gym / Fitness Center"
};

// constants
export const OPEN_HOMEPAGE = "OPEN_HOMEPAGE";
export const FETCH_LOCATIONS = "FETCH_LOCATIONS";
export const CHANGE_CURRENT_LOCATION = "CHANGE_CURRENT_LOCATION";
export const RESET_CURRENT_LOCATION = "RESET_CURRENT_LOCATION";
export const FOCUS_MAP = "FOCUS_MAP";
export const PRESS_CONTROL_BUTTON = "PRESS_CONTROL_BUTTON";
export const CHANGE_QUERY_FROM_BUTTON = "CHANGE_QUERY_FROM_BUTTON";
export const CHANGE_LOCATION_FROM_INPUT = "CHANGE_LOCATION_FROM_INPUT";
export const APPLY_NEW_FILTER = "APPLY_NEW_FILTER";

// actions
export function changeCurrentLocation(newLocation) {
  return {
    type: CHANGE_CURRENT_LOCATION,
    payload: newLocation
  };
}
export function changeMapFocus(coordinates) {
  return {
    type: FOCUS_MAP,
    payload: coordinates
  };
}
export function changeSearch(newQuery) {
  return {
    type: CHANGE_QUERY_FROM_BUTTON,
    payload: newQuery
  };
}
export function changeLocation(newLocation) {
  return {
    type: CHANGE_LOCATION_FROM_INPUT,
    payload: newLocation
  };
}
export function openHomepage(nextState) {
  return {
    type: OPEN_HOMEPAGE,
    payload: nextState
  };
}
export function populateLocations(locations) {
  return {
    type: FETCH_LOCATIONS,
    payload: locations
  };
}
export function applynewFilter(newFilter) {
  return {
    type: APPLY_NEW_FILTER,
    payload: newFilter
  };
}
export function pressControlButton(id) {
  return {
    type: PRESS_CONTROL_BUTTON,
    payload: id
  };
}
export function resetCurrentLocation() {
  return {
    type: RESET_CURRENT_LOCATION
  };
}

//reducers
const buttonControl = [];

export const controls = (state = buttonControl, action) => {
  switch (action.type) {
    case PRESS_CONTROL_BUTTON: {
      let newState = state.map(record => ({
        active: false,
        query: record.query,
        icon: record.icon
      }));
      newState[action.payload].active = true;
      return newState;
    }
    default: {
      return state;
    }
  }
};

export const currentFocus = (state = null, action) => {
  switch (action.type) {
    case FOCUS_MAP: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

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

export const filter = (state = "", action) => {
  switch (action.type) {
    case APPLY_NEW_FILTER: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export const homepageIsOpen = (state = true, action) => {
  switch (action.type) {
    case OPEN_HOMEPAGE: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
export const locations = (state = locationsSeed, action) => {
  switch (action.type) {
    case FETCH_LOCATIONS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
const locationsSeed = {
  meta: {
    code: 200,
    requestId: "5b5df3fe9fb6b710733fe8a4"
  },
  response: {
    venues: [],

    parents: []
  }
};

export default locationsSeed;

export const search = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_QUERY_FROM_BUTTON: {
      if (action.payload !== "any") {
        return {
          ...state,
          detail: action.payload
        };
      } else {
        return {
          location: state.location
        };
      }
    }

    case CHANGE_LOCATION_FROM_INPUT: {
      return {
        ...state,
        location: action.payload
      };
    }

    default: {
      return state;
    }
  }
};
