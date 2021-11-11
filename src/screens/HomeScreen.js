import React from 'react'
import Home from './Home';
import Header from '../components/Header';
import '../App.css'
import '../Mobile.css'
import HeroImg from '../components/HeroImg';
import HeaderMobile from '../components/HeaderMobile';
import Footer from '../components/Footer';

function HomeScreen() {
    return (
        <div className="app">
            <div className="header-pc">
                <Header/>
            </div>
            <div className="header-mobile">
                <HeaderMobile/>
            </div>
            <HeroImg/>
            <Home/>
            <Footer/>
        </div>
    )
}

export default HomeScreen
