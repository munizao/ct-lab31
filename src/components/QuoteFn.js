import React, { useState, useEffect } from 'react';
import { quote } from '../services/futurama-api';

const Quote = () => {
  const [quoteObj, setQuoteObj] = useState({ quote: '', image: '', character: '' });
  useEffect(() => {
    fetch();    
  }, []);

  const fetch = () => {
    return quote()
      .then((res) => {
        setQuoteObj(res);
      });  
  };

  const handleClick = () => {
    fetch();
  };

  return (
    <div>
      <img src={quoteObj.image} /><p>{quoteObj.quote}</p><p>{quoteObj.character}</p>
      <button onClick={handleClick}>Get new Quote</button>
    </div>
  );
};

export default Quote;
