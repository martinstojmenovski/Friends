import React, { useState } from "react";
function Register(props) {

    const [details, setDetails] = useState({ username: "", password: "", confirm: "" });
    const [error, setError] = useState("");

    const createAccount = e => {
        e.preventDefault();
        if (details.password !== details.confirm) {
            setError("The password confirmation does not match.")
        } else {
            fetch('https://friendsz.herokuapp.com/api/users/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(details)
            })
                .then(data => data.json())
                .then(data => handleErrors(data))
        }

    }

    const handleErrors = (details) => {
        if(details.id){
            setError("Account has been successfully created.")
        }
        else if (details.password && details.username) {
            setError(details.username[0])
        } else if(details.password) {
            setError(details.password[0])
        }else if (details.username) {
            setError(details.username[0])
        } else {
            setError(" ")
        }
    }

    return (
        <div >
            <form onSubmit={createAccount}>
            
                <div className="form-inner">
                <div className="x" onClick={() => props.setActive("login")}>X</div>
                <h2 >Create your account</h2>
                
                    <div className="form-group">
                        <input placeholder="username" type="text" name="username" id="email" onChange={e => setDetails({ ...details, username: e.target.value })} value={details.username} />
                    </div>
                    <div className="form-group">
                        <input placeholder="password" type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                    </div>
                    <div className="form-group">
                        <input placeholder="re-enter password" type="password" name="confirm" id="confirm" onChange={e => setDetails({ ...details, confirm: e.target.value })} value={details.confirm} />
                    </div>
                    <input type="submit" value="Create account" />
                    {(error != "") ? (<div className="error"> {error} </div>) : ""}
                </div>
            </form>

        </div>
    );
}

export default Register;
