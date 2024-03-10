import { useContext } from "react";

import { GameSimonContext } from "../context/GameSimonContext";

import { Soloboard } from "./SoloBoard";
import { SequenceGenerator } from "./SequenceGenerator";
import { Checker } from "./Checker";
import { SimonDisk } from "./SimonDisk";
import { ResultModal } from "./ResultModal";

export const Simon = () => {            
    const { mode } = useContext(GameSimonContext);

    return (
        <section className="border h-full flex flex-col-reverse lg:flex-row justify-between p-10">
            <div className="w-1/2  flex flex-col gap-3">
                <Soloboard />
                <SequenceGenerator />
                <Checker />
                <div>
                    Mensaje de alerta
                </div>
            </div>

            <div className="w-1/2 border flex justify-center items-start">
                <div className="w-80 h-80 rounded-full shadow-2xl shadow-black">
                    <SimonDisk  />
                </div>            
            </div>
            <ResultModal />
        </section>
    )
}