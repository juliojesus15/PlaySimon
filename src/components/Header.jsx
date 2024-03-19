import { useContext, useState, useEffect } from "react"

import { ScoreContext } from "../context/ScoreContext"
import { RoundContext } from "../context/RoundContext"

import { SingleBoard } from "./SingleBoard"
import { Timer } from "./Timer"

import { ClockIcon } from "./icons/ClockIcon"

export const Header = () => {
    const { level, displayMessageOnScreen, updateMisses } = useContext(ScoreContext);

    const { startRound, setStartRound } = useContext(RoundContext)

    const [ counter, setCounter ] = useState(level.responseTime+1)

    useEffect( () => {
        if( !startRound ) { 
            setCounter(level.responseTime+1)
            return;
        }

        let timing = level.responseTime+1;
        const intervalId = setInterval(() => {
            timing--;
            setCounter(timing);
            if (timing === 0) {
                displayMessageOnScreen("¡Se ha terminado el tiempo!");
                updateMisses();
                setStartRound(false);
                clearInterval(intervalId);
            }
          }, 1000);
      
        return () => clearInterval(intervalId); // Limpia el intervalo cuando el componente se desmonte      
            
    }, [ startRound ])

    return (
        <header className="lg:h-28 bg-custom-blue-200 flex flex-col">
        
            <div className="flex flex-col lg:flex-row justify-between  items-center h-full ">

                <div className="w-full lg:w-1/2">
                    <SingleBoard />
                </div>
                
                
                <div className=" w-full lg:w-1/2   flex  items-center justify-center lg:justify-end gap-2 ">
                    
                    <p className="font-title text-5xl text-gray-200 ">
                        {counter === level.responseTime+1 ? "00": counter}
                    </p>
                    <ClockIcon className="w-10 fill-gray-200 my-auto "/>
                </div>
            </div>
            <div className="w-full  h-2  relative">
                <Timer />
            </div>

        </header>
    )
}