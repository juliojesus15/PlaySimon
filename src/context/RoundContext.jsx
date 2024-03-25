import { createContext, useState } from "react";

export const RoundContext = createContext();

export const RoundProvider = ({ children }) => {

    const [ lapse, setLapse ] = useState(3);
    
	const [ startRound, setStartRound ] = useState(false);
	const [ successRound, setSuccessRound ] = useState(false);
	const [ resetRound, setResetRound ] = useState(false);
	
	const [ finishRound, setFinishRound ] = useState(false);

	const [ round, setRound ] = useState(false);

	const getRoundStatus = () => {
		return round;
	}

	const activateRound = (status) => {
		setRound(status);
	}

	const [ level, setLevel ] = useState({
		level: 1,
		numColors: 3,
		speakTime: 3,
		responseTime: 5
	})

  	const values = { 
		round, setRound, getRoundStatus, activateRound,
        startRound, setStartRound,
		finishRound, setFinishRound,
		successRound, setSuccessRound,
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