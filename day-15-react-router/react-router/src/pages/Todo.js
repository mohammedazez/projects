import React, { useState } from 'react';

const Todo = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([ "belajar react", "membuat todos" ])

  const handleChange = (event) => {
    setInputText(event.target.value)
  }

  const addTodo = () => {
    setTodos([...todos, inputText])
    setInputText("")
  }

  console.log(inputText)
  console.log(todos)

  return (
    <div>
      <h1>TODO APP</h1>
      <input type="text" onChange={handleChange} value={inputText} />
      <button onClick={addTodo}>ADD</button>
      <ul>
        {todos.map( (item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
