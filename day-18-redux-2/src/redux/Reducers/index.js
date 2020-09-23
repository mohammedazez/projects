import { combineReducers } from "redux";

import { getUserReducer as users } from "./Users.reducers";

const rootReducer = combineReducers({ users });

export default rootReducer;
