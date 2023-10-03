import React from "react";
import { Link } from "react-router-dom";
import "../pages/css/signIn_stl.css";
import logo from './img/logo.jpg';

const SignIn = () => {
    return (
        <div className="signIn_div">
            <img src={logo} className='img_logo' onClick={(e) => window.location.assign('http://localhost:3000/')}></img>
            <form action="" class="signIn_form">
                <h1 className="h1_signIn">Authorization</h1>
                <input type="email" class="input_regist" id="emailInput" placeholder="Login" />
                <input type="password" class="input_regist" id="passwordInput" placeholder="Password" />

                <div class="signIn_question">
                    <Link to='/' class="btn_signIn">Sign in</Link>
                    {/* <h3 class="msg_error"></h3> */}
                    <h4 class="subtitle">Don't have an account? <br/><a href="http://localhost:3000/regist/" class="link">Registration</a></h4>
                </div>
            </form>
        </div>
    );

}
export default SignIn;