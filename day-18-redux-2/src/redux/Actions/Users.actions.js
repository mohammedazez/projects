import axios from "axios";

// Kita buat constanta dengan beberapa situasi ketika ambil data
export const GET_USERS_REQUEST = "GET_USERS_REQUEST";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAILED = "GET_USERS_FAILED";

// Kita buat function untuk masing masing const
export function getUsersRequest() {
  return {
    type: GET_USERS_REQUEST,
  };
}

export function getUsersSuccess(result) {
  return {
    type: GET_USERS_SUCCESS,
    result,
  };
}

export function getUsersFailed(error) {
  return {
    type: GET_USERS_FAILED,
    error,
  };
}

// Function untuk ambil data
export function getUsers() {
  return function (dispatch) {
    // console.log("masuk action");
    dispatch(getUsersRequest());

    axios
      .get("https://5f51a6865e98480016123bdd.mockapi.io/users")
      .then((result) => dispatch(getUsersSuccess(result.data)))
      .catch((error) => dispatch(getUsersFailed(error)));
  };
}
