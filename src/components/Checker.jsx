import React, { useContext, useEffect, useState } from "react";

import { SequenceContext } from "../context/SequenceContext";
import { ScoreContext } from "../context/ScoreContext";
import { RoundContext } from "../context/RoundContext";

import { DotColor } from "./DotColor";

export const Checker = () => {
	const { 
		sequence, 
		frontColor, updateFrontColor 
	} = useContext(SequenceContext);

	const { 
		setMessage, 
		setShowResult,		
		setStartLevel,
		misses, updateMisses, updateHits,
	} = useContext(ScoreContext);

	const { setStartRound } = useContext(RoundContext);


	const [ sequenceIndex, setSequenceIndex ] = useState(null); 	// Indice del elemento de la secuencia para comparar con el frontColor
	
	// Controlar que el usuario ha alcanzado el numero maximo de intentos fallidos para activar el popup
	useEffect( () => {
        if(misses>=100) setShowResult(true);
    }, [ misses ])

	
	// Establecer en 0 el indice cuando se haya generado la primera secuencia del juego
	useEffect( () => {
        if(sequence.length==0) return;
        
		setSequenceIndex(0);
    }, [ sequence ])

	// controlar si el color presionado (frontColor) es igual al color correspondiente del indice
	useEffect(() => {
		if (frontColor === null || sequence.length === 0 || sequenceIndex ===null) return;
		
		const { name } = frontColor;

		const comparedColors = sequence[ sequenceIndex ].name === name;
		
		if (!comparedColors) {
			handleIncorrectColor();
		} 
		else {			
			handleCorrectColor();
		}
	}, [ frontColor ]);

	// Handler para actualizar estados si el frontColor es igual al color correspondiente del indice
	const handleCorrectColor = () => {
		// Caso si se ha recorrido la secuencia completa
		if (sequenceIndex + 1 === sequence.length) {				
			setMessage("!Lograste completar toda la secuencia!");
			updateHits();			
			setSequenceIndex(0);		// reiniciamos el indice para que se vuelva a comprobar la nueva secuencia
			updateFrontColor(null);		// reiniciamos el fronColor para empezar una nueva secuencia
		} 
		// Caso si se ha comprobado solo un color de la secuencia
		else {
			setMessage("¡Correcto!");
			setSequenceIndex(prevIndex => prevIndex + 1);
		}
	}

	// Handler para actualizar estados si el frontcolor es diferente al color correspondiente del indice
	const handleIncorrectColor = () => {
		setMessage("¡Incorrecto!");
		updateMisses();
		setSequenceIndex(0);		// reiniciamos el indice para que se vuelva a comprobar toda la secuencia
		setStartRound(false);
	};
	
  	return (
    	<div> 
			{ frontColor && <DotColor objColor={frontColor} /> }
    	</div>
  	);
};