import React from "react";
import "./styling/App.scss";
// import Users from "./pages/Users";
import NewPage from "./pages/NewPage";

function App() {
  // const [data, setData] = useState("posts");
  // const [render, setRender] = useState([]);
  // const [countNum, setCountNum] = useState(0);

  // const decrement = () => {
  //   setCountNum(countNum - 1);
  // };

  // rules 1 = setiap react render ulang useEffect dipanggil / state berubah
  // dengan ditambahkan [] setelah fetch berarti kita hanya watch / subscribe ke perubahan data tersebut saja
  // useEffect(() => {
  //   console.log("mounting");
  //   fetch(`https://jsonplaceholder.typicode.com/${data}`)
  //     .then((response) => response.json())
  //     // .then((result) => setRender(result));
  // }, [data]);

  // useEffect(() => {
  //   console.log("looping");
  //   axios
  //     .get(`https://jsonplaceholder.typicode.com/${data}`)
  //     .then((response) => setRender(response.data));
  // }, [data]);

  return (
    <div className="App">
      <h1>React Fetching data</h1>
      {/* <div>
        <button onClick={() => setData("posts")}>Posts</button>
        <button onClick={() => setData("users")}>Users</button>
        <button onClick={() => setData("comments")}>Comments</button>
      </div>
      <div>{data}</div>
      <div>
        {render.map((item, id) => (
          <div key={id}>
            <p>{JSON.stringify(item)}</p>
          </div>
        ))}
      </div>
      <div>
        <h1 style={{ color: "red" }}>Counter Function</h1>
        <button onClick={decrement}>-</button>
        <h1 style={{ display: "inline" }}>{countNum}</h1>
        <button>+</button>
        <hr />
      </div> */}
      {/* <Users /> */}
      <NewPage />
    </div>
  );
}

export default App;
