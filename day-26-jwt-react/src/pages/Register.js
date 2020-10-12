import axios from "axios";
import React, { useState } from "react";

function Register() {
  const [register, setRegister] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleChange = (event) => {
    // console.log("event", event);
    setRegister({
      ...register,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("tes", event);
    console.log("data", register);

    axios
      .post("https://zan-exgen-moongoose.herokuapp.com/student/", register)
      .then((response) => {
        console.log("response", response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log("register", register);
  return (
    <div>
      <h1>Register Page</h1>
      <form onSubmit={(event) => handleSubmit(event)}>
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
