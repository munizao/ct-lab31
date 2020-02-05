import { quoteAPI } from '../services/futurama-api';

import { useState, useEffect } from 'react';
const useQuote = (characters, index) => {
  const [quoteObj, setQuoteObj] = useState({ quote: '', image: '', character: '' });
  const fetchQuote = () => {
    return quoteAPI(characters.length > 0 ? characters[index].name : null)
      .then((res) => {
        if(res) {
          setQuoteObj(res);
        }
        else {
          setQuoteObj({ quote: 'No Quote Found', image: '', character: '' });
        }
      });  
  };
  
  useEffect(() => {
    fetchQuote();    
  }, [index]);

  return { quoteObj, fetchQuote } ;
};

export default useQuote;
