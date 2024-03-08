import { useContext, useEffect, useState } from "react";

import { GameSimonContext } from "../context/GameSimonContext";
import { DotColor } from "./DotColor";

export const SequenceGenerator = () => {

    const { userColors, generateRandomSequence, sequence }  = useContext(GameSimonContext);
   
    const [ generateSequence, setGenerateSenquence ] = useState(false);

    const [ temporalSequence, setTemporalSequence ] = useState([]);

    useEffect( () => {  
        if( sequence.length >0 ) {
            
            sequence.forEach( (color,index) => {                        
                
                const intervalId = setTimeout(() => {
                    const message = new SpeechSynthesisUtterance(color.name);
                    speechSynthesis.speak(message);

                    setTemporalSequence( prev => [...prev, color]);
                     
                    const ref = color.ref;
                    ref.current.classList.remove(color.colorBasic);
                    ref.current.classList.add(color.colorActive);
                    
                    setTimeout(() => {
                        ref.current.classList.remove(color.colorActive);
                        ref.current.classList.add(color.colorBasic);
                    }, 200);
                }, index * 1500); 
            });
            
        }
    }, [ sequence])


    const addMessage = () => {     
        setTemporalSequence([]);
        generateRandomSequence(0,4);
    }
  

    return (            
        <div className="flex flex-col gap-4">
            <button 
                onClick={addMessage}  
                className="bg-gray-100 px-4 py-1 rounded border-2 shadow-2xl active:scale-105 hover:bg-cyan-600 hover:text-white hover:border-white shadow-gray-100 border-gray-500 w-fit text-xs font-medium  text-gray-800 font-roboto"
            > 
                Nueva secuencia 
            </button>
            <div>
                <ul className="flex gap-1">
                { temporalSequence && temporalSequence.map( (element, index) => 
                    <li key={ index }> 
                        <DotColor objColor={ element }/> 
                    </li>
                )}                    
                </ul>
            </div>
        </div>                        
    )
}