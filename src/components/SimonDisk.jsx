import { useContext } from "react";
import { GameSimonContext } from "../context/GameSimonContext";

import simonDisk from "../assets/simon.webp"


export const SimonDisk = ({ colors }) => {
    const { 
        addNewColor, 
        redRef, yellowRef, greenRef, blueRef 
    }  = useContext(GameSimonContext);


    const addColor = (ref, color) => {        
        const message = new SpeechSynthesisUtterance(color.name);
        speechSynthesis.speak(message);

        //if (sequence.length > 0) {
            /*
            //const firstElement = sequence[0]; // Obtener el primer elemento de sequence
            //console.log("🚀 ~ addColor ~ firstElement:", firstElement)
    
            // Verificar si el elemento está presente en sequence
            //const checkColor = firstElement.name === color.name
            //console.log("🚀 ~ addColor ~ checkColor:", checkColor)
            //if(checkColor) {
                //const newElement = {...color, status: checkColor}

                //setResponse(prevResponse => [...prevResponse, newElement]);
                //addNewColor(newElement);
                //setSequence(prevSequence => prevSequence.slice(1));

            } else {
                const newElement = {...color, status: checkColor}
                //setResponse(prevResponse => [...prevResponse, newElement]);
                addNewColor(newElement);
            }*/
            const newElement = {...color, status: true}            
            addNewColor(newElement);
        //}
    }

    return (
        <div className=" h-[100%] w-[100%] rounded-full bg-whit relative b bg-contain ">            

        <div 
            ref={ yellowRef } 
            onClick={ () => addColor(yellowRef, colors['yellow']) }
            className="top-0 left-0 w-1/2 h-1/2 cursor-pointer bg-amber-400 rounded-tl-full absolute border-2 border-black overflow-hidden"
        >   
            <div className="w-full h-full bg-gradient-to-tl from-black/40 via-transparent to-black/10"> </div>
        </div>
        <div  
            ref={ blueRef }  
            onClick={ () => addColor(blueRef , colors['blue'] ) }
            className="w-1/2 h-1/2 right-0 top-0 bg-cyan-600 rounded-tr-full absolute border-2 border-black overflow-hidden"
        >   
            <div className="w-full h-full bg-gradient-to-tl from-black/30 via-transparent to-black/40"> </div>                                  
        </div>
        <div  
            ref={ redRef }  
            onClick={ () => addColor(redRef, colors['red'] ) }
            className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-red-600 rounded-bl-full border-2 border-black overflow-hidden"
        >   
            <div className="w-full h-full bg-gradient-to-tl from-black/30 via-transparent to-black/40"> </div>                 
        </div>
        <div 
            ref={ greenRef }  
            onClick={ () => addColor(greenRef, colors['green'] ) }
            className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-lime-500 rounded-br-full border-2 border-black overflow-hidden"
        >                    
            <div className="w-full h-full bg-gradient-to-tl from-transparent to-black/30"> </div>
        </div>

        <div className="h-full w-full rounded-full relative bg- bg-contain pointer-events-none">
            <img src={simonDisk} />
        </div>                                     
    </div>
    )
}