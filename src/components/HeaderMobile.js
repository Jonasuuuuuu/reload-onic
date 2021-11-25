import React,{useState,useEffect} from 'react'
import {
    faFacebook,
    faTwitter,
    faTiktok,
    faYoutube,
    faInstagram
  } from '@fortawesome/free-brands-svg-icons';
import { faBars,faShoppingCart,faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from './onic-ph-logo.png';
import '../Header.css';

function HeaderMobile() {
    const [menuOpen,setOpen]= useState("show")
    const [menuClose,setClose]= useState("hide")
    const [menuContainer,setContainer]= useState("hide")
    const [menuAnimation,setAnimation]= useState("pulseOut")
    function MenuOpen(){
        setOpen("hide")
        setClose("show")
        setContainer("flex")
        setAnimation("pulseIn")
    }
    function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));}

    function MenuClose(){
        setOpen("show")
        setClose("hide")
        setAnimation("pulseOut")
        sleep(900).then(() => {setContainer("hide")});
            
    }
    

    return (
        
        <div>
            <div className="header-container-mobile">
                <FontAwesomeIcon className={`order-1 menu-toggle onic-button ${menuOpen}`} icon={faBars} onClick={(e)=>{MenuOpen()}} />
                <FontAwesomeIcon  className={`order-1 menu-toggle onic-button ${menuClose}`} icon={faTimes} onClick={(e)=>{MenuClose()}}/>
                <div className="order-2 header-logo mobile">
                    <img src={logo} alt="Logo"/>
                </div>
                <FontAwesomeIcon className="order-3 onic-button" icon={faShoppingCart} />
            </div>
            <div className={`mobile-menu ${menuContainer} ${menuAnimation}`}>
                <a className="header-link" href="https://ph.onic-esports.com/">HOME</a>
                <a className="header-link" href="https://ph.onic-esports.com/talents/">TALENTS</a>
                <a className="header-link" href="#">SHOP</a>
                <a className="header-link" href="https://ph.onic-esports.com/teams/">TEAMS</a>
                <a className="header-link" href="https://ph.onic-esports.com/about/">ABOUT</a>
                <span className="header-social">
                    <a className="social-media-icons" href="https://www.facebook.com/onic.ph"><FontAwesomeIcon className="social-media-icons" icon={faFacebook} /></a>
                    <a className="social-media-icons" href="https://www.instagram.com/onicphilippines"><FontAwesomeIcon className="social-media-icons" icon={faInstagram} /></a>
                    <a className="social-media-iconsl" href="https://www.youtube.com/c/onicph"><FontAwesomeIcon className="social-media-icons" icon={faYoutube} /></a>
                    <a className="social-media-icons" href="https://www.tiktok.com/@onic.ph"><FontAwesomeIcon className="social-media-icons" icon={faTiktok} /></a>
                    {/* <a className="header-social" href=""><FontAwesomeIcon className="social-media-icons" icon={faTwitter} /></a> */}
                </span>
            </div>
        </div>
        
    )
}

export default HeaderMobile
