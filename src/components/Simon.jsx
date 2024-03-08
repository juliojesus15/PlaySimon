import { useRef, useState, useContext, useEffect} from "react";

import { useColorHandler } from "../hooks/useColorHandler";
import { SimonDisk } from "./SimonDisk";

import { GameSimonContext } from "../context/GameSimonContext";
import { Checker } from "./Checker";
import { SequenceGenerator } from "./SequenceGenerator";

export const Simon = () => {

    const { redRef, blueRef, yellowRef, greenRef }  = useContext(GameSimonContext);
    
    const { colors } = useColorHandler({ redRef, blueRef, yellowRef, greenRef });
        
    return (
        <section className="border h-full flex justify-between p-10">
            <div className="w-1/2  flex flex-col gap-3">
                <h2 className="font-roboto font-black text-xl text-gray-100"> Computer mode </h2>
                <SequenceGenerator />
                <Checker />
                <div>
                    Mensaje de alerta
                </div>
            </div>

            <div className="w-1/2 border flex justify-center items-start">
                <div className="w-80 h-80 rounded-full shadow-2xl shadow-black">
                    <SimonDisk  colors={ colors }/>
                </div>            
            </div>
        </section>
    )
}