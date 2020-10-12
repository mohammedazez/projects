import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginActions } from "../redux/Actions/student.actions";
import { useHistory } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  //handle change form
  const handleChange = (event) => {
    setLogin({
      ...login,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form
        onSubmit={(event) => {
          dispatch(loginActions(login, event, history));
        }}
      >
        <input
          type="email"
          name="email"
          value={login.email}
          placeholder="masukan email anda"
          onChange={(event) => handleChange(event)}
        />
        <input
          type="password"
          name="password"
          value={login.password}
          placeholder="masukan password anda"
          onChange={(event) => handleChange(event)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Login;
