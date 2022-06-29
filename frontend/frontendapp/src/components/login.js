import React from "react";
import { useState } from 'react'
import Home from "./Home";
function Login() {

    const [log, setLog] = useState({ username: "", password: "" })
    const [verify, setVerify] = useState("")
    const handleChange = (event) => {
        setLog({ ...log, [event.target.name]: event.target.value })
    }


    const login = () => {
        fetch('http://127.0.0.1:8000/auth/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(log)
        })
            .then(data => data.json())
            .then(data => setVerify(data))
    }

    let userForm = (
        <div>
            <label>
                <input type="text" name="username"
                    value={log.username}
                    onChange={handleChange} 
                    placeholder="username"/>
            </label>
            <br />
            <label>
                <input type="password" name="password"
                    value={log.password}
                    onChange={handleChange}
                    placeholder="password" />
            </label>
            <br />
            <button onClick={login}>Login</button>
        </div>
    )
    // const disapear () => {
    //     setTimeout(, 3000);
    //   }
    let empty = ""
    let username = ""
    let text = ""
    if (verify.token) {
        text = "LOGIN SUCCESSFULL"
        userForm = ""
        username = "Hello " + log.username + "!"
       
    }else if(verify.username || verify.password){
       empty = "PLEASE ENTER YOUR INFORMATIONS" 
    } else if(verify.non_field_errors) {
        text = "INVALID LOGIN"
    } else {
        text = ""
    }

    return (
        <div>
            <Home />
            <h1>Login user</h1>
            {userForm}
            <p>{text}</p>
            <p>{username} </p>
            <p>{empty}</p>
        </div>
    );
}

export default Login;
