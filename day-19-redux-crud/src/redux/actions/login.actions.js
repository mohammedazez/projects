export const GET_GOOGLE = "GET_GOOGLE";

export const getGoogle = (data) => {
  console.log("actions data", data);
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
