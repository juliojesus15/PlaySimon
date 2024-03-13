import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ScoreContext } from "../context/ScoreContext";

export const HomeButton = () => {
    const { resetSoloValues } = useContext(ScoreContext);
    const navigate = useNavigate();

    const closeSession = () => {
        localStorage.removeItem('gameMode');
        resetSoloValues();
        navigate("/");        
    }
    
    return (
        <div onClick={ () => closeSession() } className="text-white  px-5 py-2 w-fit h-fit absolute bottom-5 right-5 hover:bg-cyan-500 cursor-pointer">
            Volver al inicio
        </div>
    )
}