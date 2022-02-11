import React from "react";
import { usePokemonData } from "../../context/pokemonData";

const Select = () => {
  const { category, setCategory } = usePokemonData();

  const options = [
    "Nome(cres)",
    "Nome(decres)",
    "Menor número primeiro",
    "Maior número primeiro",
  ];

  return (
    <select
      value={category}
      onChange={({ target }) => setCategory(target.value)}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
