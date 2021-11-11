import React from 'react'
import {
    faFacebook,
    faTwitter,
    faTiktok,
    faYoutube,
    faInstagram
  } from '@fortawesome/free-brands-svg-icons';
import { faBars,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from './onic-ph-logo.png';
import '../Header.css';

function HeaderMobile() {
    return (
        <div className="header-container-mobile">
            <FontAwesomeIcon className="order-1 menu-toggle onic-button" icon={faBars} />
        
            <div className="order-2 header-logo mobile">
                <img src={logo} alt="Logo"/>
            </div>

            <FontAwesomeIcon className="order-3 onic-button" icon={faShoppingCart} />
        </div>
    )
}

export default HeaderMobile
