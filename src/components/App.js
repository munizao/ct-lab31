import React from 'react';
import useCharacters from '../hooks/use-characters';
import QuoteBox from './QuoteBox';
import CharacterBox from './CharacterBox';
import styles from './App.css';

export default function App() {
  const characterState = useCharacters();
  return (
    <>
      <header><h1>Futurama Quotes</h1></header>
      <main className = {styles.MainBox}>
        <CharacterBox characterState={characterState} />
        <QuoteBox characterState={characterState} />
      </main>
    </>
  );
}

