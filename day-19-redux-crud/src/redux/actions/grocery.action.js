import axios from "axios";

export const GET_GROCERY = "GET_GROCERY";

export function getGrocery(data) {
  return {
    type: GET_GROCERY,
    payload: data,
  };
}

export const getGroceryActions = () => {
  return async (dispatch) => {
    const response = await axios.get(
      "https://5f51a6865e98480016123bdd.mockapi.io/grocery"
    );
    dispatch(getGrocery(response.data));
    console.log("hasil get", response);
  };
};

export const editGroceryActions = (data, id) => {
  console.log("id di actions", id);
  console.log("data di actions", data);
  return (dispatch) => {
    axios
      .put(`https://5f51a6865e98480016123bdd.mockapi.io/grocery/${id}`, {
        name: data,
      })
      .then((response) => {
        console.log("response", response);
        dispatch(getGroceryActions());
      });
  };
};
