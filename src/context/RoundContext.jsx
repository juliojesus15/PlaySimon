import { createContext, useState } from "react";

export const RoundContext = createContext();

export const RoundProvider = ({ children }) => {

    const [ lapse, setLapse ] = useState(3);
    const [ startRound, setStartRound ] = useState(false);        
	const [ resetRound, setResetRound ] = useState(false);
	
	const [ level, setLevel ] = useState({
		level: 1,
		numColors: 3,
		speakTime: 3,
		responseTime: 5
	})

  	const values = { 
        startRound, setStartRound,
        resetRound, setResetRound,
        lapse, setLapse,
        level, setLevel,
  	} 
  
  	return ( 
    	<RoundContext.Provider value={ values }>
      		{ children }    
    	</RoundContext.Provider>
  	) 
} 