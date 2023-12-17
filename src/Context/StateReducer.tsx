import { ActionTypes } from "./ActionTypes";
import { Action, InitialStateType } from "./StateContext";

export const reducer = (state: InitialStateType, action: Action) => {
  switch (action.type) {
    case ActionTypes.OPEN_SIDEBAR:
      return { ...state, sideBar: action.payload };
    default:
      return state;
  }
};
