import React from 'react'
import logo from './mlbb-logo.png';
import connectOn from './connecton_logo_w.png'
import topup from './top-up-splash.png';
import paymentlogo from './payment-sample.png';
import '../SectionII.css';


function SectionIIA() {
    return (
        <div className="main">
            <div className="logo">
                <img src={logo} alt="ml-logo"/>
                <img src={connectOn} alt="connecton-logo"/>
                <p className="section-title">Mobile Legends: Bang Bang - Moontoon (PH)</p>
                <p className="section-subtext">Recharge diamonds via Connect On partnership with the official onic store.</p>
                <div className="seperator"></div>
            </div>
            <div className="top-up">
                <img src={topup} alt="top-up-splash"/>
                <p className="section-subtext">Game details</p>
                <p className="section-lowersubtext">Join your friends in a brand new 5v5 MOBA showdown against real human opponents, Mobile Legends!</p>
            </div>
            <div className="payment-methods">
                <p className="section-subtext">Supported Payment Methods</p>    
                <div className="payment-icon-holder">
                    <div className="payment-icon"> 
                        <img src={paymentlogo} alt="ml-logo"/>
                    </div>
                    <div className="payment-icon"> 
                        <img src={paymentlogo} alt="ml-logo"/>
                    </div>
                    <div className="payment-icon"> 
                        <img src={paymentlogo} alt="ml-logo"/>
                    </div>
                    <div className="payment-icon"> 
                        <img src={paymentlogo} alt="ml-logo"/>
                    </div>
                    <div className="payment-icon"> 
                        <img src={paymentlogo} alt="ml-logo"/>
                    </div>
                    <div className="payment-icon"> 
                        <img src={paymentlogo} alt="ml-logo"/>
                    </div>
                    <div className="payment-icon"> 
                        <img src={paymentlogo} alt="ml-logo"/>
                    </div>
                </div>
            </div>
            <div className="instructions">
                <p className="section-subtext">How to recharge via Onic reload:</p>
                <p className="section-lowersubtext">1. Enter Your MLBB UserID and ZoneID.</p>
                <p className="section-lowersubtext">2. Select PayChannel.</p>
                <p className="section-lowersubtext">3. Select Reload Ammount.</p>
                <p className="section-lowersubtext">4. Select Payment option. Then Click proceed to checkout.</p>
            </div>
        </div>
    )
}

export default SectionIIA
