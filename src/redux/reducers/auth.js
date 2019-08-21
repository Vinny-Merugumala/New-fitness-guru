import axios from "axios";
const initialState = {
  username: "",
  name: ""
};
//constants
const UPDATE_USERNAME = "UPDATE_USERNAME";
const UPDATE_NAME = "UPDATE_NAME";
const RESET_STATE = "RESET_STATE";
//action creators

export function updateUsername(username) {
  return {
    type: UPDATE_USERNAME,
    payload: username
  };
}
export function updateName(name) {
  return {
    type: UPDATE_NAME,
    payload: name
  };
}
export function resetState() {
  return {
    type: RESET_STATE
  };
}
//reducer
export default function authreducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USERNAME:
      return {
        ...state,
        username: action.payload
      };
    case UPDATE_NAME:
      return {
        ...state,
        name: action.payload
      };
    case RESET_STATE:
      return {
        initialState
      };
    default:
      return state;
  }
}
