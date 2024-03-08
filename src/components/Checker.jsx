import { useContext, useEffect, useState } from "react";

import { GameSimonContext } from "../context/GameSimonContext";

export const Checker = () => {

    const { userColors, generateRandomSequence, sequence }  = useContext(GameSimonContext);
   
    const [ generateSequence, setGenerateSenquence ] = useState(false);
    useEffect( () => {  
        console.log(":DDDDDDD")
        if( sequence.length >0 ) {

            sequence.forEach( (color,index) => {                        
                
                const intervalId = setTimeout(() => {
                    const message = new SpeechSynthesisUtterance(color.name);
                    speechSynthesis.speak(message);
                    
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
        //setGenerateSenquence(true);
        generateRandomSequence(0,4);
        /*const sequence = generateRandomSequence(0,4);
        console.log("🚀 ~ addMessage ~ sequence:", sequence)
                     
        sequence.forEach( (color,index) => {                        
            
            const intervalId = setTimeout(() => {
                const message = new SpeechSynthesisUtterance(color.name);
                speechSynthesis.speak(message);

                const ref = color.ref;
                ref.current.classList.remove(color.colorBasic);
                ref.current.classList.add(color.colorActive);
                
                setTimeout(() => {
                    ref.current.classList.remove(color.colorActive);
                    ref.current.classList.add(color.colorBasic);
                }, 200);
            }, index * 1500); 
        });*/
    }
  

    return (            
        <div>
            <div>

            <h2 className="font-roboto font-black text-xl text-gray-100"> Computer mode </h2>
                <button onClick={addMessage}  className="bg-white px-2 py-1"> Generar nueva secuencia </button>
            </div>
                

        <ul className="font-roboto font-medium text-gray-100 text-xs flex flex-col flex-wrap gap-2 border h-32">
            {
                userColors && userColors.map( (item, key) => {
                    return (
                        <li className="flex items-center gap-2" key={ key }>
                            <div className={`w-4 h-4 rounded-full border border-white shadow-xl shadow-black ${item.colorBasic}`}></div>
                            {
                                item.status 
                                    ? <p> Correcto </p> 
                                    : <p> Incorrecto </p>
                                }
                        </li>
                    )
                })
            }
        </ul>            
        </div>
    )
}