import { createStore } from "redux";
import profileReducer from './reducer/profile.reducer';

export default createStore(profileReducer)