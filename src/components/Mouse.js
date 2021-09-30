import React, { useEffect } from 'react';

const Mouse = () => {

    const cursor = document.querySelector('.cursor');

    useEffect(() => {
        //on souhaite que le cercle suive la souris dès qu'elle ce deplace
        const handleCursor = (e) => {
            cursor.style.top = e.pageY + "px";
            cursor.style.left = e.pageX + "px";
        }

        window.addEventListener('mousemove', handleCursor);
        //quand la souris et le cercle sont sur un lien, le cercle change de forme
        const handleHover = () => {
            //on rajoute une classe pour retrecir le cercle sur un lien
            cursor.classList.add('hovered');
        };
        const handleLeave =() => {
            //et on lui enlève la classe avec une transition quand elle n'est plus sur un lien
            cursor.style.transition = ".3s ease-out";
            document.querySelector('.cursor').classList.remove('hovered');
        }
        document.querySelectorAll('.hover').forEach((link) => {
            link.addEventListener('mouseover', handleHover);
            link.addEventListener('mouseleave', handleLeave);
        })
    
    }, []);

    return (
        <span className="cursor"></span>
    )
};

export default Mouse;
