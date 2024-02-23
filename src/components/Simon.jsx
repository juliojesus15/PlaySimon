import { useEffect, useRef, useState} from "react";

import simonDisk from "../assets/simon.webp"

export const Simon = () => {
    const redColorRef = useRef(null);
    const yellowColorRef = useRef(null);
    const blueColorRef = useRef(null);
    const greenColorRef = useRef(null);

    const colors = {
        'red': {
            name: 'rojo',
            ref: redColorRef,
            colorBasic: 'bg-red-500',
            colorActive: 'bg-red-700',
        },
        'yellow': {
            name: 'amarillo',
            ref: yellowColorRef,
            colorBasic: 'bg-amber-500',
            colorActive: 'bg-yellow-700',

        },
        'blue': {
            name: 'azul',
            ref: blueColorRef,
            colorBasic: 'bg-cyan-600',
            colorActive: 'bg-blue-700',
        },
        'green': {
            name: 'verde',
            ref: greenColorRef,
            colorBasic: 'bg-lime-500',
            colorActive: 'bg-lime-700',
        }  
    }


    const [ sequence, setSequence ] = useState(
        [
            colors['red'],
            colors['yellow'],
            colors['blue'],              
        ]
    )

    const [ response, setResponse ] = useState([])

    const addMessage = () => {                
        sequence.forEach( (color,index) => {                        
            const intervalId = setTimeout(() => {
                const message = new SpeechSynthesisUtterance(color.name);
                speechSynthesis.speak(message);

                const ref = color.ref                                
                ref.current.classList.remove(color.colorBasic);
                ref.current.classList.add(color.colorActive);
                
                setTimeout(() => {
                    ref.current.classList.remove(color.colorActive);
                    ref.current.classList.add(color.colorBasic);
                }, 200);
            }, index * 1500); 
        });
    }
      
    const addColor = (ref, color) => {        
        const message = new SpeechSynthesisUtterance(color.name);
        speechSynthesis.speak(message);

        if (sequence.length > 0) {
            const firstElement = sequence[0]; // Obtener el primer elemento de sequence
            console.log("🚀 ~ addColor ~ firstElement:", firstElement)
    
            // Verificar si el elemento está presente en sequence
            const checkColor = firstElement.name === color.name
            console.log("🚀 ~ addColor ~ checkColor:", checkColor)
            if(checkColor) {
                const newElement = {...color, status: checkColor}

                setResponse(prevResponse => [...prevResponse, newElement]);
                setSequence(prevSequence => prevSequence.slice(1));

            } else {
                setResponse(prevResponse => [...prevResponse, {...color, status: checkColor}]);
            }

                
        }

    }

    return (
        <section className="border h-full flex justify-between p-10">
            <div className="w-1/2  flex flex-col gap-3">
                <h2 className="font-roboto font-black text-xl text-gray-100"> Computer mode </h2>
                <button onClick={addMessage}  className="bg-white px-2 py-1"> Generar nueva secuencia </button>
                <ul className="font-roboto font-medium text-gray-100 text-xs flex flex-col flex-wrap gap-2">
                    {
                        response.map( item => {
                            return (
                                <li className="flex items-center gap-2">
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
                <div>
                    Mensaje de alerta
                </div>
            </div>
            <div className="w-80 h-80  flex justify-center items-center rounded-full shadow-2xl shadow-black">

                <div className=" h-[100%] w-[100%] rounded-full bg-whit relative b bg-contain ">

                    <div 
                        ref={ yellowColorRef } 
                        onClick={ () => addColor(yellowColorRef, colors['yellow']) }
                        className="top-0 left-0 w-1/2 h-1/2 cursor-pointer bg-amber-400 rounded-tl-full absolute border-2 border-black overflow-hidden"
                    >   
                        <div className="w-full h-full bg-gradient-to-tl from-black/40 via-transparent to-black/10"> </div>
                    </div>
                    <div  
                        ref={ blueColorRef }  
                        onClick={ () => addColor(blueColorRef , colors['blue'] ) }
                        className="w-1/2 h-1/2 right-0 top-0 bg-cyan-600 rounded-tr-full absolute border-2 border-black overflow-hidden"
                    >   
                        <div className="w-full h-full bg-gradient-to-tl from-black/30 via-transparent to-black/40"> </div>                                  
                    </div>
                    <div  
                        ref={ redColorRef }  
                        onClick={ () => addColor(redColorRef, colors['red'] ) }
                        className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-red-600 rounded-bl-full border-2 border-black overflow-hidden"
                    >   
                        <div className="w-full h-full bg-gradient-to-tl from-black/30 via-transparent to-black/40"> </div>                 
                    </div>
                    <div 
                        ref={ greenColorRef }  
                        onClick={ () => addColor(greenColorRef, colors['green'] ) }
                        className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-lime-500 rounded-br-full border-2 border-black overflow-hidden"
                    >                    
                        <div className="w-full h-full bg-gradient-to-tl from-transparent to-black/30"> </div>
                    </div>

                    <div className="h-full w-full rounded-full relative bg- bg-contain pointer-events-none">
                        <img src={simonDisk} />
                    </div>                                     
                </div>
            </div>

            
        </section>
    )
}