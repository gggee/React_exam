import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "../pages/css/regist_stl.css";
import logo from './img/logo.jpg';

const Regist = () => {
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
        const local_user_account = JSON.parse(localStorage.getItem("userAccount")) || [];

        const user_account = local_user_account.some(user => user.email === email);
        if (user_account) {
            setError("A user with this email already exists.");
        } else if (password.length < 8 || !email.includes("@mail.com")) {
            setError("Password or email is incorrect. Password must contain more than 8 characters!");
        } else {
            const userData = {
                name: document.getElementById("nameInput").value,
                nickName: document.getElementById("nickInput").value,
                email,
                password,
            };
            local_user_account.push(userData);
            localStorage.setItem("userAccount", JSON.stringify(local_user_account));
        }
    };

    return (
        <div className="regist_div">
            <img src={logo} className='img_logo' onClick={() => window.location.assign('http://localhost:3000/')} alt="Logo" />
            <form onSubmit={handle_submit} className="regist_form">
                <h1 className="h1_regist">Registration</h1>
                <input type='text' className="input_regist" id="nameInput" placeholder="Name" />
                <input type='text' className="input_regist" id="nickInput" placeholder="Nick name" />
                <input type="email" className="input_regist" id="emailInput" placeholder="Email" value={email} onChange={handle_email} />
                <input type="password" className="input_regist" id="passwordInput" placeholder="Password" value={password} onChange={handle_password} />

                <div className="regist_question">
                    <Link to="/page_user" className="btn_regist">Sign up</Link>
                    {error && <h4 className="error_message">{error}</h4>}
                </div>
            </form>
        </div>
    );
}

export default Regist;
