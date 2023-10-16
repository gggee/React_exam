import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../pages/css/bag_stl.css";
import logo from './img/logo.jpg';
import basket from './img/basket.png';
import store from './img/online-store.png';
import signOut from './img/exit-door.png';
import remove_bag from './img/delete.png';
import buy_btn from './img/buy.png';

const Bag = () => {
    const [games, setGames] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const saved_game = JSON.parse(localStorage.getItem('games')) || [];
        setGames(saved_game);

        const total = saved_game.reduce((resp, game) => {
            return resp + (game.price * (game.quantity || 1));
        }, 0);
        setTotalPrice(total);
    }, []);


    const increase_quantity = (game) => {
        const update_game = games.map((item) => {
            if (item.title === game.title) {
                return { ...item, quantity: (item.quantity || 1) + 1 };
            }
            return item;
        });
        setGames(update_game);
        localStorage.setItem('games', JSON.stringify(update_game));

        const total = update_game.reduce((resp, game) => {
            return resp + (game.price * (game.quantity || 1));
        }, 0);
        setTotalPrice(total);
    };


    const decrease_quantity = (game) => {
        const update_game = games.map((item) => {
            if (item.title === game.title && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        setGames(update_game);
        localStorage.setItem('games', JSON.stringify(update_game));

        const total = update_game.reduce((resp, game) => {
            return resp + (game.price * (game.quantity || 1));
        }, 0);
        setTotalPrice(total);
    };

    const remove_game = (game) => {
        const update_game = games.filter((item) => item.title !== game.title);
        setGames(update_game);
        localStorage.setItem('games', JSON.stringify(update_game));

        const total = update_game.reduce((resp, game) => {
            return resp + (game.price * (game.quantity || 1));
        }, 0);
        setTotalPrice(total);
    };

    return (
        <div>
            <header>
                <Link to="/page_user/">
                    <img className='img_logo' src={logo} alt="" />
                </Link>
                <div className="div_links">
                    <Link to="/store/">
                        <div className="link"><img className="img_header" src={store} alt="" /></div>
                    </Link>
                    <Link to="/bag/">
                        <div className="link"><img className="img_header" src={basket} alt="" /></div>
                    </Link>
                    <Link to="/">
                        <div className="link"><img className="img_header" src={signOut} alt="" /></div>
                    </Link>
                </div>
            </header>

            <div className="bag_block">
                <h1 className="txt_bag">Shopping cart</h1>
            </div>

            <div className="bag_container">
                {games.map((game, index) => (
                    <div key={index} className="game_item">
                        <img src={game.img} alt={game.title} className="img_bag" />
                        <div className="bag_info">
                            <p className="game_title">{game.title}</p>
                            <p className="game_txt">Price: ${game.price}</p>
                            <div className="game_line">
                                <div className="count">
                                    <button className="count_minus" onClick={() => decrease_quantity(game)}>-</button>
                                    <span className="cnt">{game.quantity || 1}</span>
                                    <button className="count_plus" onClick={() => increase_quantity(game)}>+</button>
                                </div>
                                <img src={remove_bag} className="remove_btn" onClick={() => remove_game(game)} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="buy_block">
                <p className="total_txt">Total: ${totalPrice}</p>
                <Link to={`/payment/${totalPrice}`}>
                    <img src={buy_btn} className="buy_btn" />
                </Link>
            </div>
        </div>
    );
}

export default Bag;
