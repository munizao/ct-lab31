import React from 'react';
import useQuote from '../hooks/use-quote';
import useCharacters from '../hooks/use-characters';
import styles from './Quote.css';

const Quote = () => {
  const { quoteObj, fetchQuote } = useQuote();
  const { characters, changeCharacter } = useCharacters();
  console.log(characters);
  return (
    <div className = {styles.Quote}>
      <select onChange={changeCharacter}>
        {characters.map((character, i) => <option key={i} value={i}>{character.name}</option>)}
      </select>
      <img src={quoteObj.image} /><p>{quoteObj.quote}</p><p>{quoteObj.character}</p>
      <button onClick={fetchQuote}>Get new Quote</button>
    </div>
  );
};

export default Quote;
