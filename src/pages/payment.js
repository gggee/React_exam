import React, { useState } from "react";
import "../pages/css/payment_stl.css";
import { Link, useParams } from "react-router-dom"; import logo from './img/logo.jpg';
import basket from './img/basket.png';
import store from './img/online-store.png';
import signOut from './img/exit-door.png';

const Payment = () => {
    const [paymentComplete, setPaymentComplete] = useState(false);
    const { totalPrice } = useParams();

    const handlePayment = () => {
        setPaymentComplete(true);
        localStorage.removeItem('games');
    };

    return (
        <div>
            {paymentComplete ? (
                <div>
                    <header>
                        <Link to="/page_user/">
                            <img className='img_logo' src={logo} alt="Logo" />
                        </Link>
                        <div className="div_links">
                            <div className="link"><img className="img_header" src={store} alt="Store" /></div>
                            <Link to="/bag">
                                <div className="link"><img className="img_header" src={basket} alt="Basket" /></div>
                            </Link>
                            <Link to="/">
                                <div className="link"><img className="img_header" src={signOut} alt="Sign Out" /></div>
                            </Link></div>
                    </header>
                    <div className="true_pay">
                        <p>Thank you for your purchase! Have fun playing.</p>
                        <p>Your order has been successfully processed.</p>
                    </div>
                </div>
            ) : (
                <div className="pay_form">
                    <div className="container">
                        <div className="card">
                            <p className="pay_txt">Payment Details</p>
                            <div>
                                <p className="text">Person Name</p>
                                <input className="form-control" type="text" placeholder="First name/Last name" />
                            </div>
                            <div>
                                <p className="text">Card Number</p>
                                <input className="form-control" type="text" placeholder="1234 5678 435678" />
                            </div>
                            <div>
                                <p className="text">Expiry</p>
                                <input className="form-control" type="text" placeholder="MM/YYYY" />
                            </div>
                            <div>
                                <p class="text">CVV/CVC</p>
                                <input className="form-control" type="password" placeholder="***" />
                            </div>
                            <div className="btn btn-primary" onClick={handlePayment}>
                                <span className="pay_span">Pay ${totalPrice}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Payment;