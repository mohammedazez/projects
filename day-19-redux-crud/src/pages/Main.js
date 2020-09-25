import React, { useEffect, useState } from "react";
import Logout from "../components/Logout";
import { useHistory } from "react-router-dom";

// redux
import { useSelector, useDispatch } from "react-redux";
import { getGroceryActions } from "../redux/actions/grocery.action";

function Main() {
  const dispatch = useDispatch();
  // const history = useHistory();
  const listGrocery = useSelector((state) => state.grocery.data);
  console.log("redux", listGrocery);

  useEffect(() => {
    dispatch(getGroceryActions());
  }, [dispatch]);

  return (
    <div>
      <h1>Halaman main</h1>
      <Logout />

      <h1>Grocery List</h1>
      {listGrocery !== undefined ? (
        listGrocery.map((item, index) => <div key={index}>{item.name}</div>)
      ) : (
        <h1>Loading bos</h1>
      )}
    </div>
  );
}

export default Main;
