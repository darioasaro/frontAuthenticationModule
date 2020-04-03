import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { setLog } from "../../services/redux/actions/userActions";
import { connect } from "react-redux";
import { testSecure } from "../../services/users";
import '../main/main.css'

const Main = props => {
  const [secure, setSecure] = useState(false);

  
  const handleTest =async e => {
     
    const response = await testSecure(props.token);
    if (response.result) {
      setSecure(true);
    }
    else{
        alert("You don't have permisions")
    }
  };

  const goSecure = () => {
    if (secure) {
      return <Redirect to="/secure" />;
    }
  };
  return (
    <div className="container">
        {goSecure()}
      <h1>MAIN</h1>

      <Button onClick={handleTest}>Test your Acces Token</Button>
    </div>
  );
};
const mapStateToProps = reducers => {
  return reducers.usuariosReducer;
};
const mapDispachToProps = {
  setLog
};
export default connect(mapStateToProps, mapDispachToProps)(Main);
