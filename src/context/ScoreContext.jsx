import { createContext, useState } from "react";

import { customMessage } from "../constants/message";

export const ScoreContext = createContext();


const defaultMultiplayerSettings = {
  turn: 1,
  numPlayers: 0,
  activePlayers: [],
}

export const ScoreProvider = ({ children }) => {
	const [ message, setMessage ] = useState( customMessage[ 'init'] );

	const displayMessageOnScreen = (customMessage) => {
		setMessage(customMessage);
	}

  	const [ mode, setMode ] = useState( localStorage.getItem('gameMode') ? localStorage.getItem('gameMode') : null );
	const [ showResult, setShowResult ] = useState(false);
      
	// Solo config 
	const [ misses, setMisses ] = useState(0);
	const [ hits, setHits ] = useState(0);
	const [ soloPlayer, setSoloPlayer ] = useState(null);

	// level 
	const [ startLevel, setStartLevel ] = useState(false);
	const [ time, setTime ] = useState(null);

	const [ level, setLevel ] = useState({
		level: 1,
		numColors: 3,
		speakTime: 3,
		responseTime: 5
	})

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
		setSoloPlayer(null);
	}

  	const values = { 
		message, setMessage, displayMessageOnScreen,
		mode, selectGameMode,
		showResult,	setShowResult,	
		hits, misses, updateHits, updateMisses, resetSoloValues,
		soloPlayer, setSoloPlayer,
		startLevel, setStartLevel,
		level,
  	} 
  
  	return ( 
    	<ScoreContext.Provider value={ values }>
      		{ children }    
    	</ScoreContext.Provider>
  	) 
} 