import { useRef, createContext, useState } from "react";

import { generateRandomNumber } from "../utils/utils";

export const SequenceContext = createContext();

export const SequenceProvider = ({ children }) => {
	const redRef = useRef(null);
	const blueRef = useRef(null);
	const greenRef = useRef(null);
	const yellowRef = useRef(null);

  	const [ baseColors, setBaseColors ] = useState({
		'red': {
			name: 'rojo',
			ref: redRef,
			colorBasic: 'bg-red-500',
			colorActive: 'bg-red-700',
			colorHover: 'hover:bg-red-600',
		},
		'yellow': {
			name: 'amarillo',
			ref: yellowRef,
			colorBasic: 'bg-amber-500',
			colorActive: 'bg-yellow-700',
			colorHover: 'hover:bg-yellow-600',
		},
		'blue': {
			name: 'azul',
			ref: blueRef,
			colorBasic: 'bg-cyan-600',
			colorActive: 'bg-blue-700',
			colorHover: 'hover:bg-blue-600',
		},
		'green': {
			name: 'verde',
			ref: greenRef,
			colorBasic: 'bg-lime-500',
			colorActive: 'bg-lime-700',
			colorHover: 'hover:bg-lime-600',
		}  
	})

	const [ sequence, setSequence ] = useState([]);

	const [ frontColor, setFrontColor ] =  useState(null);	// FrontColor representa el ultimo color que se ha presionado en el disco
 
	const updateFrontColor = (color) => {
		setFrontColor(color);
	}
		
	const generateRandomSequence = () => {
		const sequenceLength = 2;

		setSequence( prev => {
			const newSequence = [];
			const colorName = ['red', 'yellow', 'blue', 'green']

			for (let i = 0; i < sequenceLength; i++) {
				const randomNumber = generateRandomNumber(0,3);
				const randomColorName = colorName[ randomNumber ];
				const objColor = baseColors[ randomColorName ];

				newSequence.push( objColor );				
			}
			return newSequence;
		});
	}

  	const values = { 
		baseColors, redRef, blueRef, greenRef, yellowRef, 
		sequence, generateRandomSequence,
		frontColor, updateFrontColor
  	} 
  
  	return ( 
    	<SequenceContext.Provider value={ values }>
      		{ children }    
    	</SequenceContext.Provider>
  	) 
}