import React, { useState } from "react";
function LoginForm({ Login, error }) {

    const [details, setDetails] = useState({ username: "", password: "" });

    const submitHandler = e => {
        e.preventDefault();

        fetch('http://127.0.0.1:8000/auth/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(details)
        })
            .then(data => data.json())
            .then(data => Login(data))

        // Login(details)
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="username" id="email" onChange={e => setDetails({ ...details, username: e.target.value })} value={details.username} />
                </div>
                <div className="form-group">
                    <label htmlFor="passwprd">Password:</label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                </div>
                <input type="submit" value="LOGIN" />
                {(error != "") ? (<div className="error">{error}</div>) : ""}
            </div>
        </form>
    );

}

export default LoginForm;
