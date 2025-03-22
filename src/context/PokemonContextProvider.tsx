import React from "react";
import usePokemon from "../hooks/usePokemon";
import { PokemonContext } from "./PokemonContext";

export const PokemonContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const data = usePokemon();
  return (
    <PokemonContext.Provider value={{ pokemonData: data.data }}>
      {children}
    </PokemonContext.Provider>
  );
};
