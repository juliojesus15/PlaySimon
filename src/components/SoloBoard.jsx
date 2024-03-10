import { useContext } from "react"
import { ScoreContext } from "../context/ScoreContext";

export const Soloboard = () => {
    const { hits, misses } = useContext(ScoreContext);

    return(
        <div>
            <h2 className="font-roboto font-black text-xl text-gray-100"> Modo Solo vs Computador</h2>
                <div className="text-white">
                    <div className="flex gap-2">
                        <label> Aciertos </label>
                        <p> { hits } </p>

                    </div>
                    <div className="flex gap-2">
                        <label> Fallos </label> 
                        <p> { misses } </p>
                    </div>
            </div>
        </div>
    )
}