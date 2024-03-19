import { useContext, useState, useEffect } from "react"
import { Soloboard } from "./SoloBoard"
import { Timer } from "./Timer"
import { ClockIcon } from "./icons/ClockIcon"
import { ScoreContext } from "../context/ScoreContext"
import { RoundContext } from "../context/RoundContext"

export const TimeHeader = () => {
    const { level, setMessage, updateMisses } = useContext(ScoreContext);

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
              setMessage("¡Se ha terminado el tiempo!");
              updateMisses();
              setStartRound(false);
              clearInterval(intervalId);
            }
          }, 1000);
      
        return () => clearInterval(intervalId); // Limpia el intervalo cuando el componente se desmonte      
            
    }, [ startRound ])

    return (
        <header className="h-28 w-full bg-custom-blue-200 text-white flex flex-col justify-between relative">
            <div className="flex justify-between items-center h-full">

                <div className="px-5 w-1/2 ">
                    <h2 className="font-bold  hidden text-3xl  text-custom-yellow-100 font-title leading-[1.5rem] tracking-tight"> MODO <br/> SOLITARIO</h2>
                    <Soloboard />
                </div>
                
                <div className=" py-2 px-5 w-1/2 text-  flex  items-center justify-end gap-2">
                    
                    <span className="font-title text-5xl text-gray-200 -yellow-100  ">
                        {counter === level.responseTime+1 ? "00": counter}
                    </span>
                    <ClockIcon className="w-10 fill-gray-200 my-auto "/>
                </div>
            </div>
            <div className="w-full  h-2  relative">
                <Timer />
            </div>

        </header>
    )
}