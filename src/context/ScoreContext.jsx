import { createContext, useState } from "react";

export const ScoreContext = createContext();

const defaultMultiplayerSettings = {
  turn: 1,
  numPlayers: 0,
  activePlayers: [],
}

export const ScoreProvider = ({ children }) => {	  	
  	const [ mode, setMode ] = useState( localStorage.getItem('gameMode') ? localStorage.getItem('gameMode') : null );
	const [ showResult, setShowResult ] = useState(false);
      
	// Solo config 
	const [ misses, setMisses ] = useState(0);
	const [ hits, setHits ] = useState(0);
	const [ soloPlayer, setSoloPlayer ] = useState(null);

	// mode
	const selectGameMode = (gameMode) => {
		setMode(gameMode);
		localStorage.setItem('gameMode', gameMode);
	} 
	
	// Scores
	const updateMisses = () => {
		setMisses( prev => prev+1 )
	}
	
	const updateHits = () => {
		setHits( prev => prev+1 )
	}
	
	const resetSoloValues = () => {
		setMisses(0);
		setHits(0);
		setMode(null);
	}

  	const values = { 
		mode, selectGameMode,
		showResult,	setShowResult,	
		hits, misses, updateHits, updateMisses, resetSoloValues,
		soloPlayer, setSoloPlayer
  	} 
  
  	return ( 
    	<ScoreContext.Provider value={ values }>
      		{ children }    
    	</ScoreContext.Provider>
  	) 
}