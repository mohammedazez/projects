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

// export const getGroceryActions = () => () =>{

// }
