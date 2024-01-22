import { combineReducers } from "redux";
import appReducer from "./slices/app";
import authReducer from "./slices/auth";

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
});

export default rootReducer;
