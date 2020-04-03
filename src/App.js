import React,{ useState, useEffect } from 'react';
import {connect} from 'react-redux'
import {setLog,setTokens} from './services/redux/actions/userActions.js'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Login from './pages/login/login.js'
import Main from './pages/main/main.js'
import Forgot from './pages/forgot/forgot.js'
import NavBar from './components/navbar/navbar.js'
import Secure from './pages/secure/secure.js'




const App = (props)=> {
  

  return (
  <Router>
    <NavBar />
    {props.logged ? <Redirect to ="/main" /> :
    <Redirect to="/"/> }
    <Switch>
      <Route exact path = "/"      component={Login}/>
      <Route exact path ="/main"   component={Main}/>
      <Route exact path ="/forgot" component={Forgot}/>
      <Route exact path ="/secure" component={Secure} />
    </Switch>
  </Router>
  );
}


const mapStateToProps = (reducers)=>{
  return reducers.usuariosReducer

}
const mapDispachToProps = {
   setLog,setTokens
}

export default connect(mapStateToProps,mapDispachToProps)(App)



