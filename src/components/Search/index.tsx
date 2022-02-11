import React from "react";
import { usePokemonData } from "../../context/pokemonData";


const index = () => {
  const { search, setSearch} = usePokemonData();
 
  return (
    <input
      value={search}
      onChange={({ target }) => setSearch(target.value)}
      placeholder='Pesquisar'
    />
  );
};
export default index;