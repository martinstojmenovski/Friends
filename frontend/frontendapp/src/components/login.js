import React from "react";
import { useState } from 'react'
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
            .then(data => setVerify(data.token))
    }
    console.log(verify)
    let text = ""
    if(verify){
        text = "LOGIN SUCCESSFULL" 
    } else {
        text = "INVALID LOGIN"
    }

    return (
        <div>
            <h1>Login user form</h1>
            <label>
                Username:
                <input type="text" name="username"
                    value={log.username}
                    onChange={handleChange} />
            </label>
            <br />
            <label>
                Password:
                <input type="password" name="password"
                    value={log.password}
                    onChange={handleChange} />
            </label>
            <br />
            <button onClick={login}>Login</button>
            <p>{text}</p>
        </div>
    );
}

export default Login;
