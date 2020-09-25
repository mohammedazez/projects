import React from "react";
import { useSelector } from "react-redux";

function Headers() {
  const namaUser = useSelector((state) => state.login.google);
  console.log("namauser", namaUser);
  return (
    <div>
      <h1>React Redux Grocery List with Google Login </h1>
      {namaUser.profile !== undefined ? (
        <h3>Welcome, {namaUser.profile.name} </h3>
      ) : (
        <h3>data belum ada</h3>
      )}
    </div>
  );
}

export default Headers;
