import { useContext } from "react";

import { ScoreContext } from "../context/ScoreContext";

import { SequenceControl } from "./SequenceControl";
import { ResultModal } from "./ResultModal";
import { TimeHeader } from "./TimeHeader";
import { SimonDisk } from "./SimonDisk";
import { SoloMenu } from "./SoloMenu";
import { Checker } from "./Checker";

import { avatars } from "../constants/avatar";

export const SingleMode = () => {
 
    const { soloPlayer, message } = useContext(ScoreContext);

    if( !soloPlayer ) return <SoloMenu avatars={ avatars } />
 
    return (
        <section className="h-full py-3">
            <div className=" flex flex-col gap-3 overflow-hidden bg-custom-blue-300 relative rounded-2xl border-custom-blue-100/10 border-2">
                <TimeHeader />
                <div className="flex">
                    <div className="flex flex-col gap-3 items-center justify-center  w-1/2">
                        <p className="font-title font-bold text-3xl text-gray-200 text-center uppercase px-5"> { message } </p>
                        <Checker />
                    </div>
                    <div className="flex justify-center w-1/2">
                        <div className="w-80 h-80 rounded-full shadow-2xl shadow-black relative">
                            <SimonDisk />
                        </div>   
                    </div>
                </div>
                <ResultModal />
                <SequenceControl />
            </div>
        </section>
    )
}