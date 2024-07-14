import React, { useContext, useEffect, useState } from "react";

import { SequenceContext } from "../context/SequenceContext";
import { ScoreContext } from "../context/ScoreContext";
import { RoundContext } from "../context/RoundContext";

import { DotColor } from "./DotColor";

export const Checker = () => {
	const { 
		sequence, generateRandomSequence,
		frontColor, updateFrontColor 
	} = useContext(SequenceContext);

	const { 
		displayMessageOnScreen,
		setShowResult,
		misses, updateMisses, updateHits,
	} = useContext(ScoreContext);

	const { round, activateRound } = useContext(RoundContext);


	const [ sequenceIndex, setSequenceIndex ] = useState(null); 	// Indice del elemento de la secuencia para comparar con el frontColor

	const [ nextSequence, setNextSequence ] = useState(false);
	
	// Controlar que el usuario ha alcanzado el numero maximo de intentos fallidos para activar el popup
	useEffect( () => {
        if(misses>=100) setShowResult(true);
    }, [ misses ])

	
	// Establecer en 0 el indice cuando se haya generado la primera secuencia del juego
	useEffect( () => {
        if(sequence.length==0) return;
		setSequenceIndex(0);	
		setNextSequence(false);	

    }, [ sequence ]) 
 
	useEffect( () => {
		if( !nextSequence ) return;		
		generateRandomSequence();
		
	}, [ nextSequence ])

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
			console.log("TERMIANDA LA SEQUENCIA...")
			//displayMessageOnScreen("!Lograste completar toda la secuencia!");
			updateHits();
			updateFrontColor(null);		// reiniciamos el fronColor para empezar una nueva secuencia
			displayMessageOnScreen("¡Correcto!");
			activateRound(false);
			setNextSequence(true);		// indicador de secuencia completada correctamente
		} 
		// Caso si se ha comprobado solo un color de la secuencia
		else {
			displayMessageOnScreen("¡Correcto!");
			setSequenceIndex(prevIndex => prevIndex + 1);
		}
	}

	// Handler para actualizar estados si el frontcolor es diferente al color correspondiente del indice
	const handleIncorrectColor = () => {
		displayMessageOnScreen("¡Incorrecto!");
		updateMisses();
		activateRound(false);
	};
	
  	return (
    	<div> 
			{ frontColor && <DotColor objColor={frontColor} /> }
    	</div>
  	);
};