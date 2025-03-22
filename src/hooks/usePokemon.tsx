import { useEffect, useState } from "react";
import { pokemon } from "../types/pokemon";

const usePokemon = () => {
  const [data, setData] = useState<pokemon[]>([]);
  useEffect(() => {
    fetch("/pokemon.json")
      .then(async (response) => {
        const data: pokemon[] = await response.json();
        setData(data);
      })
      .catch((error) => console.error(error));
  }, []);
  return { data };
};

export default usePokemon;
