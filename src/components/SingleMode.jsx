import { useContext } from "react";

import { GameSimonContext } from "../context/GameSimonContext";

import { Soloboard } from "./SoloBoard";
import { SequenceGenerator } from "./SequenceGenerator";
import { Checker } from "./Checker";
import { SimonDisk } from "./SimonDisk";
import { ResultModal } from "./ResultModal";
import { HomeButton } from "./HomeButton";
import { ScoreContext } from "../context/ScoreContext";
import { SoloMenu } from "./SoloMenu";

import { avatars } from "../constants/avatar";

export const SingleMode = () => {            
 
    const { soloPlayer, setSoloPlayer } = useContext(ScoreContext);

    if( !soloPlayer ) return <SoloMenu avatars={ avatars } />
 
    return (
        <section className=" h-full flex flex-col-reverse md:flex-row justify-between p-10">
            <div className="w-1/2  flex flex-col gap-3">
                <Soloboard />
                <SequenceGenerator />
                <Checker />
                <div>
                    Mensaje de alerta
                </div>
            </div>

            <div className="w-1/2  flex justify-center items-start">
                <div className="w-80 h-80 rounded-full shadow-2xl shadow-black">
                    <SimonDisk  />
                </div>            
            </div>
            <ResultModal />

            
            <HomeButton />
        </section>
    )
}