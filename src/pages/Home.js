import React from 'react'
import ButtonsBottom from '../components/ButtonsBottom';
import DynamicText from '../components/DynamicText';
import Navigation from '../components/Navigation';
import SocialeNetwork from '../components/SocialeNetwork.js';


const Home = () => {
    return (
        <div>
            <div className="home">
            <Navigation />
            <SocialeNetwork />
            <div className="home-main">
                <div className="main-content">
                <h1> Julien Mulle</h1>
                <h2><DynamicText /></h2>
                </div>
            </div>
            <ButtonsBottom  right={"/projet-1"}/>
            </div>
        </div>
    )
}

export default Home;
