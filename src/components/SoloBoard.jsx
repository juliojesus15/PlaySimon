import { useContext, useEffect, useState } from "react"
import { ScoreContext } from "../context/ScoreContext";

export const Soloboard = () => {
    const { hits, misses, soloPlayer } = useContext(ScoreContext);
    
    return(
                            
            <div className="flex items-center gap-5  w-full">
                                
                <div className="flex flex-col  items-center  justify-center  ">
                    <div className="bg-custom-blue-100 border-4 border-custom-yellow-100 rounded-full ">
                        <img src={ soloPlayer.avatarId.image } className="w-12"/>
                    </div>
                    <span className="font-title text-custom-yellow-100 text-xl font-bold uppercase">  
                        { soloPlayer.username }
                    </span>                  
                </div>
                <div className="text-white flex gap-5  bo2">
                    <div className="flex flex-col gap-">
                        <label className="font-title text-custom-yellow-100 text-2xl font-bold "> Aciertos </label>
                        <p className="font-title text-2xl text-gray-50 font-bold text-center"> { hits } </p>

                    </div>
                    <div className="flex flex-col  ">
                        <label className="font-title text-custom-yellow-100 text-2xl font-bold "> Fallos </label> 
                        <p className="font-title text-2xl text-gray-50 font-bold text-center"> { misses } </p>
                    </div>
                </div>               
            </div>
    )
}