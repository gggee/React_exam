import React from "react";
import { Link } from 'react-router-dom'; // Import Link
import "../pages/css/home_stl.css";
import logo from './img/logo.jpg';
import user from './img/user_img.png';
import basket from './img/basket.png';
import store from './img/online-store.png';
import signIn from './img/door.png';

const Home = () => {
    return (
        <div className="page_div">
            <header>
                <img src={logo} alt="" />
                <div className="div_links">
                    <Link to="/signIn">
                        <div className="link"><img className="img_header" src={store} alt="" /></div>
                    </Link>
                    <Link to="/signIn">
                        <div className="link"><img className="img_header" src={basket} alt="" /></div>
                    </Link>
                    <Link to="/signIn">
                        <div className="link"><img className="img_header" src={signIn} alt="" /></div>
                    </Link>
                </div>
            </header>
        </div>
    );
}

export default Home;
