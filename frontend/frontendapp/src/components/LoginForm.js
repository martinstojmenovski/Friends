import React, { useState } from "react";
import Register from "./RegisterForm";
function LoginForm({ Login, error, userName }) {

    const [details, setDetails] = useState({ username: "", password: "" });
    const [active, setActive] = useState("login")

    const submitHandler = e => {
        e.preventDefault()
        userName(details)
        fetch('http://127.0.0.1:8000/auth/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(details)
        })
            .then(data => data.json())
            .then(data => Login(data))
    }

    return (
        <div>
            {/* <h2 onClick={() => setActive("login")}>Login</h2> */}
            
            {active === "login" && <form onSubmit={submitHandler}>
                <div className="form-inner">
                    <h2>Login</h2>
                    <div className="form-group">
                        {/* <label htmlFor="email">Username: </label> */}
                        <input placeholder="username" type="text" name="username" id="email" onChange={e => setDetails({ ...details, username: e.target.value })} value={details.username} />
                    </div>
                    <div className="form-group">
                        {/* <label htmlFor="passwprd">Password: </label> */}
                        <input placeholder="password" type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                    </div>
                    <input type="submit" value="LOGIN" />
                    {(error != "") ? (<div className="error">{error}</div>) : ""}
                    <div className="_8icz"></div>
                    <button onClick={() => setActive("register")}>Create new account</button>
                </div>
            </form>}
            {active === "register" && <Register setActive={setActive} />}
        </div>
    );

}

export default LoginForm;
