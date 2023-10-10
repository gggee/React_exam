import React, { useState } from "react";
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
        const local_userStore = JSON.parse(localStorage.getItem("userData"));

        //проверка на существования такого пользователяя в localstorage
        if (local_userStore && local_userStore.email === email) {
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
            localStorage.setItem("userData", JSON.stringify(userData));
            window.location.assign('http://localhost:3000/page_user/');
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
                    <button type="submit" className="btn_regist">Sign up</button>
                    {error && <h4 className="error_message">{error}</h4>}
                </div>
            </form>
        </div>
    );
}

export default Regist;
