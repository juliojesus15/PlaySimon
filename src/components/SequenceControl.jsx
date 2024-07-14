import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { SequenceContext } from "../context/SequenceContext";
import { ScoreContext } from "../context/ScoreContext";
import { RoundContext } from "../context/RoundContext";

import { useColorEffects } from "../hooks/useColorEffects";

import { ReplayIcon } from "./icons/ReplayIcon";
import { PauseIcon } from "./icons/PauseIcon";
import { PlayIcon } from "./icons/PlayIcon";
import { HomeIcon } from "./icons/Home";
import { InfoIcon } from "./icons/InfoIcon";

export const SequenceControl = () => {
    const { sequence, generateRandomSequence }  = useContext(SequenceContext);
    const { resetSoloValues, displayMessageOnScreen, displayOnScreen } =  useContext(ScoreContext);
    const { activateRound } = useContext(RoundContext);
    
    const { startSpeechSequence } = useColorEffects();

    const navigate = useNavigate();
    
    useEffect( () => {  
        if( sequence.length === 0 ) return;

        const startSequence = async () => {
            try {
                await startSpeechSequence(sequence, displayMessageOnScreen);
                activateRound(true);
            } catch (error) {
                console.error("Error:", error);
            }  
        }
        startSequence();

    }, [ sequence ]);

    const handleHome = () => {
        localStorage.removeItem('gameMode');
        resetSoloValues();
        navigate("/");
    }
 
    const handleStart = () => {
        generateRandomSequence(0,4);
    }

    const hanleStop = () => {
        displayOnScreen('stopGame')     
    }

    const handleRepeat = async () => {
        if( sequence.length>0 ) {
            try {
                await startSpeechSequence(sequence, displayMessageOnScreen);            
                activateRound(true);
            } catch (error) {
                console.error("Error:", error);
            }  
        } else {
            displayOnScreen("noSsequence")
        }
    }

    const handleHelp = () => {
        displayOnScreen('help')        
    }
  
    return (            
        <footer className="bg-custom-blue-200 border-t-2 border-custom-blue-100/10 h-20 md:h-24">
            <ul className="flex items-center justify-around font-title font-bold text-lg uppercase w-full h-full">
                <li className="controller_item group" onClick={ handleHome } >
                    <HomeIcon className="controller_icon"/>
                    <span className="controller_label "> Inicio </span>
                </li>
                <li className="controller_item group" onClick={ handleStart } >
                    <PlayIcon className="controller_icon"/>
                    <span className="controller_label"> Empezar </span>
                </li>
                <li className="controller_item group" onClick={ hanleStop } >
                    <PauseIcon className="controller_icon"/>
                    <span className="controller_label"> Pausar </span>
                </li>
                <li className="controller_item group" onClick={ handleRepeat } >
                    <ReplayIcon className="controller_icon"/>
                    <span className="controller_label"> Repetir </span>
                </li>
                <li className="controller_item group" onClick={ handleHelp } >
                    <InfoIcon className="controller_icon"/>
                    <span className="controller_label"> Ayuda </span>
                </li>
            </ul>
        </footer>
    )
}