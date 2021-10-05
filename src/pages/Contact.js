import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import ButtonsBottom from '../components/ButtonsBottom';
import ContactForm from '../components/ContactForm';
import Logo from '../components/Logo';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import SocialeNetwork from '../components/SocialeNetwork';
import { motion } from 'framer-motion';



const Contact = () => {

        // on va stocker tout les reglages de la page dans une const
        const variants = {
            //on demarre par la base
                initial: {
                    opacity: 1,
                    x: 0,
                },
           
            // quand le component s'en va
                exit:{
                    opacity: 0,
                    x: 300,
                }
            };

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
            initial="exit"
            animate="initial"
            exit="exit"
            variants={variants}
            transition={transition}
            >
            <Navigation/>
            <Logo />
            <ContactForm />
            <div className="contact-infos">
                

                <div className="phone">
                    <div className="content">
                        <h4>téléphone</h4>
                        <CopyToClipboard text="0619408776" className="hover">
                            <p style={{cursor: 'pointer'}} 
                            className="clipboard" 
                            onClick={() => {
                                alert('le numéro est copié !');
                            }}> 
                            0619408776</p>
                        </CopyToClipboard>
                    </div>
                </div>
                <div className="email">
                <div className="content">
                    <h4>email</h4>
                        <CopyToClipboard text="julienmulle@gmail.com" className="hover">
                        <p
                        style={{cursor: 'pointer'}}
                        className="clipboard"
                        onClick={() => {
                        alert("Email copié !");
                        }}>
                        julienmulle@gmail.com
                        </p>
                        </CopyToClipboard>
                </div>
                </div>
                <SocialeNetwork />
            </div>           
                <ButtonsBottom  left={'/projet-4'} />
            </motion.div>
        </main>
    )
}

export default Contact;
