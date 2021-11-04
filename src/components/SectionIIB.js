import React from 'react'
import '../SectionII.css';
function SectionIIB() {
    return (
        <div className="main">
            <div className="step-container">
                <div className="step-divider">
                    <p className="step-number">1</p><p className="step-title">User Information</p>
                </div>
                <div className="step-body">
                    <div className="user-info-section">
                        <p className="section-title">Enter User Information</p>
                        <div className="uid-section">
                            <input id="GameUserID"  className="input-text-box" type="text"/>
                            <p className="warning-text">User ID Invalid</p>
                        </div>
                        <div className="zid-section">
                            <input id="GameZoneID" className="input-text-box" type="text"/>
                            <p className="warning-text">Zone ID Invalid</p>
                        </div>
                    </div>
                    <div className="contact-info-section">
                        <p className="section-title">Enter Email Address</p>
                        <p className="section-subtext">A reciept will be sent to your email upon successful purchase</p>
                        <input id="Email" className="input-text-box" type="text"/>
                    </div>
                </div>
                
            </div>
            <div className="step-container">
                <div className="step-divider">
                    <p className="step-number">2</p><p className="step-title">Select Pay Channel</p>
                </div>
                <div className="step-body">
                    <button className="channel-button inactive">ceb online</button>
                    <button className="channel-button inactive">ceb offline</button>
                </div>
            </div>
            
            <div className="step-container">
                <div className="step-divider">
                    <p className="step-number">3</p><p className="step-title">Select Ammount</p>
                </div>
                <div className="step-body">
                    <button className="ammount-button inactive">11 Diamonds</button>
                    <button className="ammount-button inactive">22 Diamonds</button>
                    <button className="ammount-button inactive">56 Diamonds</button>
                    <button className="ammount-button inactive">112 Diamonds</button>
                    <button className="ammount-button inactive">223 Diamonds</button>
                    <button className="ammount-button inactive">570 Diamonds</button>
                    <button className="ammount-button inactive">1163 Diamonds</button>
                    <button className="ammount-button inactive">2398 Diamonds</button>
                    <button className="ammount-button inactive">6042 Diamonds</button>
                </div>
            </div>
            <div className="step-container">
                <div className="step-divider">
                    <p className="step-number">4</p><p className="step-title">Select Payment Method</p>
                </div>
                <div className="step-body">
                    <button className="payment-button inactive">Sample Payment Method logo</button>
                    <button className="payment-button inactive">Sample Payment Method logo</button>
                    <button className="payment-button inactive">Sample Payment Method logo</button>
                    <button className="payment-button inactive">Sample Payment Method logo</button>
                </div>
            </div>
            <div className="step-container">
                <div className="step-divider">
                    <p className="step-number">5</p><p className="step-title">Pay</p>
                </div>
                <div className="step-body center-j">
                    <input id="PromoCode" className="input-text-box" type="text"/>
                    <button className="onic-button">Apply</button>
                </div>
                <div>
                    <div>
                        <p className="section-price-title">Total</p>   
                        <p className="section-price">PHP 0.00</p>
                    </div>
                    <button className="onic-button f-width">Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default SectionIIB
