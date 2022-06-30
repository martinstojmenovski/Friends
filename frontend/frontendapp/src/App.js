import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import LoginPage from "./components/LoginPage";
function App() {

  const [ user, setUser ] = useState("");
  const [ username, setUsername ] = useState("");
  const  [ error, setError] = useState("");

  const userName = (details) => {
    setUsername(details)
  }

  const Login = (details) => {
    if(details.token) {
      setUser(details.token)
    } else {
      setError("Details do not match!")
    }
  }
  
  const Logout = () => {
    setUser("")
    setError("")
  }

  return (
    <div className="App">
      {(user !="") ? (
        <LoginPage Logout={Logout} username={username.username}/>
        
      ) : ( <LoginForm Login={Login} userName={userName} error={error} />)}
    </div>
  );
}

export default App;
