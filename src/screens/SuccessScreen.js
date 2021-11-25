import React from 'react'
import Header from '../components/Header'
import HeaderMobile from '../components/HeaderMobile'
import SuccessSplash from '../components/SuccessSplash'
import Footer from '../components/Footer'
import '../App.css'
import '../Mobile.css'
import '../Success.css'

function SuccessScreen() {
    return (
        <div className="app">
            <div className="header-pc">
                <Header/>
            </div>
            <div className="header-mobile">
                <HeaderMobile/>
            </div>
            <SuccessSplash/>
            <Footer/>
        </div>
    )
}

export default SuccessScreen
