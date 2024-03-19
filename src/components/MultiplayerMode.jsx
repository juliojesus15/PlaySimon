import { SimonDisk } from "./SimonDisk";
import { ResultModal } from "./ResultModal";
import { SequenceControl } from "./SequenceControl";

export const MultiplayerMode = () => {            

    return (
        <section className="h-full py-3">
            <div className=" flex flex-col gap-3 overflow-hidden bg-custom-blue-300 relative rounded-2xl border-custom-blue-100/10 border-2">
                <div className="w-1/2  flex flex-col gap-3">
                    Multiplayer mode
                </div>

                <div className="w-1/2 border flex justify-center items-start">
                    <div className="w-80 h-80 rounded-full shadow-2xl shadow-black">
                        <SimonDisk  />
                    
                    </div>            
                </div>  
                <ResultModal />
        
                <SequenceControl />
            </div>
        </section>
    )
}