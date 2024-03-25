import { useContext, useState, useEffect, useRef } from "react";

import { ScoreContext } from "../context/ScoreContext";
import { RoundContext } from "../context/RoundContext";

import { SingleBoard } from "./SingleBoard";

import { ClockIcon } from "./icons/ClockIcon";
import { customMessage } from "../constants/message";

export const HeaderBoard = () => {
    const lineCounterRef = useRef(null);

    const { level, displayMessageOnScreen, updateMisses } = useContext(ScoreContext);    
    const { round, activateRound } = useContext(RoundContext)
    
    const [ timerWidth, setTimerWidth ] = useState(0);
    const [ counter, setCounter ] = useState(level.responseTime);

     
    useEffect( () => {
        if( !round ) {
            console.log("REINICIANDO VALORES")
            //setTimerWidth(0); 
            setCounter(level.responseTime);
            return;
        }
        
        console.log("INICIANDO NUEVA CUENTA REGRESIVA")
        console.log("🚀 ~ useEffect ~ round:", round)
        
        const { responseTime } = level;
        const currentLineWidth = lineCounterRef.current.offsetWidth;
        const lineChunk = currentLineWidth / responseTime;
        
        let step = responseTime+1;
        
        const intervalId = setInterval(() => {
            step--;
            console.log("🚀 ~ intervalId ~ step:", step)
            if( round ) {
                setCounter(step);

                setTimerWidth(prevWidth => {
					return Math.min( prevWidth + lineChunk, currentLineWidth);					
				});

                if( step === 0 ) {
                    updateMisses();
                    activateRound(false);
                    displayMessageOnScreen(customMessage[ 'timeCompleted' ]);
                    
                    clearInterval(intervalId);
                }
            }

          }, 1000);
      
        return () => clearInterval(intervalId);
            
    }, [ round ])

    const renderCounter = () => {
        if( counter === level.responseTime) {            
            return round ? counter : "--";
        }  
        return counter;        
    };

    return (
        <header className="md:h-28 bg-custom-blue-200 flex flex-col relative">
                        
            <div className="flex flex-col md:flex-row justify-between  items-center h-full px-3">
                <div className="w-full lg:w-1/2">
                    <SingleBoard />
                </div>

                <div className=" w-full lg:w-1/2">
                    <div className="absolute md:relative bottom-0 right-5 md:right-auto md:bottom-auto">
                        <div className=" flex  items-center justify-end gap-1 md:gap-2 relative z-10">
                            <p className="font-title text-xl md:text-5xl text-gray-200  ">
                                { renderCounter() }
                            </p>
                            <ClockIcon className="w-4 md:w-10 fill-gray-200 my-auto "/>
                        </div>
                    </div>
                </div>
            </div>

            <div 
                className="w-full h-7 bg-custom-blue-100/10 overflow-hidden" 
                ref={ lineCounterRef }
            >
                <div 
                    className="timer-bar h-full bg-custom-yellow-100 rounded-r-full " 
                    style={{ width: timerWidth + 'px' }} 
                >				
                </div>
            </div>
        
        </header>
    )
}