export const GET_GOOGLE = "GET_GOOGLE";
export const LOGOUT_GOOGLE = "LOGOUT_GOOGLE";

export const getGoogle = (data, history) => {
  if (data.profileObj !== undefined) {
    console.log("masukkk");
    localStorage.setItem("isLoggedIn", true);
    history.push("/main");
  }

  return {
    type: GET_GOOGLE,
    payload: {
      profile: {
        name: data.profileObj.name,
        email: data.profileObj.email,
      },
    },
  };
};

export const logoutGoogle = (history) => {
  history.push("/");
  localStorage.clear();
  return {
    type: LOGOUT_GOOGLE,
  };
};
