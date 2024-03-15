import React, { useState } from 'react';

export const SoloMenu = ({ avatars }) => {
    const [username, setUsername] = useState('');
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    const handleChange = (event) => {
        setUsername(event.target.value);
    };

    const handleCharacterSelect = (characterId) => {
        setSelectedCharacter(characterId);
    };
  
    const handleSubmit = (event) => {
        event.preventDefault();
        if (username && selectedCharacter !== null) {
          alert(`Hola, ${username}! Has seleccionado el personaje con ID: ${selectedCharacter}`);
          // Aquí puedes realizar cualquier acción adicional con el nombre de usuario y el personaje seleccionado
        } else {
          alert('Por favor ingresa un nombre de usuario y selecciona un personaje.');
        }
      };

    return  (
        <div className='border flex flex-col gap-10 py-20 px-10 bg-blue-basic/80 max-w-xl rounded-lg border-blue-hover shadow-2xl shadow-black'>
          <h2 className='font-title text-yellow-basic uppercase font-bold text-5xl tracking-tight text-center'>
          ¿Listo para poner a prueba tu memoria?

          </h2>
          <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
            <div className='flex flex-col gap-2'>
              <label className='font-title text-yellow-basic uppercase font-bold text-xl'> Elige un apodo:</label>
              <input
                type="text"
                value={username}
                onChange={handleChange}
                className='border rounded-lg border-blue-hover px-2 py-1'
                placeholder="Nombre de Usuario"
                
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label className='font-title text-yellow-basic uppercase font-bold text-xl'>Selecciona tu personaje:</label>
              <div className='flex gap-2 flex-wrap justify justify-between  '>
                {avatars.map((character) => (
                  <div key={character.id} className='border border-blue-hover bg-indigo-950 rounded-lg  cursor-pointer delay-100 hover:bg-blue-hover'>
                    <img
                      src={character.image}
                      alt={`Personaje ${character.id}`}
                      onClick={() => handleCharacterSelect(character.id)}
                      className='w-28 '
                      />                  
                  </div>
                ))}
              </div>
            </div>
            <button type="submit" className='border uppercase  px-4 py-2 w-fit font-roboto text-sm font-bold self-end rounded-lg bg-yellow-basic text-blue-basic'>
                Empezar juego
            </button>
          </form>
        </div>
      );
}