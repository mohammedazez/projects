import React from "react";
import { GoogleLogout } from "react-google-login";

function Logout() {
  const onSuccess = () => {
    console.log("logout");
    alert("logout");
  };

  return (
    <GoogleLogout
      clientId="863578905324-fp7872smtq6jro9uscl2fnjvjjoobea8.apps.googleusercontent.com"
      onLogoutSuccess={onSuccess}
    />
  );
}

export default Logout;
