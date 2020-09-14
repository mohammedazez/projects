import React, { Component } from 'react';
import About from './Component/About'
import Counter from "./Component/Counter"
import ListProduct from './Component/ListProduct';

// import logo from './logo.svg';
import './App.css';

// Function component
function App() {
  return (
    <div className="App">

      <Home name="Alpha" />

      <ListProduct />

      <About 
        name="Auzan" 
        email="auzanassidqi@gmail.com"
        age={20}
      />

      <Counter />

    </div>
  );
}

// stateless Component
class Home extends Component{
  render(){
    return(
      <h1>Hallo selamat datang {this.props.name}</h1>
    )
  }
}

export default App;
