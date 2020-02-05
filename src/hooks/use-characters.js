import { useState, useEffect } from 'react';
import { charactersAPI } from '../services/futurama-api';

const majorCharacters = [
  { name: 'Fry' },
  { name: 'Bender' },
  { name: 'Leela' },
  { name: 'Professor Farnsworth' },
  { name: 'Amy' },
  { name: 'Zapp Brannigan' },
  { name: 'Lurr' },
  { name: 'Dr Zoidberg' },
  { name: 'Bob Barker' },
  { name: 'Hermes' },
  { name: 'Morgan Proctor' },
  { name: 'Mom' },
  { name: 'Robot Mob' },
  { name: 'Giant Bender' },
  { name: 'Kif' }
];

const useCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacterIndex, setSelectedCharacterIndex] = useState(-1);
  const [charactersAreMajor, setCharactersAreMajor] = useState(true);

  const fetchCharacters = () => {
    if(charactersAreMajor) {
      setCharacters(majorCharacters);
    }
    else {
      charactersAPI()
        .then((res) => {
          setCharacters(res);
        });  
    }
  };

  useEffect(() => {
    fetchCharacters();    
  }, [charactersAreMajor]);

  return { characters, selectedCharacterIndex, setSelectedCharacterIndex, setCharactersAreMajor };
};

export default useCharacters;
