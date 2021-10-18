import React from 'react'
import logo from './ml-splash.jpg';
import drbanner from './dr-banner.png';


function HeroImg() {
    return (
        <div>
            <div className="splash" style={{backgroundImage: "linear-gradient(rgba(0,0,0, 0) 0%,rgba(0,0,0, 1) 100%),url(" + logo + ")"}}>
                <img src={drbanner} alt="ml-splash"/>
            </div>
        </div>
    )
}

export default HeroImg
