import React from "react";
import "../pages/css/home_stl.css";
import logo from './img/logo.jpg';
import user from './img/user_img.png'
import basket from './img/basket.png'
import store from './img/online-store.png'
const Home = () => {
    return (
        <div className="page_div">
            <header>
                <img src={logo}></img>
                <div class="div_links">
                    <div class="link"><img class="img_header" src={store} alt=""/></div>
                    <div class="link"><img class="img_header" src={basket} alt=""/></div>
                    <div class="link" onClick={(e) => window.location.assign('http://localhost:3000/regist/')}><img class="img_header" src={user} alt=""/></div>
                </div>
            </header>
        </div>
    );
}

export default Home;