import React, { Component } from 'react';
import About from './Component/About'

import logo from './logo.svg';
import './App.css';

// Function component
function App() {
  let user = {
    name:"Auzan",
    email:"auzanassidqi@gmail.com",
    age:20
  }

  return (
    <div className="App">

      <Home name="Alpha" />
      <Home name="Beta" />
      <Home name="Charli" />

      <About 
        user={user}
        // name="Auzan" 
        // email="auzanassidqi@gmail.com"
        // age={20}
      />

    </div>
  );
}

class Home extends Component{
  render(){
    return(
      <h1>Hallo selamat datang {this.props.name}</h1>
    )
  }
}

export default App;
