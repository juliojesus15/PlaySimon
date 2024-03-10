import { GameSimonProvider } from "./context/GameSimonContext"
import { ScoreProvider } from "./context/ScoreContext"

import SimonScreen from "./pages/Simon"

function App() {

  return (
    <GameSimonProvider>
      <ScoreProvider>
        <div className='bg-stars bg-cover bg-center h-screen w-screen'>
          <SimonScreen />      
        </div>
      </ScoreProvider>
    </GameSimonProvider>
  )
}

export default App
