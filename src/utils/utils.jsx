export const generateRandomNumber = (min, max) => {
    if (min > max) {
      throw new Error("The minimum value must be less than or equal to the maximum value");
    }
  
    // Generar un numero aleatorio entre 0 y 1
    const randomNumber = Math.random();
  
    // Multiplicar el numero aleatorio por el rango (máximo - mínimo)
    const range = max - min + 1;
    const generatedNumber = Math.floor(randomNumber * range);
  
    // Sumar el mínimo al numero generado para obtener el resultado final
    return generatedNumber + min;
  };
  
