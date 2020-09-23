import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUpActions } from "../redux/Actions/Signup.actions";

function Signup() {
  const dispatch = useDispatch();
  // const history = useHistory();
  const [register, setRegister] = useState({
    username: "",
    nama: "",
    password: "",
  });

  const handleChange = (field, value) => {
    setRegister((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  console.log(register);
  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={(e) => dispatch(signUpActions(register, e))}>
        <h1>username</h1>
        <input
          type="text"
          value={register.username}
          onChange={(e) => handleChange("username", e.target.value)}
        />
        <h1>nama</h1>
        <input
          type="text"
          value={register.nama}
          onChange={(e) => handleChange("nama", e.target.value)}
        />
        <h1>password</h1>
        <input
          type="password"
          value={register.password}
          onChange={(e) => handleChange("password", e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Signup;
