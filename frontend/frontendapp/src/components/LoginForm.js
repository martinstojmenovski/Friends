import React, { useState } from "react";
import Register from "./RegisterForm";
function LoginForm({ Login, error, userName, setError }) {

    const [details, setDetails] = useState({ username: "", password: "" });
    const [active, setActive] = useState("login")
    const submitHandler = e => {
        e.preventDefault()
        userName(details)
        fetch('https://friendsz.herokuapp.com/auth/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(details)
        })
            .then(data => data.json())
            .then(data => Login(data))
    }

    const registerWindow = () => {
        setActive("register")
        setError("")
    }


    return (
        <div>

            {active === "login" && <form onSubmit={submitHandler}>
                <div className="form-inner">
                    <h2>Login</h2>
                    <div className="form-group">
                        <input placeholder="username" type="text" name="username" id="email" onChange={e => setDetails({ ...details, username: e.target.value })} value={details.username} />
                    </div>
                    <div className="form-group">
                        <input placeholder="password" type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                    </div>
                    <input type="submit" value="LOGIN" />
                    {(error != "") ? (<div className="error">{error}</div>) : ""}
                    <div className="_8icz"></div>
                    <button onClick={registerWindow}>Create new account</button>
                </div>
            </form>}
            {active === "register" && <Register setActive={setActive} />}
        </div>
    );

}

export default LoginForm;
