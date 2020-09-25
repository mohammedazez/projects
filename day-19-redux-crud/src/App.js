import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// component
import Headers from "./components/Headers";
import PrivateRoute from "./helpers/PrivateRoute";

// pages
import Login from "./pages/Login";
import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <Router>
        <Headers />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <PrivateRoute exact path="/main">
            <Main />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
