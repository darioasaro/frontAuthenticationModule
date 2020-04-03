import React, { useState } from "react";
import { connect } from "react-redux";
import { setLog, setTokens } from "../../services/redux/actions/userActions";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
import { Link, Redirect } from "react-router-dom";
import "../login/login.css";
import { login, register, restorePass } from "../../services/users";

const Login = props => {
  const initialUserState = {
    username: "",
    password: ""
  };
  const initialRegisterState = {
    username: "",
    email: "",
    password: "",
    confPass: ""
  };

  const [user, setUser] = useState(initialUserState);
  const [regist, setRegist] = useState(initialRegisterState);
  const [modalShow, setModalShow] = useState(false);

  const handleChange = e => {
    const value = e.target.value;
    const name = e.target.name;

    setUser({ ...user, [name]: value });
  };
  const handleChangeRegister = e => {
    const value = e.target.value;
    const name = e.target.name;

    setRegist({ ...regist, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const response = await login(user);

    if (response.result) {
      props.setLog(true);
      props.setTokens({
        token: response.accesToken,
        refresh: response.refreshToken
      });
    } else {
      document.getElementById("formEmail").reset();
      alert("User or Password Incorrect, please Try Again");
    }
  };

  const handelSubmitContainer = async e => {
    e.preventDefault();
    const response = await register(regist);
    if(response.result){
      alert("Your User was created")
      props.setLog(true);
    } 
    else{
      alert("System error, please try again")
    }
  };
  return (
    <div className="container">
      <h1>Welcome to Authorization Module</h1>
    <div className="login-container">
      <div className="form-container">
        <h3>Sing In</h3>

        <Form id="formEmail" className="form" onSubmit={handleSubmit}>
          <Form.Group>
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

        <>
          <Link
            className="text-muted"
            variant="primary"
            onClick={() => setModalShow(true)}
          >
            Forgot your Password?
          </Link>

          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </>
      </div>
      <Form className="form-container" onSubmit={handelSubmitContainer}>
        <h3>Register</h3>
        <Form.Group>
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            name="username"
            onChange={handleChangeRegister}
            placeholder="user"
          />
          <Form.Text className="text-muted">
            Your User may contain only letters from A to Z and numbers from 0 to
            9
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            onChange={handleChangeRegister}
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            onChange={handleChangeRegister}
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Confirm your Password</Form.Label>
          <Form.Control
            type="password"
            name="confPass"
            onChange={handleChangeRegister}
            placeholder="Confirm your Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
 </div> );
};

const MyVerticallyCenteredModal = props => {
  const initialRestore = {
    username: ""
  };
  const [restore, setRestore] = useState(initialRestore);
  const [forgot, setForgot] = useState(false);

  const goForgot = () => {
    if (forgot) {
      return <Redirect to="/forgot" />;
    }
  };

  const handleChangeRestore = e => {
    const value = e.target.value;
    const name = e.target.name;

    setRestore({ ...restore, [name]: value });
  };
  const handleClick = async e => {
    e.preventDefault();
    props.onHide();
    const response = await restorePass(restore);
    console.log(response);
    setTimeout(() => {
      if (response.result) {
        alert(
          " You may recibe an Email to restore your password,please check your inbox"
        );
        setForgot(true);
      } else {
        alert("Error User, try again");
      }
    }, 0);
  };
  return (
    <>
      {goForgot()}
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Restore your Password
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Enter your user account</Form.Label>
              <Form.Control
                type="text"
                name="username"
                onChange={handleChangeRestore}
                placeholder="user"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClick}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
const mapStateToProps = reducers => {
  return reducers.usuariosReducer;
};
const mapDispachToProps = {
  setLog,
  setTokens
};
//export default Login;
export default connect(mapStateToProps, mapDispachToProps)(Login);
