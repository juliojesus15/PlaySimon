import { useContext } from "react";

import { SequenceContext } from "../context/SequenceContext";

import simonDisk from "../assets/simon.webp"

export const SimonDisk = () => {
    const { baseColors, updateFrontColor }  = useContext(SequenceContext);
        
    const { yellow, red, blue, green } = baseColors;
    /*
    
    useEffect( () => {
        if( localSequence!==null && localSequence.length===0 ) {
            let counter = 3;
            resetUserColors();
            const intervalId = setInterval( ()=> {
                setMessage(`la siguiente ronda empieza en ${counter}`)

                counter = counter - 1;
                if (counter === 0) {
                    clearInterval(intervalId);
                }
            }, 1000)

            setTimeout( ()=> {
                setMessage("Memoriza la siguiente secuencia")
                generateRandomSequence();
            }, 2000)        
        }
    }, [ localSequence ])
    */

    // Efecto de voz
    const speakColor = (color) => {
        const message = new SpeechSynthesisUtterance(color);
        speechSynthesis.speak(message);
    }

    // Efecto de pulsacion al momento del click sobre un color del disco simon
    const clickedColor = (color) => {
        const { name, ref, colorHover, colorActive} =  color

        // Activar voz para pronunciar el color
        speakColor(name);

        const { current } = ref;        
        current.classList.remove(colorHover);
        current.classList.add(colorActive);

        setTimeout(() => {
            current.classList.remove(colorActive);
            current.classList.add(colorHover);
        }, 200);
    }
    
    const handleClickedColor = (color) => {        
        clickedColor(color);        // Llama al efecto de voz e iluminacion del disco
        updateFrontColor(color);    // Actualiza frontColor para verificar si es correcto con el color presionado con el de la secuencia
    }

    return (              
        <div className=" h-[100%] w-[100%] rounded-full bg-whit relative b bg-contain">
            <div 
                ref={ yellow.ref } 
                onClick={ () => handleClickedColor(yellow) }
                className={`
                    absolute top-0 left-0 rounded-tl-full 
                    w-1/2 h-1/2 border-2 border-black overflow-hidden cursor-pointer  
                    ${ yellow.colorBasic }
                    ${ yellow.colorHover }
                `}
            >   
                <div className="bg-gradient-to-tl from-black/40 via-transparent to-black/10 w-full h-full"></div>
            </div>
        
            <div  
                ref={ blue.ref }  
                onClick={ () => handleClickedColor(blue) }
                className={`
                    absolute right-0 top-0 rounded-tr-full 
                    w-1/2 h-1/2 border-2 border-black overflow-hidden cursor-pointer 
                    ${ blue.colorBasic }
                    ${ blue.colorHover }
                `}
            >   
                <div className="bg-gradient-to-tl from-black/30 via-transparent to-black/40 w-full h-full"> </div>                                  
            </div>
        
            <div  
                ref={ red.ref }  
                onClick={ () => handleClickedColor(red) }
                className={`
                    absolute bottom-0 left-0 w-1/2 h-1/2 rounded-bl-full 
                    border-2 border-black overflow-hidden cursor-pointer 
                    ${ red.colorBasic }
                    ${ red.colorHover }
                `}
            >   
                <div className="bg-gradient-to-tl from-black/30 via-transparent to-black/40 w-full h-full"> </div>                 
            </div>

            <div 
                ref={ green.ref }  
                onClick={ () => handleClickedColor(green) }
                className={`
                    absolute bottom-0 right-0 w-1/2 h-1/2 rounded-br-full 
                    border-2 border-black overflow-hidden cursor-pointer 
                    ${ green.colorBasic }
                    ${ green.colorHover }
                `}
            >                    
                <div className="bg-gradient-to-tl from-transparent to-black/30 w-full h-full"> </div>
            </div>

            <div className="relative pointer-events-none">
                <img src={ simonDisk } alt="simonDisk" />
            </div>                                     
        </div>
    )
} 