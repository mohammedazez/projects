import React from "react";
import GoogleLogin from "react-google-login";

function Login() {
  const responseGoogleLogin = (response) => {
    console.log(response);
  };
  return (
    <div>
      <h1>Halaman Login</h1>

      <GoogleLogin
        clientId="863578905324-fp7872smtq6jro9uscl2fnjvjjoobea8.apps.googleusercontent.com"
        onSuccess={responseGoogleLogin}
        onFailure={responseGoogleLogin}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export default Login;
