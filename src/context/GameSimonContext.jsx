import { useRef, createContext, useState } from "react";
import { generateRandomNumber } from "../utils/utils";

export const GameSimonContext = createContext();

const defaultSoloSettings = {
  hits: 0,
  misses: 0,
}

const defaultMultiplayerSettings = {
  turn: 1,
  numPlayers: 0,
  activePlayers: [],
}

export const GameSimonProvider = ({ children }) => {
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

  	const [ mode, setMode ] = useState(null);
  
	const [ soloSettings, setSoloSetting ] = useState(defaultSoloSettings);
	const [ multiplayerSetting, setMultiplayerSetting ] = useState(defaultMultiplayerSettings);

	const [ sequence, setSequence ] = useState([]);

	const [ userColors, setUserColors ] = useState([]);


	const addNewColor = (color) => {
		setUserColors(prevResponse => [...prevResponse, color])
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
		baseColors,
		redRef, blueRef, greenRef, yellowRef,
		generateRandomSequence,
		mode,
		soloSettings, setSoloSetting,
		multiplayerSetting, setMultiplayerSetting,
		userColors, addNewColor, sequence,
  	} 
  
  	return ( 
    	<GameSimonContext.Provider value={ values }>
      		{ children }    
    	</GameSimonContext.Provider>
  	) 
}