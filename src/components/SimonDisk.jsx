import { useContext } from "react";

import { SequenceContext } from "../context/SequenceContext";
import { useColorEffects } from "../hooks/useColorEffects";

import simonDisk from "../assets/simon.webp"

export const SimonDisk = () => {
    const { baseColors, updateFrontColor }  = useContext(SequenceContext);
    const { clickedColor } = useColorEffects();
    
    const { yellow, red, blue, green } = baseColors;
    
    const handleClickedColor = (color) => {        
        clickedColor(color);        // Llama al efecto de voz e iluminacion del disco
        updateFrontColor(color);    // Actualiza frontColor para verificar si es correcto con el color presionado con el de la secuencia
    }

    return (                              
        <div className="h-80 w-80 rounded-full relative shadow-2xl shadow-black/60">
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