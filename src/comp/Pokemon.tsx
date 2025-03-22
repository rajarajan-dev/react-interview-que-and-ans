import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

function Pokemon() {
  const pokemon = useContext(PokemonContext);
  return (
    <>
      <h1>Pokemon Screen</h1>

      {pokemon.pokemonData.map((p) => (
        <div key={p.id}>{p.name}</div>
      ))}
    </>
  );
}

export default Pokemon;
