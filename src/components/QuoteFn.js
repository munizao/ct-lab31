import React from 'react';
import useQuote from '../hooks/use-quote';
import useCharacters from '../hooks/use-characters';
import styles from './Quote.css';
import CharacterBox from './CharacterBox';

const Quote = () => {
  const characterState = useCharacters();
  const { quoteObj, fetchQuote } = useQuote(characterState);
  return (
    <>
      <header><h1>Futurama Quotes</h1></header>
      <main className = {styles.MainBox}>
        <CharacterBox characterState={characterState} />
        <div className = {styles.Quote}>
          <img src={quoteObj.image} /><p>{quoteObj.quote}</p><p>{quoteObj.character}</p>
          <button onClick={fetchQuote}>Get new Quote</button>
        </div>
      </main>
    </>
  );
};

export default Quote;
