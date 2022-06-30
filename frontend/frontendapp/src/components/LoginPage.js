import React, { useState } from "react";
function LoginPage(props) {
  return (
    <div className="App">
     
        <div className="welcome">
          <h2>Welcome, <span>{props.username}</span></h2>
          <button onClick={props.Logout}>LOGOUT</button>
          </div>
    </div>
  );
}

export default LoginPage;
