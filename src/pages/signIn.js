import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../pages/css/signIn_stl.css";
import logo from './img/logo.jpg';

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handle_email = (e) => {
        setEmail(e.target.value);
    };

    const handle_password = (e) => {
        setPassword(e.target.value);
    };

    const handle_submit = (e) => {
        e.preventDefault();
        const storedUserData = JSON.parse(localStorage.getItem("userAccount")) || [];
        const user = storedUserData.find(user => user.email === email && user.password === password);
        if (user) {
            return <Link to="/page_user" />;
        } else {
            setError("Incorrect login or password or you still don’t have an account?");
        }
    };

    return (
        <div className="signIn_div">
            <Link to="/page_user/">
                <img className='img_logo' src={logo} alt="Logo" />
            </Link>
            <form onSubmit={handle_submit} className="signIn_form">
                <h1 className="h1_signIn">Authorization</h1>
                <input type="email" className="input_regist" id="emailInput" placeholder="Login" value={email} onChange={handle_email} />
                <input type="password" className="input_regist" id="passwordInput" placeholder="Password" value={password} onChange={handle_password} />

                <div className="signIn_question">
                    <button type="submit" className="btn_signIn">Sign in</button>
                    {error && <h4 className="subtitle">{error}<br /><Link to="/regist" className="link">Registration</Link></h4>}
                </div>
            </form>
        </div>
    );
}

export default SignIn;
