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

function Game({ img, title, genre, price }) {
    return (
        <div className="game_block">
            <img src={img} className="img_game" alt={title} />
            <h2 className="title">{title}</h2>
            <div className="game_info">
                <p className="p_info"><b>Genre:</b> {genre}</p>
                <p className="p_info"><b>Price:</b> {price}$</p>
                <p className="p_info">Add to Basket <img src={basket} className="img_basket" alt="Basket" /></p>
            </div>
        </div>
    );
}

const Store = () => {
    const [gameName, setGameName] = useState('');
    const [gameGenre, setGenre] = useState('');
    const [games] = useState([
        {
            img: re2,
            title: "Resident evil 2",
            genre: "Survival horror",
            price: getRandomInt(200, 5000)
        },
        {
            img: lou2,
            title: "The last of us",
            genre: "Action-adventure; Survival horror; Stealth action",
            price: getRandomInt(200, 5000)
        },
        {
            img: detroit,
            title: "Detroit",
            genre: "Action-adventure",
            price: getRandomInt(200, 5000)
        },
        {
            img: mk,
            title: "Mortal kombat",
            genre: "Fighting, Action, Adventure",
            price: getRandomInt(200, 5000)
        },
        {
            img: phasm,
            title: "Phasmophobia",
            genre: "Virtual Reality, Indie, Action, Puzzle",
            price: getRandomInt(200, 5000),
        },
        {
            img: re4,
            title: "Resident evil 4 (remake)",
            genre: "Survival horror, Shooter, Action-adventure",
            price: getRandomInt(200, 5000)
        }
    ]);

    const [filter_game, setFilter_game] = useState([]);
    const [sort_option, setSort_option] = useState("none");

    const handle_search = () => {
        const search_name = gameName.toLowerCase();
        const genre_name = gameGenre.toLowerCase();

        const filters = games.filter(game => {
            const gameTitle = game.title.toLowerCase();
            const gameGenre = game.genre.toLowerCase();
            return (
                (search_name === "" || gameTitle.includes(search_name)) &&
                (genre_name === "" || gameGenre.includes(genre_name))
            );
        });
        setFilter_game(filters);
    };

    const handle_sort = () => {
        let sortedGames = [...filter_game];
        if (sort_option === "up") {
            sortedGames.sort((a, b) => a.price - b.price);
        } else if (sort_option === "down") {
            sortedGames.sort((a, b) => b.price - a.price);
        }
        setFilter_game(sortedGames);
    };

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    return (
        <div>
            <header>
                <img className='img_logo' onClick={() => window.location.assign('http://localhost:3000/page_user/')} src={logo} alt="Logo" />
                <div className="div_links">
                    <div className="link"><img className="img_header" src={store} alt="Store" /></div>
                    <div className="link"><img className="img_header" src={basket} alt="Basket" /></div>
                    <div className="link" onClick={() => window.location.assign('http://localhost:3000/')}><img className="img_header" src={signOut} alt="Sign Out" /></div>
                </div>
            </header>

            <div className="store_block">
                <h1 className="txt_game_shop">Game Shop</h1>
            </div>

            <div className="search_block">
                <input type="text" className="input_search" placeholder="Search by title" value={gameName} onChange={(e) => setGameName(e.target.value)} />
                <button className="btn_search" onClick={handle_search}>Find</button>

                <div className="sort_wrap">
                    <select name="" className="sort_input" onChange={(e) => setSort_option(e.target.value)}>
                        <option value="none">Default</option>
                        <option value="up">Ascending price</option>
                        <option value="down">Descending price</option>
                    </select>
                    <button className="btn_search" onClick={handle_sort}>Sort</button>
                </div>
            </div>

            <div className="games_container">
                {filter_game.map((game, index) => (
                    <Game
                        key={index}
                        img={game.img}
                        title={game.title}
                        genre={game.genre}
                        price={game.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default Store;
