import React from "react";
import "../pages/css/home_stl.css";
import logo from './img/logo.jpg';
import user from './img/user_img.png'
import basket from './img/basket.png'
import store from './img/online-store.png'
import signIn from './img/door.png'
const Home = () => {
    return (
        <div className="page_div">
            <header>
                <img src={logo}></img>
                <div className="div_links">
                    <div className="link" onClick={(e) => window.location.assign('http://localhost:3000/signIn/')}><img className="img_header" src={store} alt=""/></div>
                    <div className="link" onClick={(e) => window.location.assign('http://localhost:3000/signIn/')}><img className="img_header" src={basket} alt=""/></div>
                    <div className="link" onClick={(e) => window.location.assign('http://localhost:3000/signIn/')}><img className="img_header" src={signIn} alt=""/></div>
                </div>
            </header>
        </div>
    );
}

export default Home;