import { createContext } from "react";
import { pokemon } from "../types/pokemon";

export type PokemonContextType = {
  pokemonData: pokemon[];
};

// Create the context with a default value
export const PokemonContext = createContext<PokemonContextType>({
  pokemonData: [],
});
