import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
function App() {

  const [ user, setUser ] = useState({username: "", password: ""});
  const  [ error, setError] = useState("");
  console.log(user)




  const Login = details => {
    
  
    if(details.token) {
      console.log("Logged in")
      setUser({
        username: details.username,
        password: details.password
      })
    } else {
      console.log("Details do not match!")
      setError("Details do not match!")
    }
  }



  const Logout = () => {
    // console.log("Logout")
    setUser({ username: "", password: "" })
  }


  return (
    <div className="App">
      {(user.username !="") ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.username}</span></h2>
          <button onClick={Logout}>LOGOUT</button>
          </div>
      ) : ( <LoginForm Login={Login} error={error} />)}
    </div>
  );
}

export default App;
