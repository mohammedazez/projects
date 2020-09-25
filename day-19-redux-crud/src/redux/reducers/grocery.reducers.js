import { GET_GROCERY } from "../actions/grocery.action";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GROCERY:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
