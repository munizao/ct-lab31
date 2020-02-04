import { useState, useEffect } from 'react';
import { charactersAPI } from '../services/futurama-api';

const useCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [, setCharacterId] = useState(0);

  const fetchCharacters = () => {
    return charactersAPI()
      .then((res) => {
        setCharacters(res);
      });  
  };

  const changeCharacter = ({ target }) => {
    setCharacterId(target.value);
  };
  
  useEffect(() => {
    fetchCharacters();    
  }, []);

  return { characters, changeCharacter };
};

export default useCharacters;
