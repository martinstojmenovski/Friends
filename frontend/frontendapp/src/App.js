import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import LoginPage from "./components/LoginPage";
function App() {

  const [user, setUser] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const userName = (details) => {
    setUsername(details)
  }

  const Login = (details) => {
    console.log(details)
    if (details.token) {
      setUser(details.token)
    } else if (details.non_field_errors) {
      setError(details.non_field_errors[0])
    } else if (details.username) {
      setError(details.username[0])
    } else if (details.password) {
      setError(details.password[0])
    } else {
      setError("")
    }
  }

  const Logout = () => {
    setUser("")
    setError("")
  }

  return (
    <div className="App">
      {(user != "") ? (
        <LoginPage Logout={Logout} username={username.username} />

      ) : (<LoginForm Login={Login} userName={userName} error={error} setError={setError} />)}
    </div>
  );
}

export default App;
