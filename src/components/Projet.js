import React, { useState } from 'react';
import {projectsData} from'../data/projectsData';
import { motion } from 'framer-motion';

const Projet = (props) => {

    //je stocke mes données dans le tableau currentProject
    const [currentProject] = useState(projectsData)
    const project = currentProject[props.projectNumber]
        
    //pour le background, un cercle pop de façon aléatoire en bas à droite. 
    let left = Math.floor(Math.random()*200+700) + "px";
    let top = Math.floor(Math.random()*200+150) + "px";
    let transform = "scale(" + (Math.random() + 0.7) + ")";

    // on va stocker tout les reglages de l'animation de la page dans une const
    const variants = {
        //on demarre par la base
            initial: {
                opacity: 0,
                transition: { duration: 0.5},
                x: 200,
            },
        //quand le components arrive
            visible:{
                opacity: 1,
                x: 0,
            },
        // quand le component s'en va
            exit:{
                opacity: 0.4,
                transition: { duration:0.35},
                x:-800,
            }
        };

    // parametrage de l'animation de l'image
        // variable qui va determiner que parfois c'est +(60% du temps) et parfois c'est moins (40% du temps) -- si le chiffre est superieur à 0.4 alors tu fais 1 sinon tu fais -1
        let plusMinus = Math.random() > 0.4 ? 1 :-1;
        // random de l'arriver de l'image
        let imgX= Math.random()* 350 * plusMinus;
        let imgY= Math.random()* 120 * plusMinus;

        const imgAnim= {
            initial: {
                opacity: 0,
                x: imgX,
                y: imgY,
            },
            visible: {
                opacity:1,
                x: 0,
                y: 0,
            },
        };

        // parametrage de la transition 
        const transition = {
            ease: [0.03, 0.87, 0.73, 0.9],
            duration: 0.6,
        }

    return (
        <motion.div 
        className="project-main"
        initial="initial"
        animate="visible"
        exit="exit"        
        transition={transition}
        variants={variants}
        >
            <div className="project-content">
                <h1>{project.title}</h1>
                <p>{project.date}</p>
                <ul className="languages">
                 {project.languages.map((item) => {
                    return <li key={item}>{item}</li>;})}
                </ul>
            </div>
            
            <motion.div 
            className="img-content"
            initial="initial"
            animate="visible"
            variants={imgAnim}
            transition={{duration: 1.2}}
            >                
                <div className="img-container hover">
                    <span>
                        <h3>{project.title}</h3>
                        <p>{project.infos}</p>
                    </span>
                    <img src={project.img} alt={project.title} />
                </div>
                <div className="button-container">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover">
                    <span className="button"> voir le site </span>
                    </a>                 
                </div>
            </motion.div>
            <span className="random-circle" style={{left, top, transform}}></span>
        </motion.div>
    )
}

export default Projet;

