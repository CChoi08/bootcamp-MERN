import React, { useState } from 'react';
import Pokemon from './components/Pokemon';


function App() {

  const[displayPokemon, setDisplayPokemon] = useState(false);
  const[allPokemon, setAllPokemon] = useState([]);

  return (
    <>
      <Pokemon
        displayPokemon = {displayPokemon}
        setDisplayPokemon = {setDisplayPokemon}
        allPokemon = {allPokemon}
        setAllPokemon = {setAllPokemon}
      />
    </>
  );
}

export default App;
