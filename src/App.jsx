import { SequenceProvider } from "./context/SequenceContext";
import { ScoreProvider } from "./context/ScoreContext";
import { RoundProvider } from "./context/RoundContext";

import { AppRoute } from "./routers/AppRoute";

function App() {
  	return (
		<SequenceProvider>
			<RoundProvider>
				<ScoreProvider>
					<AppRoute />
				</ScoreProvider>
			</RoundProvider>
      	</SequenceProvider>    
  	)
}

export default App;
