export const quoteAPI = (characterName, numQuotes) => {
  if(characterName) {
    return fetch(`https://futuramaapi.herokuapp.com/api/characters/${characterName.split(' ').join('-')}/${numQuotes}`)
      .then(res => res.json());
  }
  else {
    return fetch(`https://futuramaapi.herokuapp.com/api/quotes/${numQuotes}`)
      .then(res => res.json());
  }
};
export const charactersAPI = (page) => {
  return fetch(`https://futuramaapi.herokuapp.com/api/v2/characters?page=${page}`)
    .then(res => res.json()) // The keys on this API are all capitalized, which is stupid.
    .then(characters => {
      return characters.map(character => Object.fromEntries(Object.entries(character)
        .map(entry => [entry[0].toLowerCase(), entry[1]]))); 
    });
};
