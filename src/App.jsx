import { Routes, Route, BrowserRouter } from "react-router-dom";

import { GameSimonProvider } from "./context/GameSimonContext"
import { ScoreProvider } from "./context/ScoreContext"

import SimonScreen from "./pages/Simon"
import { AppRoute } from "./routers/AppRoute";

function App() {

  return (
    <div>
      <BrowserRouter>
        <GameSimonProvider>
            <ScoreProvider>
                <AppRoute />
              	{/*<div className='bg-stars bg-cover bg-center h-screen w-screen'>
                	<SimonScreen />      
              </div>*/}
            </ScoreProvider>
          </GameSimonProvider>
        </BrowserRouter>
    </div>
  )
}

export default App
