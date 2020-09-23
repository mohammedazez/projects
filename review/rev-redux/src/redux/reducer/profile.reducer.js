import {CHANGE_NAME} from '../action/profile.action'

const initialState = {
  name: "Alpha",
  email: "alpha@skilvul.com"
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        name: action.newName
      };
    default:
      return state;
  }
}

export default profileReducer