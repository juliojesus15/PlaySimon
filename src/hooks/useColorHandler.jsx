import { useState } from "react";

export const useColorHandler = ({ redRef, blueRef, yellowRef, greenRef}) => {
    const [ colors, setColors ] = useState({
        'red': {
            name: 'rojo',
            ref: redRef,
            colorBasic: 'bg-red-500',
            colorActive: 'bg-red-700',
        },
        'yellow': {
            name: 'amarillo',
            ref: yellowRef,
            colorBasic: 'bg-amber-500',
            colorActive: 'bg-yellow-700',
    
        },
        'blue': {
            name: 'azul',
            ref: blueRef,
            colorBasic: 'bg-cyan-600',
            colorActive: 'bg-blue-700',
        },
        'green': {
            name: 'verde',
            ref: greenRef,
            colorBasic: 'bg-lime-500',
            colorActive: 'bg-lime-700',
        }  
    })
    
    return { colors };
}