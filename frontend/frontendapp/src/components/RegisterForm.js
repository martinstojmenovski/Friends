import React, { useState } from "react";
function Register() {

    const [details, setDetails] = useState({ username: "", password: "" });
   
    const register = e => {
        e.preventDefault();
        
        fetch('http://127.0.0.1:8000/api/users/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(details)
        })
    }


    return (
        <div >
            <form onClick={register}>
                <div className="form-inner">
                    <div className="form-group">
                        <input placeholder="username" type="text" name="username" id="email" onChange={e => setDetails({ ...details, username: e.target.value })} value={details.username} />
                    </div>
                    <div className="form-group">
                        <input placeholder="password" type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                    </div>
                    <div className="form-group">
                        <input placeholder="re-enter password"  />
                    </div>
                    <input type="submit" value="Create account"  />
                </div>
            </form>

        </div>
    );
}

export default Register;
