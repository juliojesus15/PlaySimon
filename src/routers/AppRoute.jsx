import { useContext } from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';

// context
import { ScoreContext } from "../context/ScoreContext";

// pages
import SimonScreen from "../pages/Simon";
import GameScreen from "../pages/Game";
import MultiplayerScreen from "../pages/Multiplayer";

// components
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";


export const AppRoute = () => {	 
    const { mode } = useContext(ScoreContext);

	return (
        <div className="bg-stars bg-cover bg-center h-full min-h-screen">
            <BrowserRouter>
                <Routes>
                    <Route 
                        exact 
                        path={ "multiplayer" } 
                        element={ <PrivateRoute mode={ mode } path={"multiplayer"} /> } 
                    >
                        <Route  path=""  element={<MultiplayerScreen />} />
                    </Route>       
                    <Route 
                        exact 
                        path={ "solo" } 
                        element={ <PrivateRoute mode={ mode } path={"solo"} /> } 
                    >
                        <Route  path=""  element={<GameScreen />} />
                    </Route>     
                    <Route 
                        exact 
                        path={ "/" } 
                        element={ <PublicRoute mode={ mode } path={"/"} /> } 
                    >
                        <Route path="" element={ <SimonScreen /> } />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>

	)
}