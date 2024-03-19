import { useContext } from "react";

import { ScoreContext } from "../context/ScoreContext";

import { SequenceControl } from "./SequenceControl";
import { ResultModal } from "./ResultModal";
import { Header } from "./Header";
import { SimonDisk } from "./SimonDisk";
import { SingleMenu } from "./SingleMenu";
import { Checker } from "./Checker";

import { avatars } from "../constants/avatar";

export const SingleMode = () => {
 
    const { soloPlayer, message } = useContext(ScoreContext);

    if( !soloPlayer ) return <SingleMenu avatars={ avatars } />
 
    return (
        <section className="w-full">
            <div className="bg-custom-blue-300 flex flex-col gap-5 lg:gap-3 border-4  border-custom-blue-200 shadow-lg shadow-black/30 rounded-2xl overflow-hidden">
                <Header />

                <div className="flex gap-5 lg:gap-0 flex-col lg:flex-row items-center">
                    <div className="flex flex-row lg:flex-col gap-2 justify-center items-center lg:px-10 lg:w-1/2">
                        <p className="font-title font-bold text-2xl text-gray-300 text-center uppercase"> { message } </p>
                        <Checker />
                    </div>

                    <div className="flex justify-center lg:w-1/2">                        
                        <SimonDisk />
                    </div>
                </div>
                
                <ResultModal />
                
                <SequenceControl />
            </div>
        </section>
    )
}