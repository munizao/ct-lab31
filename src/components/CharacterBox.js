import React from 'react';
import PropTypes from 'prop-types';

import styles from './CharacterBox.css';
import useCharacters from '../hooks/use-characters';

const CharacterBox = ({ characterState }) => {
  const { characters, selectedCharacterIndex, setSelectedCharacterIndex, setCharactersAreMajor } = characterState;
  return (
    <div className={styles.CharacterBox}>
      <div>Select group of characters:</div>
      <div>
        <input id="famous" type="radio" name="character-set" onChange={() => setCharactersAreMajor(true)}/><label htmlFor="famous">Major</label>
        <input id="all" type="radio" name="character-set" onChange={() => setCharactersAreMajor(false)}/><label htmlFor="all">All</label>
      </div>
      <ul>
        {characters.map((character, i) => 
          <li className={i === selectedCharacterIndex ? styles.Selected : styles.Unselected}
            key={i} 
            onClick={() => setSelectedCharacterIndex(i)}>
            {character.name}
          </li>)}
      </ul>
    </div>
  );
};

CharacterBox.propTypes = {
  characterState: PropTypes.object.isRequired
};

export default CharacterBox;
