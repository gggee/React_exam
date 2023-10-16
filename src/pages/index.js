import React from "react";
import { Link } from 'react-router-dom';
import "../pages/css/home_stl.css";
import logo from './img/logo.jpg';
import basket from './img/basket.png';
import store from './img/online-store.png';
import signIn from './img/door.png';
import video from './img/Trailer - Trim.mp4'

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


            <div className="intro_container">
                <div className="video-container">
                    <video autoPlay loop id="myVideo" className="video-element">
                        <source src={video} type="video/mp4" />
                    </video>
                    <div className="text-overlay">
                        <p className="txt_marvel">
                            <b className="b_video">Video games</b> are a window to a world of endless possibilities.
                            The world of video games has endless possibilities, stories, and adventures waiting for those who...
                            who will boldly enter this digital corner of the imagination. In a world where reality is mixed
                            with imagination, immersion in virtual worlds full of mysteries, dangers and uncharted territories.
                        </p>
                    </div>
                </div>
                <div className="block_1">
                    <hr color="FF007C" width="50%" />
                    <p className="intro_txt">
                        Video games not only allow us to travel through time and space, but also provide a unique
                        opportunity to interact with a variety of characters and create our own stories. We can be
                        traders, adventurers, spies, magicians, soldiers or any other characters that our
                        imagination can come up with. <br />
                        <b className="b_intro">This is a world where everything is possible.</b>
                    </p>
                    <hr color="FF007C" width="50%" />

                    <p className="intro_txt">
                        Video games have become an integral part of modern culture, and this is just the beginning
                        of our journey into increasingly immersive and interactive worlds.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;
