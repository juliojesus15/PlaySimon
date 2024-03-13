
import { SimonDisk } from "./SimonDisk";
import { ResultModal } from "./ResultModal";
import { HomeButton } from "./HomeButton";

export const MultiplayerMode = () => {            

    return (
        <section className="border h-full flex flex-col-reverse md:flex-row justify-between p-10">
            <div className="w-1/2  flex flex-col gap-3">
                Multiplayer mode
            </div>

            <div className="w-1/2 border flex justify-center items-start">
                <div className="w-80 h-80 rounded-full shadow-2xl shadow-black">
                    <SimonDisk  />
                </div>            
            </div>  
            <ResultModal />
      
            <HomeButton />
        </section>
    )
}