import { GameSimonProvider } from "./context/GameSimonContext";
import { ScoreProvider } from "./context/ScoreContext";

import { AppRoute } from "./routers/AppRoute";

function App() {
  	return (        
		<GameSimonProvider>
        	<ScoreProvider>
          		<AppRoute />
			</ScoreProvider>
      	</GameSimonProvider>    
  	)
}

export default App;
