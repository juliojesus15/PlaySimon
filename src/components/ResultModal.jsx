import { useContext } from "react";
import { ScoreContext } from "../context/ScoreContext";

export const ResultModal = () => {    
    const { hits, misses, showResult, setShowResult } = useContext(ScoreContext);
    
    const handleModal = () => {
        setShowResult(!showResult);
    }

    return (
        <div>
        {
            showResult && <div className="bg-gray-700/50 absolute top-0 left-0 w-full h-full backdrop-blur-md flex justify-center items-center">
                <div className="relative bg-gray-50 w-80 h-80 border-4 border-gray-400/20 shadow-2xl shadow-black rounded-2xl">
                    <div onClick={() => handleModal() } className="absolute right-3 top-3 cursor-pointer">
                        cerrar
                    </div>
                    <div className="w-full h-full flex flex-col justify-center items-center"> 
                        <div className="flex gap-2">
                            <label> Aciertos </label>
                            <p> { hits } </p>

                        </div>
                        <div className="flex gap-2">
                            <label> Fallos </label> 
                            <p> { misses } </p>
                        </div>                          
                    </div>
                </div>
            </div>
        }        
        </div>
    )
}