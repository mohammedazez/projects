import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { registerActions } from "../redux/Actions/student.actions";
import { useHistory } from "react-router-dom";

function Register() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [register, setRegister] = useState({
    email: "",
    password: "",
    name: "",
  });

  // check state dari redux
  const isLogged = useSelector((state) => state.student);
  console.log("isLogged", isLogged);

  //handle change form
  const handleChange = (event) => {
    // console.log("event", event);
    setRegister({
      ...register,
      [event.target.name]: event.target.value,
    });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log("tes", event);
  //   console.log("data", register);

  //   axios
  //     .post("https://zan-exgen-moongoose.herokuapp.com/student/", register)
  //     .then((response) => {
  //       console.log("response", response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  console.log("register", register);
  return (
    <div>
      <h1>Register Page</h1>
      <form
        onSubmit={(event) => {
          dispatch(registerActions(register, event, history));
        }}
      >
        {/* <form onSubmit={(event) => handleSubmit(event)}></form> */}
        <input
          type="email"
          name="email"
          value={register.email}
          placeholder="masukan email anda"
          onChange={(event) => handleChange(event)}
        />
        <input
          type="password"
          name="password"
          value={register.password}
          placeholder="masukan password anda"
          onChange={(event) => handleChange(event)}
        />
        <input
          type="text"
          name="name"
          value={register.name}
          placeholder="masukan nama anda"
          onChange={(event) => handleChange(event)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Register;
