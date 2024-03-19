import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { SequenceContext } from "../context/SequenceContext";
import { ScoreContext } from "../context/ScoreContext";
import { RoundContext } from "../context/RoundContext";

import { PlayIcon } from "./icons/PlayIcon";
import { ReplayIcon } from "./icons/ReplayIcon";
import { PauseIcon } from "./icons/PauseIcon";
import { HomeIcon } from "./icons/Home";
import { InfoIcon } from "./icons/InfoIcon";

import { customMessage } from "../constants/message";

export const SequenceControl = () => {
    const { generateRandomSequence, sequence }  = useContext(SequenceContext);
    const { setMessage, resetSoloValues } =  useContext(ScoreContext);

    const { setStartRound } = useContext(RoundContext);

    const navigate = useNavigate();

    const speakSequence = ( colorSequence ) => {            
        colorSequence.forEach( (color,index) => {    
            
            const { name, colorBasic, colorActive, ref } = color;
            
            setTimeout(() => {
                const message = new SpeechSynthesisUtterance(name);
                speechSynthesis.speak(message);

                setMessage(name);
                
                ref.current.classList.remove(colorBasic); 
                ref.current.classList.add(colorActive);
                
                setTimeout(() => {
                    ref.current.classList.remove(colorActive);
                    ref.current.classList.add(colorBasic);
                }, 200);
            }, index * 1000); 
        });
        //setStarLevel(true);
    }
   
    useEffect( () => {  
        if( sequence.length === 0 ) return;

        speakSequence(sequence);
                
        setTimeout(()=> {            
            let counter = 3
            const intervalId = setInterval( () => {
                const displayMessage = `Inicia en ${ counter }`;
                setMessage(displayMessage)

                if(counter==0) {
                    setMessage("¡empezamos!")
                    setStartRound( true );
                    clearInterval(intervalId);
                }
                counter--;                
            }, 700 )
        }, 1500)        
        
    }, [ sequence ])

    const handleGoHome = () => {
        localStorage.removeItem('gameMode');
        resetSoloValues();
        navigate("/");
    }

    const handleStarGame = () => {        
        generateRandomSequence(0,4);
    }

    const hanleStopGame = () => {
        console.log("Pendiente: Detener el juego")
    }

    const handleRepeatGame = () => {
        if( sequence.length>0 ) {
            setMessage("¡Una vez mas, memorizar la siguiente secuencia!")
            speakSequence(sequence);            
        } else {
            setMessage("Dale en empezar para iniciar un nuevo juego")
        }
    }

    const handleHelpMe = () => {
        console.log("Pendiente: Mostrar informacion del juego")
    }
  
    return (            
        <footer className="bg-custom-blue-200 border-t-2 border-custom-blue-100/10 h-20">
            <ul className="flex items-center justify-around font-title font-bold text-lg uppercase w-full h-full">
                <li className="">
                    <div
                        onClick={ handleGoHome }  
                        className="flex flex-col gap-1 items-center cursor-pointer group"
                    >
                        <HomeIcon className="fill-custom-yellow-100 w-10 group-hover:scale-110 group-active:scale-95"/>
                        <span className="text-gray-300 leading-3 group-hover:text-custom-yellow-100"> Inicio </span>
                    </div>
                </li>
                <li className="">
                    <div
                        onClick={ handleStarGame }  
                        className="flex flex-col gap-1 items-center cursor-pointer group"
                    >
                        <PlayIcon className="fill-custom-yellow-100 w-10 group-hover:scale-110 group-active:scale-95"/>
                        <span className="text-gray-300 leading-3 group-hover:text-custom-yellow-100"> Empezar </span>
                    </div>
                </li>
                <li className="">
                    <div
                        onClick={ hanleStopGame }  
                        className="flex flex-col gap-1 items-center cursor-pointer group"
                    >
                        <PauseIcon className="fill-custom-yellow-100 w-10 group-hover:scale-110 group-active:scale-95"/>
                        <span className="text-gray-300 leading-3 group-hover:text-custom-yellow-100"> Pausar </span>
                    </div>
                </li>
                <li className="">
                    <div
                        onClick={ handleRepeatGame }  
                        className="flex flex-col gap-1 items-center cursor-pointer group"
                        >
                        <ReplayIcon className="fill-custom-yellow-100 w-10 group-hover:scale-110 group-active:scale-95"/>
                        <span className="text-gray-300 leading-3 group-hover:text-custom-yellow-100"> Repetir </span>
                    </div>
                </li>
                <li className="">
                    <div
                        onClick={ handleHelpMe }  
                        className="flex flex-col gap-1 items-center cursor-pointer group"
                    >
                        <InfoIcon className="fill-custom-yellow-100 w-10 group-hover:scale-110 group-active:scale-95"/>
                        <span className="text-gray-300 leading-3 group-hover:text-custom-yellow-100"> Ayuda </span>
                    </div>
                </li>
            </ul>
        </footer>
    )
}