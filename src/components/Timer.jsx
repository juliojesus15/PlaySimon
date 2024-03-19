import React, { useState, useEffect, useRef, useContext } from 'react';

import { ScoreContext } from '../context/ScoreContext';
import { RoundContext } from '../context/RoundContext';

export const Timer = () => {
	const containerRef = useRef(null);

	const { level } = useContext(ScoreContext);

	const { startRound } = useContext(RoundContext);

	const [ timerWidth, setTimerWidth ] = useState(0);
	
	useEffect(() => {
		if( !startRound ) {
			setTimerWidth(0);
			return;
		}
		
		//setTimerWidth(0);
		const containerWidth = containerRef.current.offsetWidth;
						
		const interval = setInterval(() => {
			setTimerWidth(prevWidth => {
				const increment = containerWidth / level.responseTime;
		
				const result = Math.min(prevWidth + increment, containerWidth);
				
				return result;
			});
		}, 1000);

		// Detener el intervalo cuando el ancho del timer llegue al ancho del contenedor
		if (timerWidth >= containerRef.current.offsetWidth) {
			clearInterval(interval);
		}
		
		return () => clearInterval(interval);
		
  	}, [ startRound ]);

  	return (
    	<div 
			className=" absolute w-full top-0 h-full left-0 right-0  bg-custom-blue-100/10 overflow-hidden" 
			ref={containerRef}
		>
      		<div 
				className="timer-bar h-full bg-custom-yellow-100 rounded-r-full " 
				style={{ width: timerWidth + 'px' }} 
			>				
			</div>
    	</div>
  	);
}