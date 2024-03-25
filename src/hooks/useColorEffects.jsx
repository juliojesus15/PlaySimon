export const useColorEffects = () => {
    const delay = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    };

    // Función para hablar el nombre del color
    const speakColor = (color) => {
        const message = new SpeechSynthesisUtterance(color);
        speechSynthesis.speak(message);
    };

    const changeColorEffect = async (ref, initialColor, finalColor) => {
        const { current } = ref;
        current.classList.remove(initialColor);
        current.classList.add(finalColor);

        await delay(200);

        current.classList.remove(finalColor);
        current.classList.add(initialColor);      
    }

    // Función para el efecto de pulsación al hacer clic en un color
    const clickedColor = (color) => {
        const { name, ref, colorHover, colorActive } = color;
        
        speakColor(name);
        changeColorEffect(ref, colorHover, colorActive);
    };
        
    // Función realizar el efecto de pulsacion sobre toda una secuancia de colores
    const speechSequence = async (colorSequence, displayMessage, speakDelay) => {
        await delay(700);
        displayMessage("empezamos...");
        await delay(1500);        

        for (let i = 0; i < colorSequence.length; i++) {
            const color = colorSequence[i];

            if (i > 0) await delay(speakDelay);
            
            clickedColor(color);
            displayMessage(color.name);                        
        }
    };

    const startCountdownOnScreen = (displayMessage, stepDelay) => {
        return new Promise( resolve => {
            let counter = 3;
            const intervalId = setInterval(() => {
                const message = `El juego Inicia en ${counter}`;
                displayMessage(message);

                if (counter === 0) {
                    
                    displayMessage('startGame');
                    clearInterval(intervalId);
                    resolve();
                }
                counter--;
            }, stepDelay);
        });
    };

    const startSpeechSequence = async (colorSequence, displayMessage) => {
        try {
            await speechSequence(colorSequence, displayMessage, 1000); 
            await startCountdownOnScreen(displayMessage, 700); 
        } catch (error) {
            console.error("Error:", error);
        }  
    }

    

    return { clickedColor, speechSequence, startSpeechSequence };
}