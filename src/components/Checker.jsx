import { useContext } from "react";

import { GameSimonContext } from "../context/GameSimonContext";
import { DotColor } from "./DotColor";

export const Checker = () => {
    const { userColors }  = useContext(GameSimonContext);
   
    return (              
        <ul className="font-roboto font-medium text-gray-100 text-xs flex flex-col flex-wrap gap-2 border h-32">
            {
                userColors && userColors.map( (item, key) => {
                    return (
                        <li className="flex items-center gap-2" key={ key }>
                            
                            <DotColor objColor={ item } />
                            {
                                item.status 
                                    ? <p> Correcto </p> 
                                    : <p> Incorrecto </p>
                                }
                        </li>
                    )
                })
            }
        </ul>            
    )
}