import { PRESS_CONTROL_BUTTON } from "../../constants";

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
