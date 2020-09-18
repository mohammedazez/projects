import React, { useState } from "react";
import axios from "axios";

function Users() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nama, setNama] = useState("");

  const handleChangeUsername = (event) => {
    // console.log(event);
    setUsername(event.target.value);
  };

  const handleChangePassword = (event) => {
    // console.log(event);
    setPassword(event.target.value);
  };

  const handleChangeNama = (event) => {
    // console.log(event);
    setNama(event.target.value);
  };

  const users = {
    username: username,
    password: password,
    nama: nama,
  };
  console.log(users);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`https://5f51a6865e98480016123bdd.mockapi.io/users`, { users })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          username
          <input type="text" onChange={handleChangeUsername} value={username} />
        </label>
        <label>
          password
          <input
            type="password"
            onChange={handleChangePassword}
            value={password}
          />
        </label>
        <label>
          nama
          <input type="text" onChange={handleChangeNama} value={nama} />
        </label>
        <button type="submit">Tambah user</button>
      </form>
    </div>
  );
}

export default Users;
