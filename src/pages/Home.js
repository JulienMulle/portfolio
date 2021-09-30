import React from 'react'
import ButtonsBottom from '../components/ButtonsBottom';
import DynamicText from '../components/DynamicText';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import SocialeNetwork from '../components/SocialeNetwork.js';


const Home = () => {
    return (
        <main>
            <Mouse />
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
        </main>
    )
}

export default Home;
