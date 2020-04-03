import React,{useState} from 'react'
import {Redirect} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { connect } from "react-redux";
import {setLog} from "../../services/redux/actions/userActions";
import {changePass} from '../../services/users.js'


const Forgot = (props)=>{

const initialUser = {
  username:"",
  password:"",
  confPass:"",
  code :""
}
const [user,setUser] = useState(initialUser)
const[changed,setChanged]=useState(false)

const handleChange = (e)=>{
  const value = e.target.value;
  const name = e.target.name;

  setUser({ ...user, [name]: value });

}

const handleSubmit = async e =>{
  e.preventDefault();
  const response = await changePass(user)
  if(response.result){
    alert("Password was changed")
    setChanged(true)
  }
  else{
    alert("An error ocurred, please try again")
  }

}
const goLogin = ()=>{
  if(changed){
    return  <Redirect to ='/' />
  }

}

    return(
    <div className="container">
      {goLogin()}
  <Form onSubmit={handleSubmit} className="form">
  <Form.Group >
    <Form.Label>User Account</Form.Label>
    <Form.Control name="username" onChange={handleChange} type="text" placeholder="Enter your user account" />
  </Form.Group>

  <Form.Group >
    <Form.Label>Enter your new Password</Form.Label>
    <Form.Control name="password" onChange={handleChange} type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group >
    <Form.Label>Please, confirm your Password</Form.Label>
    <Form.Control name="confPass" onChange={handleChange} type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group >
    <Form.Label>Enter Code</Form.Label>
    <Form.Control name="code" onChange={handleChange} type="text" placeholder="Enter the recived code" />
  </Form.Group>
  
  <Button  variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </div>)
}

const mapStateToProps = reducers => {
  return reducers.usuariosReducer;
};
const mapDispachToProps = {
  setLog
};
//export default Login;
export default connect(mapStateToProps, mapDispachToProps)(Forgot);