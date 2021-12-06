import React from 'react'
import ButtonsBottom from '../components/ButtonsBottom';
import DynamicText from '../components/DynamicText';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import SocialeNetwork from '../components/SocialeNetwork.js';
import { motion } from 'framer-motion';

const Home = () => {

    // on va stocker tout les reglages de la page dans une const
    const variants = {
    //on demarre par la base
        initial: {
            opacity: 0,
            transition: { duration: 0.5},
            x: 100,
        },
    //quand le components arrive
        visible:{
            opacity:1,
            x:0,
        },
    // quand le component s'en va
        exit:{
            opacity: 0,
            transition: { duration:0.3},
            x:-100
        }
    }

    return (
        <main>
            <Mouse />
            <motion.div 
            className="home"
            initial="initial"
            animate="visible"
            exit="exit"
            variants={variants}>           
            <Navigation />
            <SocialeNetwork />
            <div className="home-main">
                <div className="main-content">
                <h2>Hello, je suis </h2>
                <h1> Julien Mulle</h1>
                <h2>Developpeur Front-End</h2>
                {/*<h2><DynamicText /></h2>*/}
                </div>
            </div>
            <ButtonsBottom  right={"/projet-1"}/>
            </motion.div>
        </main>
    )
}

export default Home;
