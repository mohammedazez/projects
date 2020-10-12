import axios from "axios";
import jwt from "jwt-decode";

// constant
export const REGISTER = "REGISTER";
export const LOGIN = "LOGIN";

// functionnya dari constant
export const setRegister = (data) => {
  return {
    type: REGISTER,
    payload: data,
  };
};

export const setLogin = (data) => {
  return {
    type: LOGIN,
    payload: data,
  };
};

// function isi dari setnya
export const registerActions = (values, event, history) => (dispatch) => {
  event.preventDefault();
  console.log("tes param", values);

  return axios
    .post("https://zan-exgen-moongoose.herokuapp.com/student", values)
    .then((response) => {
      console.log("res", response);
      dispatch(setRegister(response.data.student));
      history.push("/login");
    })
    .catch((error) => {
      console.log(error);
    });
};

export const loginActions = (values, event, history) => {
  return (dispatch) => {
    event.preventDefault();
    console.log("tes berhasil", values);

    return axios
      .post("https://zan-exgen-moongoose.herokuapp.com/student/login", values)
      .then((response) => {
        console.log(response);

        if (response.data.token !== undefined) {
          console.log("bener tokennya ada");
          localStorage.setItem("token", response.data.token);
          document.cookie = `token=${response.data.token}`;
          let JWTdecode = jwt(response.data.token);
          console.log("jwt", JWTdecode);
          dispatch(setLogin(response.data.token));
          history.push("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
