import React, { useState } from 'react'

import "./TextInput.css"

export default function TextInput() {
  const [state, setstate] = useState("hallo");

  const handleChange = (event) => {
    setstate(event.target.value)

    console.log(event.target.value)
  }

  console.log(state)

  return (
    <div className="input-text">
      {/* <h1>{state}</h1> */}
      <input type="text" onChange={handleChange} value={state}/>
      <h1>{state}</h1>
    </div>
  )
}
