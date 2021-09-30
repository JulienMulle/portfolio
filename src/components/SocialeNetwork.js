import React from 'react'

const SocialeNetwork = () => {
    //animation lorsque le souris passe dessus
    const anim = () =>{
        let navLinks = document.querySelectorAll('.social-network a');
        //forEach pour que chaques icones s'anime individuellement
        navLinks.forEach(link => {
            link.addEventListener('mouseover', (e) => {
                let attrX = e.offsetX - 20;
                let attrY = e.offsetY -13;

                link.style.transform = `translate(${attrX}px, ${attrY}px` ;
            })
        // pour que les icones retournes à leurs place une fois que la souris n'est plus dessus
    
            link.addEventListener('mouseleave', () => {
                link.style.transform = '';
            })

        })
    }

    return (
        <div className="social-network">
            <ul className="content">
                <a href="https://www.facebook.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover"
                onMouseOver={anim}>
                    <li><i className="fab fa-facebook-f"></i></li>
                </a>
                <a href="https://www.twitter.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover"
                onMouseOver={anim}>
                    <li><i className="fab fa-twitter"></i></li>
                </a>
                <a href="https://www.instagram.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover"
                onMouseOver={anim}>
                    <li><i className="fab fa-instagram"></i></li>
                </a>
            </ul>
        </div>
    )
}

export default SocialeNetwork;