export const useColorEffects = () => {

    // Función para hablar el nombre del color
    const speakColor = (color) => {
        const message = new SpeechSynthesisUtterance(color);
        speechSynthesis.speak(message);
    };

    const changeColorEffect = (ref, initialColor, finalColor) => {
        const { current } = ref;
        current.classList.remove(initialColor);
        current.classList.add(finalColor);

        setTimeout(() => {
            current.classList.remove(finalColor);
            current.classList.add(initialColor);
        }, 200);
    }

    // Función para el efecto de pulsación al hacer clic en un color
    const clickedColor = (color) => {
        const { name, ref, colorHover, colorActive } = color;
        
        speakColor(name);
        changeColorEffect(ref, colorHover, colorActive);
    };

    // Función realizar el efecto de pulsacion sobre toda una secuancia de colores
    const speakSequence = ( colorSequence, displayMessageOnScreen ) => {                          
        colorSequence.forEach( (color,index) => {            
            setTimeout(() => {
                clickedColor(color);
                displayMessageOnScreen(color.name);
            }, index * 1000); 
        });
    }

    return { clickedColor, speakSequence };
}