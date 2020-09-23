import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import getUserReducer from "./Reducers/Users.reducers";

const store = createStore(getUserReducer, applyMiddleware(thunk));

export default store;
