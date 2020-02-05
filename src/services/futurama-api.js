export const quoteAPI = (characterName) => {
  if(characterName) {
    console.log(characterName);
    return fetch(`https://futuramaapi.herokuapp.com/api/characters/${characterName.split(' ').join('-')}/1`)
      .then(res => res.json())
      .then(res => res[0]);
  }
  else {
    return fetch('https://futuramaapi.herokuapp.com/api/quotes/1')
      .then(res => res.json())
      .then(res => res[0]);
  }
};

export const charactersAPI = () => {
  return fetch('http://futuramaapi.herokuapp.com/api/v2/characters')
    .then(res => res.json()) // The keys on this API are all capitalized, which is stupid.
    .then(characters => {
      return characters.map(character => Object.fromEntries(Object.entries(character)
        .map(entry => [entry[0].toLowerCase(), entry[1]]))); 
    });
};
