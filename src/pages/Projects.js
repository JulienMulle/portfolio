
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
                
                <ButtonsBottom left={'/'} right={'/projet-2'} />
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
                <ButtonsBottom left={'/projet-1'} right={'/projet-3'} />
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
                <ButtonsBottom left={'/projet-2'} right={'/projet-4'} />
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
                <ButtonsBottom left={'/projet-3'} right={'/contact'} />
            </div>
        </main>
    )
};