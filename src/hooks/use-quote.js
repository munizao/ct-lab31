import { quoteAPI } from '../services/futurama-api';

import { useState, useEffect } from 'react';
const useQuote = ({ characters, selectedCharacterIndex }) => {
  const [quoteObj, setQuoteObj] = useState({ quote: '', image: '', character: '' });
  const fetchQuote = () => {
    return quoteAPI(characters.length > 0 ? characters[selectedCharacterIndex].name : null)
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
  }, [selectedCharacterIndex]);

  return { quoteObj, fetchQuote } ;
};

export default useQuote;
