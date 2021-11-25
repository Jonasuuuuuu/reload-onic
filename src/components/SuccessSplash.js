import React from 'react'
import CoinCheck from '../components/coin1.png'
import '../Success.css'
import {faHome,faRedo}  from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function SuccessSplash() {
    return (
        <div className="splash-container">  
            <div className="success-main">
            <img src={CoinCheck} alt="Purchase Success"/>
                <p className="splash-text">Thank You For Purchasing</p>
            </div>
            <div className="success-buttons">
            <a href="https://ph.onic-esports.com/"><button className="onic-button fix-200"><FontAwesomeIcon className="icon" icon={faHome}/>Home</button></a>
            <a href="/"><button className="onic-button fix-200"><FontAwesomeIcon className="icon" icon={faRedo}/>Buy Again</button></a>
            </div>
        </div>
    )
}

export default SuccessSplash
