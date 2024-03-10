import { createContext, useState } from "react";

export const ScoreContext = createContext();

const defaultMultiplayerSettings = {
  turn: 1,
  numPlayers: 0,
  activePlayers: [],
}

export const ScoreProvider = ({ children }) => {	  	
  	const [ mode, setMode ] = useState('solo');
	const [ showResult, setShowResult ] = useState(false);
      
	// Solo config 
	const [ misses, setMisses ] = useState(0);
	const [ hits, setHits ] = useState(0);

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
	}

  	const values = { 
		mode,
		showResult,	setShowResult,	
		hits, misses, updateHits, updateMisses, resetSoloValues,
  	} 
  
  	return ( 
    	<ScoreContext.Provider value={ values }>
      		{ children }    
    	</ScoreContext.Provider>
  	) 
}