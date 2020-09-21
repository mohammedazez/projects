import React from "react";
import "./App.css";
import Header from "./components/Header";
import Counter from "./page/Counter";
import CounterHooks from "./page/CounterHooks";

function App() {
  return (
    <div className="App">
      <Header />
      <Counter />
      <CounterHooks />
    </div>
  );
}

export default App;
