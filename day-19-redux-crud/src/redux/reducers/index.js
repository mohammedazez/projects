import { combineReducers } from "redux";
import login from "./login.reducers";
import grocery from "./grocery.reducers";

const rootReducers = combineReducers({ login, grocery });

export default rootReducers;
