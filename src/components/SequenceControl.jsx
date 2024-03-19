import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { SequenceContext } from "../context/SequenceContext";
import { ScoreContext } from "../context/ScoreContext";
import { RoundContext } from "../context/RoundContext";

import { ReplayIcon } from "./icons/ReplayIcon";
import { PauseIcon } from "./icons/PauseIcon";
import { PlayIcon } from "./icons/PlayIcon";
import { HomeIcon } from "./icons/Home";
import { InfoIcon } from "./icons/InfoIcon";
import { useColorEffects } from "../hooks/useColorEffects";

export const SequenceControl = () => {
    const { generateRandomSequence, sequence }  = useContext(SequenceContext);
    const { setMessage, resetSoloValues, displayMessageOnScreen } =  useContext(ScoreContext);

    const { speakSequence } = useColorEffects();

    const { setStartRound } = useContext(RoundContext);

    const navigate = useNavigate();

    /*const speakSequence = ( colorSequence ) => {            
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
    }*/
   
    useEffect( () => {  
        if( sequence.length === 0 ) return;

        speakSequence(sequence, displayMessageOnScreen);
                
        setTimeout(()=> {
            let counter = 3
            const intervalId = setInterval( () => {
                const displayMessage = `Inicia en ${ counter }`;
                displayMessageOnScreen(displayMessage)

                if(counter==0) {
                    displayMessageOnScreen("¡empezamos!")
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
                <li className="controller_item group" onClick={ handleGoHome } >                
                    <HomeIcon className="controller_icon "/>
                    <span className="controller_label"> Inicio </span>                    
                </li>
                <li className="controller_item group" onClick={ handleStarGame } >                    
                    <PlayIcon className="controller_icon"/>
                    <span className="controller_label"> Empezar </span>
                </li>
                <li className="controller_item group" onClick={ hanleStopGame } >
                    <PauseIcon className="controller_icon"/>
                    <span className="controller_label"> Pausar </span>
                </li>
                <li className="controller_item group" onClick={ handleRepeatGame } >                    
                    <ReplayIcon className="controller_icon"/>
                    <span className="controller_label"> Repetir </span>
                </li>
                <li className="controller_item group" onClick={ handleHelpMe } >                    
                    <InfoIcon className="controller_icon"/>
                    <span className="controller_label"> Ayuda </span>
                </li>
            </ul>
        </footer>
    )
}