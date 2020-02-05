import React from 'react';
import PropTypes from 'prop-types';

import useQuote from '../hooks/use-quote';
import styles from './QuoteBox.css';

const QuoteBox = ({ characterState }) => {
  const { selectedCharacterIndex } = characterState;
  const { quoteArray, fetchQuote, numQuotes, setNumQuotes } = useQuote(characterState);
  return (
    <div className = {styles.QuoteBox}>
      <img src={quoteArray[0].image} />
      {quoteArray.map ((quote, i) => {
        return <p key={i}>{quoteArray[i].quote}</p>;
      })}
      <p>&mdash; {quoteArray[0].character}</p>
      {selectedCharacterIndex >= 0 ?
        <div>Number of Quotes<input type="text" value={numQuotes} onChange={({ target }) => setNumQuotes(target.value)} /></div> : null}
      <button onClick={fetchQuote}>Get new Quote</button>
    </div>
  );
};

QuoteBox.propTypes = {
  characterState: PropTypes.object.isRequired
};

export default QuoteBox;
