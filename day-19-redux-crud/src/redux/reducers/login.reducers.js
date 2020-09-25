import { GET_GOOGLE, LOGOUT_GOOGLE } from "../actions/login.actions";

const initialState = {
  google: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GOOGLE:
      return {
        ...state,
        google: action.payload,
      };
    case LOGOUT_GOOGLE:
      return initialState;
    default:
      return state;
  }
};
