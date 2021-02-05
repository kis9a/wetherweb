import { SET_ALEART, AlertAction } from "../types";

export const setAlert = (message: string): AlertAction => {
  return {
    type: SET_ALEART,
    payload: message,
  };
};
