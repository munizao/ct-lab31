import { quote } from '../services/futurama-api';

import { useState, useEffect } from 'react';
const useQuote = () => {
  const [quoteObj, setQuoteObj] = useState({ quote: '', image: '', character: '' });
  const fetchQuote = () => {
    return quote()
      .then((res) => {
        setQuoteObj(res);
      });  
  };
  
  useEffect(() => {
    fetchQuote();    
  }, []);

  return { quoteObj, fetchQuote } ;
};

export default useQuote;
