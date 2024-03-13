import { useContext } from "react"
import { useNavigate } from "react-router-dom";

import { ScoreContext } from "../context/ScoreContext"

import { MultiplayerIcon } from "./icons/Multiplayer"
import { RobotIcon } from "./icons/Robot"
import { WifiIcon } from "./icons/Wifi"

export const Menu = () => {
    const { selectGameMode } = useContext(ScoreContext);

    const navigate = useNavigate();

    const selectMode = (gameMode) => {
        selectGameMode(gameMode);
        const path = "/".concat(gameMode);
        navigate(path);
    }
    
    return (     
        <ul className="flex flex-col border justify-center gap-5 font-roboto text-xs uppercase text-gray-100  font-bold w-60 ">
            <li 
                onClick={ () => selectMode("solo") } 
                className="flex gap-2 cursor-pointer hover:bg-cyan-600"
            > 
                <MultiplayerIcon className="fill-gray-100 w-5 h-5 "/> 
                Solo 
            </li>
            <li 
                onClick={ () => selectMode("multiplayer") } 
                className="flex gap-2 cursor-pointer hover:bg-cyan-600"
            > 
                <RobotIcon className="fill-gray-100 w-4wi h-4" />
                Multijugador
            </li>
            <li 
                onClick={ () => selectMode("online") } 
                className="flex gap-2 cursor-pointer hover:bg-cyan-600"
            > 
                <WifiIcon className="fill-gray-100" /> 
                Online 
            </li>
        </ul>         
    )
}