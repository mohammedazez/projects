import axios from "axios";

export const SIGN_UP = "SIGN_UP";

export function setSignUp() {
  return {
    type: SIGN_UP,
    // payload: data,
  };
}

export const signUpActions = (values, e) => {
  e.preventDefault();
  console.log("tes", values, e);

  return axios
    .post("https://5f51a6865e98480016123bdd.mockapi.io/users", {
      values,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
