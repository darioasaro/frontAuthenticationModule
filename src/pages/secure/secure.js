import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";

const Secure = props => {
  const [redirect, setRedirect] = useState(false);
  const handleBack = e => {
    setRedirect(true);
  };
  const backToMain = () => {
    if (redirect) {
      return <Redirect to="/main" />;
    }
  };

  return (
    <div>
      {backToMain()}
      <h1 className="title">Welcome to Secure Page</h1>
      <Button onClick={handleBack}>Back</Button>
    </div>
  );
};

const mapStateToProps = reducers => {
  return reducers.userReducer;
};

export default connect(mapStateToProps, {})(Secure);
