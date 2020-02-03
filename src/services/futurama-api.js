export const quote = () => {
  return fetch('http://futuramaapi.herokuapp.com/api/quotes/1')
    .then(res => res.json())
    .then(res => res[0]);
};
