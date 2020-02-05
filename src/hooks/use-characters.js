import { useState, useEffect } from 'react';
import usePaging from './use-paging';
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
  const { page, nextPage, prevPage } = usePaging();

  const fetchCharacters = () => {
    if(charactersAreMajor) {
      setCharacters(majorCharacters);
    }
    else {
      charactersAPI(page)
        .then((res) => {
          setCharacters(res);
        });  
    }
  };

  useEffect(() => {
    fetchCharacters();    
  }, [charactersAreMajor, page]);

  return { characters, selectedCharacterIndex, setSelectedCharacterIndex, charactersAreMajor, setCharactersAreMajor, prevPage, nextPage };
};

export default useCharacters;
