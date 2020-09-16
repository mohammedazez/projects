import React from "react";
import { useHistory } from "react-router-dom";

function Dashboard() {
  let history = useHistory();
  console.log(history);

  const handleBtnHome = () => {
    history.push("/users/thoriq");
  };
  return (
    <div>
      <h1>Halaman Dashboard</h1>
      <button onClick={handleBtnHome}>Go to users thoriq</button>
    </div>
  );
}

export default Dashboard;
