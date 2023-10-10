import React from "react";
import "../pages/css/bag_stl.css";
const Bag = () => {
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

            <div className="bag_block">
                <h1 className="txt_bag">BAG</h1>
            </div>
        </div>
    );
}
export default Bag;