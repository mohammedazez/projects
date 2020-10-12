import axios from "axios";

// constant
export const REGISTER = "REGISTER";

// functionnya dari constant
export const setRegister = (data) => {
  return {
    type: REGISTER,
    payload: data,
  };
};

// function isi dari setnya
export const register = (values, event) => (dispatch) => {
  event.preventDefault();
  console.log("tes param", values);

  axios
    .post("https://zan-exgen-moongoose.herokuapp.com/student", { values })
    .then((response) => {
      console.log("res", response);
      // dispatch(setRegister(response))
    })
    .catch((error) => {
      console.log(error);
    });
};
