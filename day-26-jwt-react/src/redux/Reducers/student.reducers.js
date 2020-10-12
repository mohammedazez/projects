import { REGISTER, LOGIN } from "../Actions/student.actions";

// check token
const token = localStorage.getItem("token");

const initialState = token
  ? {
      isLogged: true,
      data: [],
    }
  : {
      isLogged: false,
      data: [],
      registerData: [],
    };

// reducers student

const student = (state = initialState, action) => {
  // console.log("tes", action);
  // console.log("data", action.payload);
  switch (action.type) {
    case REGISTER:
      return {
        registerData: action.payload,
      };
    case LOGIN:
      return {
        isLogged: true,
      };
    default:
      return state;
  }
};

export default student;
