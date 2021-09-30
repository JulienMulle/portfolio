import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import ButtonsBottom from '../components/ButtonsBottom';
import Logo from '../components/Logo';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import SocialeNetwork from '../components/SocialeNetwork';


const Contact = () => {
    return (
        <main>
            <Mouse />
            <div className="contact">
            <Navigation/>
            <Logo />
            <div className="contact-infos">
                <div className="adress">
                    <div className="content">
                        <h4>adresse</h4>
                        <p> 12 rue du code</p>
                        <p> 33000 Bordeaux</p>
                    </div>
                </div>

                <div className="phone">
                    <div className="content">
                        <h4>téléphone</h4>
                        <CopyToClipboard text="0606060606" className="hover">
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
                        <CopyToClipboard text="julienmulle@gmail.com"
                        className="hover">
                            <p style={{cursor: 'pointer'}} 
                            className="clipboard" 
                            onClick={() => {
                                alert(`l'Email est copié !`);
                            }}> 
                            julienmulle@gmail.com</p>
                        </CopyToClipboard>
                    </div>
                </div>
                <SocialeNetwork />
            </div>           
            <ButtonsBottom/>
            </div>
        </main>
    )
}

export default Contact;
