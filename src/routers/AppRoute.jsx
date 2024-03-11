import React, { useEffect, useState, useContext } from "react";
import { Routes, Route } from 'react-router-dom';


// context
import { ScoreContext } from "../context/ScoreContext";

// pages
import SimonScreen from "../pages/Simon";
import GameScreen from "../pages/Game";
//import { Login } from "../pages/Login";

// components
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
//import { LoadingForm } from "../components/LoadingForm";

export const AppRoute = () => {	 
    const [ loading, setLoading ] = useState(false);
    const { mode } = useContext(ScoreContext);
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    
    useEffect( () => { 
        if( mode ) setIsLoggedIn(true);
    },[ mode ])
  
    if( loading ) {
        return (
            <div className="flex justify-center w-screen h-screen items-center bg-gradient-to-b from-accent to-[#4e3274]"> 
                Loading ...
            </div>
        )
    }

	return (
            <Routes>
                <Route exact path={ "simon" } element={ <PrivateRoute isLoggedIn={ isLoggedIn } /> } >
                    <Route  path=""  element={<GameScreen />} />
                </Route>
                
                <Route exact path={ "/" } element={ <PublicRoute isLoggedIn={ isLoggedIn } /> } >
                    <Route path="" element={ <SimonScreen /> } />
                </Route>


            </Routes>        

	)
}