import { useContext, useEffect, useState } from "react";

import { GameSimonContext } from "../context/GameSimonContext";
import { ScoreContext } from "../context/ScoreContext";

import simonDisk from "../assets/simon.webp"

export const SimonDisk = () => {
    const { baseColors, sequence, addNewColor }  = useContext(GameSimonContext);
    
    const { updateMisses, updateHits, misses, setShowResult }  = useContext(ScoreContext);
    
    const [ localSequence, setLocalSequence ] = useState([]);

    const { yellow, red, blue, green } = baseColors;

    useEffect( () => {
        if( sequence.length == 0) return;
        setLocalSequence(sequence);
    }, [ sequence ])

    useEffect( () => {
        if(misses>=3) {
            setShowResult(true);
            console.log("Sobrepaso el limite, perdiste...")
        }
    }, [misses] )

    const pushColor = (color) => {
        if(localSequence.length == 0) return;

        const message = new SpeechSynthesisUtterance(color.name);
        speechSynthesis.speak(message);

        const ref = color.ref
        ref.current.classList.remove(color.colorHover);
        ref.current.classList.add(color.colorActive);

        setTimeout(() => {
            ref.current.classList.remove(color.colorActive);
            ref.current.classList.add(color.colorHover);
        }, 200);
                        
        const firstElement = localSequence[0]; // Obtener el primer elemento de sequence para co
                
        
        // Verificar si el elemento está presente en sequence
        const checkColor = firstElement.name === color.name;
        
        const newElement = {...color, status: checkColor}        
        if( checkColor ) {
            addNewColor(newElement);
            setLocalSequence( prev => prev.slice(1));
            updateHits();                        
        } else {
            updateMisses();
            console.log("Fallido...")
        }

        
        if(misses>=3) {
            console.log("PERDISTE")
        }
    }

    return (
        <div>
            <div>
                {
                    localSequence && localSequence.map( (item, index) => <div key={ index } className="text-xs text-white">{ item.name }</div>)
                }
            </div>
        
        <div className=" h-[100%] w-[100%] rounded-full bg-whit relative b bg-contain">
            <div 
                ref={ yellow.ref } 
                onClick={ () => pushColor(yellow) }
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
                onClick={ () => pushColor(blue) }
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
                onClick={ () => pushColor(red) }
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
                onClick={ () => pushColor(green) }
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
        </div>
    )
}