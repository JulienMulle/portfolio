import React from 'react'
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/" exact activeClassName="nav-active" 
                className=" hover" 
                >
                    <li>Accueil</li>
                </NavLink>
                <li className="nav-portfolio">
                    Portfolio
                    <ul className="nav-projects">
                        <NavLink to="/Weather-app" 
                        activeClassName="nav-active" 
                        className="hover">
                            <li>Weather-app</li>
                        </NavLink>
                        <NavLink to="/Porfolio" 
                        activeClassName="nav-active" 
                        className="hover">
                            <li>Porfolio</li>
                        </NavLink>
                        <NavLink to="/MovieSearch" 
                        activeClassName="nav-active" 
                        className="hover">
                            <li>MovieSearch</li>
                        </NavLink>
                        <NavLink to="/AppRecipes" 
                        activeClassName="nav-active" 
                        className="hover">
                            <li>AppRecipes</li>
                        </NavLink>
                    </ul>
                </li>
                <NavLink to="/Contact" 
                activeClassName="nav-active"
                className=" hover" 
                >
                    <li>Contact</li>
                </NavLink>
            </ul>
        </div>
    )
}

export default Navigation;
