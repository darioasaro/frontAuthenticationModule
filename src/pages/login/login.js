import React,{useState}from "react";
import {connect} from 'react-redux'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import '../login/login.css'

const Login = ({handleLogin,isLogged}) => {

    const initialLogState = {
        username: "",
        password: ""
      }
      const [log, setLog] = useState(initialLogState)
      
      const handleChange = e => {
        const value = e.target.value
        const name = e.target.name
    
        setLog({ ...log, [name]: value })
      }
    const handleSubmit=(e)=>{
        
        e.preventDefault()
        
        handleLogin(log)

    }

  return (
      <div className = "form-container">
    <h1>
          Welcome to Authorization Server
          <p>
            <span>Sing in</span>
          </p>
        </h1>

        <Form className="form" onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>User</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              onChange={handleChange}
              name="username"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={handleChange}
              name="password"
            />
          </Form.Group>

          <div className="optionsGroup">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
    </div>
  );
};
const mapState = (isLogged)=>{
   return {
       logged : isLogged
    }

}
//export default Login;
export default connect(mapState,null)(Login)
