import { GameSimonProvider } from "./context/GameSimonContext"

import SimonScreen from "./pages/Simon"

function App() {

  return (
    <GameSimonProvider>
      <div className='bg-stars bg-cover bg-center h-screen w-screen'>
        <SimonScreen />      
      </div>
    </GameSimonProvider>
  )
}

export default App
