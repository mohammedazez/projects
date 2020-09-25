export const GET_GOOGLE = "GET_GOOGLE";

export const getGoogle = (data, history) => {
  console.log("actions data", data);

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

// export const logoutGoogle = () => {

// }
