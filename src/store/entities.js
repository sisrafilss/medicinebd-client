import { combineReducers } from "redux";

import userReducer from "./user";
import userDashboardReducer from "./userDashboard";

export default combineReducers({
  user: userReducer,
  userDashboard: userDashboardReducer,
});
