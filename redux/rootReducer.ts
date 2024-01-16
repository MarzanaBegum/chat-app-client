import { combineReducers } from "redux";
import appReducer from "./slices/app";

const rootReducer = combineReducers({
  app: appReducer,
});

export default rootReducer;
