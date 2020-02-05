import React from 'react';
import PropTypes from 'prop-types';

import styles from './CharacterBox.css';

const CharacterBox = ({ characterState }) => {
  const { characters, selectedCharacterIndex, setSelectedCharacterIndex, charactersAreMajor, setCharactersAreMajor, page, nextPage, prevPage } = characterState;
  return (
    <div className={styles.CharacterBox}>
      <div>Select group of characters:</div>
      <div>
        <input id="major" type="radio" name="character-set" checked={charactersAreMajor} onChange={() => setCharactersAreMajor(true)}/><label className={styles.Buttonish} htmlFor="major">Major</label>
        <input id="all" type="radio" name="character-set" checked={!charactersAreMajor} onChange={() => setCharactersAreMajor(false)}/><label className={styles.Buttonish} htmlFor="all">All</label>
      </div>
      <ul>
        {characters.map((character, i) => 
          <li className={i === selectedCharacterIndex ? styles.Selected : styles.Unselected}
            key={i} 
            onClick={() => setSelectedCharacterIndex(i)}>
            {character.name}
          </li>)}
      </ul>
      <div style={charactersAreMajor ? { visibility: 'hidden' } : {}}><span onClick={prevPage} className={styles.Buttonish}>Previous</span><span onClick={nextPage} className={styles.Buttonish}>Next</span></div>
    </div>
  );
};

CharacterBox.propTypes = {
  characterState: PropTypes.object.isRequired
};

export default CharacterBox;
