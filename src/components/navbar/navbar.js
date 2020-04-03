import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {setLog}from '../../services/redux/actions/userActions.js'
import {Button} from 'react-bootstrap'

const NavBar = (props) =>{
  const handleClick = e => {
    e.preventDefault();
    props.setLog(false);
  };

  const setButton = ()=>{
    if(props.logged){
     return <Button className="main-button" onClick={handleClick}>Logout</Button>
    }
  }

    return(

<>
  <Navbar bg="dark" variant="dark">
  {setButton()}
    <Link to="/">
      <img
        alt=""
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
     Authorization Controller
    </Link>
  </Navbar>
</>
)

}

const mapStateToProps = reducers => {
  return reducers.usuariosReducer;
};
const mapDispachToProps ={
  setLog,
}
export default connect(mapStateToProps,mapDispachToProps)(NavBar)