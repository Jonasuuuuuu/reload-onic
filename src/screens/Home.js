import React from 'react'
import BuyButton from '../components/BuyButton'
import SectionIIB from '../components/SectionIIB';
import '../App.css'
import SectionIIA from '../components/SectionIIA';

function Home() {

    return (
        <div className="container">
            <div className="section-a">
                <SectionIIA/>
            </div>
            <div className="section-b">
                <SectionIIB/>
            </div>
            <BuyButton/>
        </div>
    )
}

export default Home
