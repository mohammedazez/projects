import { GET_GOOGLE } from "../actions/login.actions";

const initialState = {
  google: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GOOGLE:
      console.log("tessss masuk reducer", action);
      return {
        ...state,
        google: action.payload,
      };
    default:
      return state;
  }
};
