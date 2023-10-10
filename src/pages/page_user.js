import React from "react";
import "../pages/css/home_stl.css";
import logo from './img/logo.jpg';
import user from './img/user_img.png'
import basket from './img/basket.png'
import store from './img/online-store.png'
import signOut from './img/exit-door.png'

const Page_user = () => {
    return (
        <div className="page_div">
            <header>
                <img src={logo}></img>
                <div className="div_links">
                    <div className="link" onClick={(e) => window.location.assign('http://localhost:3000/store/')}><img className="img_header" src={store} alt=""/></div>
                    <div className="link" ><img className="img_header" src={basket} alt=""/></div>
                    <div className="link" onClick={(e) => window.location.assign('http://localhost:3000/')}><img className="img_header" src={signOut} alt=""/></div>
                </div>
            </header>
        </div>
    );
}

export default Page_user;