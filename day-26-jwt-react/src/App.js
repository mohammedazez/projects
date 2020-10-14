import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

import './App.css';
import PrivateRoute from './helpers/PrivateRoute';

function App() {
    return (
        <div className='App'>
            <h1>Redux Login</h1>

            <Router>
                <Switch>
                    <PrivateRoute exact path='/'>
                        <Home />
                    </PrivateRoute>
                    <Route path='/login'>
                        <Login />
                    </Route>
                    <Route path='/register'>
                        <Register />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
