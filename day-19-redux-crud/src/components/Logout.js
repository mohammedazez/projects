import React from "react";
import { GoogleLogout } from "react-google-login";
import { useHistory } from "react-router-dom";

// import redux
import { useDispatch } from "react-redux";
import { logoutGoogle } from "../redux/actions/login.actions";

function Logout() {
  const dispatch = useDispatch();
  const history = useHistory();

  const logoutSuccess = () => {
    console.log("logout");
    dispatch(logoutGoogle(history));

    alert("logout");
  };

  return (
    <GoogleLogout
      clientId="863578905324-fp7872smtq6jro9uscl2fnjvjjoobea8.apps.googleusercontent.com"
      onLogoutSuccess={logoutSuccess}
    />
  );
}

export default Logout;
