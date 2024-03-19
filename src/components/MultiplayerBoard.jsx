import React, { useContext, useState } from 'react';
import { ScoreContext } from '../context/ScoreContext';

export const MultiplayerMenu = ({ avatars }) => {
    const { setSoloPlayer } = useContext(ScoreContext);

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
            setSoloPlayer({
                username: username,
                avatarId: avatars[selectedCharacter-1]
            });
            //alert(`Hola, ${username}! Has seleccionado el personaje con ID: ${selectedCharacter}`);
          
        } else {
            alert('Por favor ingresa un nombre de usuario y selecciona un personaje.');
        }
      };

    return  (
        <div className='border-2 border-gray-400 flex flex-col gap-10 p-10 bg-custom-blue-200 max-w-xl rounded-3xl shadow-2xl shadow-black'>
          <h2 className='font-title font-bold text-custom-yellow-100 text-5xl text-center tracking-tight uppercase'>
            ¿Listo para poner a prueba tu memoria?

          </h2>
          <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
            <div className='flex flex-col gap-2'>
              <label className='font-title font-bold text-custom-yellow-100 text-xl uppercase'> 
                Elige un apodo:
              </label>
              <input
                type="text"
                value={username}
                onChange={handleChange}
                className='border-2 rounded-lg border-gray-400 shadow px-2 py-1 font-roboto text-custom-blue-300 font-bold uppercase text-sm'
                placeholder="Nombre de Usuario"
                
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label className='font-title font-bold text-custom-yellow-100 text-xl uppercase'> 
                Selecciona tu personaje:
              </label>
              <div className='flex gap-2 flex-wrap justify justify-between  '>
                {avatars.map((character, index) => (
                  <div className=' p-1' key= {index }>
                    <div key={character.id} className='shadow-black/50 shadow-md border border-blue-hover group bg-custom-blue-300 rounded-lg  cursor-pointer delay-100 hover:bg-blue-hover'>
                      <img
                        src={character.image}
                        alt={`Personaje ${character.id}`}
                        onClick={() => handleCharacterSelect(character.id)}
                        className='w-24 group-hover:animate-bounce'
                        />                  
                    </div>
                  </div>

                ))}
              </div>
            </div>
            <button type="submit" className='border-2 border-gray-200 uppercase  px-5 py-2 w-fit font-roboto font-bold text-sm  self-end rounded bg-custom-yellow-100 text-custom-blue-300'>
                Empezar juego
            </button>
          </form>
        </div>
      );
}