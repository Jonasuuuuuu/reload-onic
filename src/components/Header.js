import React from 'react'
import {
    faFacebook,
    faTwitter,
    faTiktok,
    faYoutube,
    faInstagram
  } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from './onic-ph-logo.png';
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
            <a className="header-social" href="https://www.facebook.com/onic.ph"><FontAwesomeIcon className="social-media-icons" icon={faFacebook} /></a>
            <a className="header-social" href="https://www.instagram.com/onicphilippines"><FontAwesomeIcon className="social-media-icons" icon={faInstagram} /></a>
            <a className="header-social" href="https://www.youtube.com/c/onicph"><FontAwesomeIcon className="social-media-icons" icon={faYoutube} /></a>
            <a className="header-social" href="https://www.tiktok.com/@onic.ph"><FontAwesomeIcon className="social-media-icons" icon={faTiktok} /></a>
            {/* <a className="header-social" href=""><FontAwesomeIcon className="social-media-icons" icon={faTwitter} /></a> */}
            </span>

        </div>
    )
}

export default Header
