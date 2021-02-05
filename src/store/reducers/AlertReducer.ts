import { AlertState, AlertAction, SET_ALEART } from "../types";

const initialState: AlertState = {
  message: "",
};

// eslint-disable-next-line
export default (state = initialState, action: AlertAction): AlertState => {
  switch (action.type) {
    case SET_ALEART:
      return {
        message: action.payload,
      };
    default:
      return state;
  }
};
