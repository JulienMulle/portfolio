import React, { useState } from 'react';
import {projectsData} from'../data/projectsData';

const Projet = (props) => {
    //je stocke mes données dans le tableau currentProject
     const [currentProject] = useState(projectsData)
     const project = currentProject[props.projectNumber]
     
    return (
        <div className="project-main">
            <div className="project-content">
                <h1>{project.title}</h1>
                <p>{project.date}</p>
                <ul className="languages">
                 {project.languages.map((item) => {
                    return <li key={item}>{item}</li>;})}
                </ul>
            </div>
            
            <div className="img-content">                
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
            </div>
        </div>
    )
}

export default Projet;

