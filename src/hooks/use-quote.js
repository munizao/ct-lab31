import { quoteAPI } from '../services/futurama-api';

import { useState, useEffect } from 'react';
const useQuote = ({ characters, selectedCharacterIndex }) => {
  const [quoteArray, setQuoteArray] = useState([{ quote: '', image: '', character: '' }]);
  const [numQuotes, setNumQuotes] = useState(1);

  const fetchQuote = () => {
    let name = null;
    if(selectedCharacterIndex >= 0 && characters.length > 0) {
      name = characters[selectedCharacterIndex].name;
    }
    let numNumQuotes = Number(numQuotes);
    if(isNaN(numNumQuotes)) {
      numNumQuotes = 1;
    }
    return quoteAPI(name, numNumQuotes)
      .then((res) => {
        if(res) {
          setQuoteArray(res);
        }
        else {
          setQuoteArray([{ quote: 'No Quote Found', image: '', character: '' }]);
        }
      });  
  };
  
  useEffect(() => {
    fetchQuote();    
  }, [selectedCharacterIndex]);

  return { quoteArray, fetchQuote, numQuotes, setNumQuotes } ;
};

export default useQuote;
