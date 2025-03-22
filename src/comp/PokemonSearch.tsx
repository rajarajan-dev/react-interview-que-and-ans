import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { PokemonContext } from "../context/PokemonContext";

function PokemonSearch() {
  const pokemon = useContext(PokemonContext);
  const theme = useContext(ThemeContext);

  return (
    <>
      <h1>Pokemon Search Screen</h1>
      <button onClick={() => theme?.switchTheme()}>Switch Theme</button>
      <h2>Theme : {theme?.theme}</h2>
      {pokemon.pokemonData.map((p) => (
        <div key={p.id}>{p.name}</div>
      ))}
    </>
  );
}

export default PokemonSearch;
