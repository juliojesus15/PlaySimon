import { MultiplayerIcon } from "./icons/Multiplayer"
import { RobotIcon } from "./icons/Robot"
import { WifiIcon } from "./icons/Wifi"

export const Menu = () => {
    return (
        <section className="flex flex-col justify-center items-center gap-10 h-full">            
            <h1 className="font-roboto font-black text-gray-100 text-3xl uppercase"> 
                <span className="border-b-4 border-b-amber-400">play with simon</span>
                <br/>
                <div className="flex justify-between text-sm text-center mt-1 py-1 px-1">
                    <span>C</span>
                    <span>H</span>
                    <span>A</span>
                    <span>L</span>
                    <span>L</span>
                    <span>E</span>
                    <span>N</span>
                    <span>G</span>
                    <span>E</span>
                </div>
            </h1>

            <ul className="flex flex-col justify-center items-centr gap-4 text-body text-xs uppercase text-gray-100 font-body font-bold w-60 ">
                <li className="flex gap-2 my-auto"> <MultiplayerIcon className="fill-gray-100 w-5 h-5 "/> Local </li>
                <li className="flex gap-2 "> <RobotIcon className="fill-gray-100 w-4wi h-4" /> Computer </li>
                <li className="flex gap-2"> <WifiIcon className="fill-gray-100" /> Online </li>
            </ul>
        
        </section>
    )
}