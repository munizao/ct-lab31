import React from 'react';
import useQuote from '../hooks/use-quote';
import styles from './Quote.css';

const Quote = () => {
  const { quoteObj, fetchQuote } = useQuote();

  return (
    <div className = {styles.Quote}>
      <img src={quoteObj.image} /><p>{quoteObj.quote}</p><p>{quoteObj.character}</p>
      <button onClick={fetchQuote}>Get new Quote</button>
    </div>
  );
};

export default Quote;
