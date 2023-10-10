import React, { useState } from "react";
import "../pages/css/store_stl.css";
import logo from './img/logo.jpg';
import basket from './img/basket.png'
import store from './img/online-store.png'
import signOut from './img/exit-door.png'
import re2 from './img/re2.jpg'
import lou2 from './img/lou2.jpg'
import detroit from './img/detroit.jpg'
import mk from './img/mk.jpeg'
import phasm from './img/phasm.jpg'
import re4 from './img/re4.jpg'

const Store = () => {
    const [gameName, stateGame_Name] = useState('');
    const [gener, stateGenre] = useState('');
    const [price, statePrice]= useState('');

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    return (
        <div>
            <header>
                <img className='img_logo' onClick={(e) => window.location.assign('http://localhost:3000/page_user/')} src={logo}></img>
                <div className="div_links">
                    <div className="link"><img className="img_header" src={store} alt="" /></div>
                    <div className="link"><img className="img_header" src={basket} alt="" /></div>
                    <div className="link" onClick={(e) => window.location.assign('http://localhost:3000/')}><img className="img_header" src={signOut} alt="" /></div>
                </div>
            </header>

            <div className="store_block">
                <h1 className="txt_game_shop">Game Shop</h1>
            </div>

            <div className="search_block">
                <input type="text" className="input_search" />
                <button className="btn_search">Find</button>

                <div className="sort_wrap">
                    <select name="" class="sort_input">
                        <option className="none">Default</option>
                        <option className="up">Ascending price</option>
                        <option className="down">Descending price</option>
                    </select>
                    <button className="btn_search">Sort</button>
                </div>
            </div>

            <div className="games_container">
                <div className="game_block">
                    <img src={re2} className="img_game" />
                    <h2 className="title">Resident evil 2</h2>
                    <div className="game_info">
                        <p className="p_info"><b>Genre:</b> Survival horror</p>
                        <p className="p_info"><b>Price:</b> {getRandomInt(200, 5000)}$</p>
                        <p className="p_info">Add to Basket <img src={basket} className="img_basket" alt="" /></p>
                    </div>
                </div>

                <div className="game_block">
                    <img src={lou2} className="img_game" />
                    <h2 className="title">The last of us</h2>
                    <div className="game_info">
                        <p className="p_info"><b>Genre:</b> Action-adventure; Survival horror; Stealth action</p>
                        <p className="p_info"><b>Price:</b> {getRandomInt(200, 5000)}$</p>
                        <p className="p_info">Add to Basket <img src={basket} className="img_basket" alt="" /></p>
                    </div>
                </div>

                <div className="game_block">
                    <img src={detroit} className="img_game" />
                    <h2 className="title">Detroit</h2>
                    <div className="game_info">
                        <p className="p_info"><b>Genre:</b> Action-adventure</p>
                        <p className="p_info"><b>Price:</b> {getRandomInt(200, 5000)}$</p>
                        <p className="p_info">Add to Basket <img src={basket} className="img_basket" alt="" /></p>
                    </div>
                </div>

                <div className="game_block">
                    <img src={mk} className="img_game" />
                    <h2 className="title">Mortal kombat</h2>
                    <div className="game_info">
                        <p className="p_info"><b>Genre:</b> Fighting, Action, Adventure</p>
                        <p className="p_info"><b>Price:</b> {getRandomInt(200, 5000)}$</p>
                        <p className="p_info">Add to Basket <img src={basket} className="img_basket" alt="" /></p>
                    </div>
                </div>

                <div className="game_block">
                    <img src={phasm} className="img_game" />
                    <h2 className="title">Phasmophobia</h2>
                    <div className="game_info">
                        <p className="p_info"><b>Genre:</b> Virtual Reality, Indie, Action, Puzzle</p>
                        <p className="p_info"><b>Price:</b> {getRandomInt(200, 5000)}$</p>
                        <p className="p_info">Add to Basket <img src={basket} className="img_basket" alt="" /></p>
                    </div>
                </div>

                <div className="game_block">
                    <img src={re4} className="img_game" />
                    <h2 className="title">Resident evil 4 (remake)</h2>
                    <div className="game_info">
                        <p className="p_info"><b>Genre:</b> Survival horror, Shooter, Action-adventure</p>
                        <p className="p_info"><b>Price:</b> {getRandomInt(200, 5000)}$</p>
                        <p className="p_info">Add to Basket <img src={basket} className="img_basket" alt="" /></p>
                    </div>
                </div>
            </div>

        </div>
    );

}
export default Store;