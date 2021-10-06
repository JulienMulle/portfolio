import React from 'react';
import ButtonsBottom from '../components/ButtonsBottom';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import { motion } from 'framer-motion';
import SocialeNetwork from '../components/SocialeNetwork';
import CvJulienMulle from '../assets/media/cv_JulienMulle_devFront.pdf';
import CvImage from '../assets/media/cv_JulienMulle5.jpg';

const Cv = () => {

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
                // parametrage de la transition en cubic bezier
                const transition = {
                    ease: [0.03, 0.87, 0.73, 0.9],
                    duration: 0.6,
                };

    return (
        <main>
            <Mouse />
            <motion.div 
            className="contact"
            initial="initial"
            animate="visible"
            exit="exit"
            variants={variants}
            transition={transition}
            >
            <Navigation />
                <div className="contact-form">
                    <div className="img-container">
                        <img src={CvImage} alt="Cv Julien Mulle" />
                    </div>
                
                <div className="button-container">
                    <a href={CvJulienMulle} download="cv" rel="noopener noreferrer" className="hover">
                    <span className="button"> Telecharger </span>
                    </a>                 
                </div>
                </div>
            <SocialeNetwork />
            <ButtonsBottom left={'/'} right={'/projet-1'}/>
            </motion.div>
        </main>
    )
}

export default Cv;
