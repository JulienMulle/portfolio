
import React from 'react'
import ButtonsBottom from '../components/ButtonsBottom';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import Projet from '../components/Projet';

export const Project1 = () => {
    return (
        <main>
            <div className="project">
                <Mouse />
                <Navigation />
                <Projet projectNumber={0} />
                
                <ButtonsBottom left={'/'} right={'/Porfolio'} />
            </div>
        </main>
    )
};

export const Project2 = () => {
    return (
        <main>
            <div className="project">
                <Mouse />
                <Navigation />
                <Projet projectNumber={1} />
                <ButtonsBottom left={'/Weather-app'} right={'/MovieSearch'} />
            </div>
        </main>
    )
};
export const Project3 = () => {
    return (
        <main>
            <div className="project">
                <Mouse />
                <Navigation />
                <Projet projectNumber={2} />
                <ButtonsBottom left={'/Porfolio'} right={'/AppRecipes'} />
            </div>
        </main>
    )
};

export const Project4 = () => {
    return (
        <main>
            <div className="project">
                <Mouse />
                <Navigation />
                <Projet projectNumber={3} />
                <ButtonsBottom left={'/MovieSearch'} right={'/Contact'} />
            </div>
        </main>
    )
};