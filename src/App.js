import React,{ useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Login from './pages/login/login.js'
import {login} from './services/users.js'


const App= ()=> {
  
  const handleLogin = async (user)=>{
    const response = await login(user)
    

  }

  return (
  <Router>
    <Switch>
      <Route exact path = "/">
        <Login handleLogin = {handleLogin} />
      </Route>

    </Switch>
  </Router>
  );
}

export default App;
