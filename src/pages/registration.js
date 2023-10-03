import React from "react";
import { Link } from "react-router-dom";
import "../pages/css/regist_stl.css";
import logo from './img/logo.jpg';

const Regist = () => {
    return (
        <div className="regist_div">
            <img src={logo} className='img_logo' onClick={(e) => window.location.assign('http://localhost:3000/')}></img>
            <form action="" class="regist_form">
                <h1 className="h1_regist">Registration</h1>
                <input type="email" class="input_regist" id="emailInput" placeholder="Login"/>
                <input type="password" class="input_regist" id="passwordInput" placeholder="Password" />

                <div class="regist_question">
                    {/* <Link to='/signIn' class="btn_regist">Sign up</Link> */}
                    <button type="submit" class="btn_regist" onClick={(e) => window.location.assign('http://localhost:3000/signIn/')}>Sign up</button>
                </div>
            </form>
        </div>

    );
}
export default Regist;