import React, { useState } from 'react';

const CounterFunc = () => {
  const [countNum, setCountNum] = useState(0)

  const decrement = () => {
    setCountNum(countNum-1)
  }

  return (
    <div>
      <h1>Counter Function</h1>
      <button onClick={decrement}>-</button>
      <h1 style={{ display: "inline" }}>{countNum}</h1>
      <button>+</button>
      <hr/>
    </div>
  );
}

export default CounterFunc;
