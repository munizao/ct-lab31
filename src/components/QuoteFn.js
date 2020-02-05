import React from 'react';
import useQuote from '../hooks/use-quote';
import useCharacters from '../hooks/use-characters';
import styles from './Quote.css';

const Quote = () => {
  const { characters, selectedCharacterIndex, setSelectedCharacterIndex, setCharactersAreMajor,  } = useCharacters();
  const { quoteObj, fetchQuote } = useQuote(characters, selectedCharacterIndex);
  return (
    <>
      <header><h1>Futurama Quotes</h1></header>
      <main className = {styles.MainBox}>
        <ul>
          <li>Select group of characters:</li>
          <li>
            <input id="famous" type="radio" name="character-set" onChange={() => setCharactersAreMajor(true)}/><label htmlFor="famous">Major</label>
            <input id="all" type="radio" name="character-set" onChange={() => setCharactersAreMajor(false)}/><label htmlFor="all">All</label>
          </li>
          {characters.map((character, i) => 
            <li className={i === selectedCharacterIndex ? styles.Selected : styles.Unselected}
              key={i} 
              onClick={() => setSelectedCharacterIndex(i)}>
              {character.name}
            </li>)}
        </ul>
        <div className = {styles.Quote}>
          <img src={quoteObj.image} /><p>{quoteObj.quote}</p><p>{quoteObj.character}</p>
          <button onClick={fetchQuote}>Get new Quote</button>
        </div>
      </main>
    </>
  );
};

export default Quote;
