import React from "react";
import Todo from './pages/Todo'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import "./App.css";

// pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Users from "./pages/Users";

// components
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Form from "./pages/Form";

function App() {
  let loggedIn = true;
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Form/>
        <Todo />

        {/* bagian halaman yang mau dirubah */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users/:username">
            <Users />
          </Route>
          <Route path="/dashboard">
            {loggedIn ? <Dashboard /> : <Redirect to="/" />}
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
