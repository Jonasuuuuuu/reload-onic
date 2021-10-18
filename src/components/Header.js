import React from 'react'
import {
    faFacebook,
    faTwitter,
    faTiktok,
    faYoutube,
    faInstagram
  } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from './onic-logo.png';
import '../Header.css';
function Header() {
    return (
        <div className="header-container">
            <div className="header-logo">
                <img src={logo} alt="Logo"/>
            </div>
            <span className="header-links">
                <a className="header-link" href="">HOME</a>
                <a className="header-link" href="">TALENTS</a>
                <a className="header-link" href="">SHOP</a>
                <a className="header-link" href="">PARTNERS</a>
                <a className="header-link" href="">NEWS</a>
                <a className="header-link" href="">LOOKBOOK</a>
                <a className="header-link" href="">ABOUT</a>
            </span>

            <span className="header-social">
                <FontAwesomeIcon className="social-media-icons" icon={faFacebook} />
                <FontAwesomeIcon className="social-media-icons" icon={faInstagram} />
                <FontAwesomeIcon className="social-media-icons" icon={faYoutube} />
                <FontAwesomeIcon className="social-media-icons" icon={faTiktok} />
                <FontAwesomeIcon className="social-media-icons" icon={faTwitter} />
            </span>

        </div>
    )
}

export default Header
