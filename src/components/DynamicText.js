import React, { useEffect } from 'react'

const DynamicText = () => {
// utilisation d'un hook
    
        let array = ["simple","clear", "smart", "strong"];
        //on va d'abord lire les mots, 
        let wordIndex=0;
        // et ensuite les lettres contenu dans array
        let letterIndex=0;

        useEffect(() => {

            const target = document.getElementById("text-target");
//creation des lettres qui ne reste que 2sec
            const createLetter = () => {
              const letter = document.createElement("span");
              target.appendChild(letter);
        
              letter.classList.add("letter");
              letter.style.opacity = "0";
              letter.style.animation = "anim 5s ease forwards";
              letter.textContent = array[wordIndex][letterIndex];
        
              setTimeout(() => {
                letter.remove();
              }, 2000);
            };
// la boucle ce relance tout les 800iemes de seconde
    const loop = () => {
      setTimeout(() => {
        if (wordIndex >= array.length) {
          wordIndex = 0;
          letterIndex = 0;
          loop();
        } else if (letterIndex < array[wordIndex].length) {
          createLetter();
          letterIndex++;
          loop();
        } else {
          letterIndex = 0;
          wordIndex++;
          setTimeout(() => {
            loop();
          }, 2000);
        }
      }, 80);
    };
    loop();
  }, []);
      
    return (
        <span className="dynamic-text">
            <span className="simply">simply</span>
            <span id="text-target"></span>
        </span>
    )
}

export default DynamicText;
