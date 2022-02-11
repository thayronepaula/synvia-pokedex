import { SelectContainer, TitleSelect, Select } from "./styles";
import { usePokemonData } from "../../context/pokemonData";

const index = () => {
  const { category, setCategory } = usePokemonData();

  const options = [
    "Nome(cres)",
    "Nome(decres)",
    "Menor número primeiro",
    "Maior número primeiro",
  ];

  return (
    <SelectContainer>
      <TitleSelect>Ordenar por</TitleSelect>
      <Select
        value={category}
        onChange={({ target }) => setCategory(target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </SelectContainer>
  );
};

export default index;
