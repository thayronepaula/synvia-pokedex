import Image from "next/image";
import { DebounceInput } from "react-debounce-input";

import SearchIcon from "../../../public/search-icon.svg";
import { InputContainer, Input, IconPosition } from "./styles";
import { usePokemonData } from "../../context/pokemonData";

const index = () => {
  const { search, setSearch, bySearch } = usePokemonData();

  function handleBySearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    bySearch();
  }

  return (
    <InputContainer onSubmit={(event) => handleBySearch(event)}>
      <DebounceInput
        element={Input}
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Pesquisar por nome ou número"
        minLength={0}
        debounceTimeout={700}
      />
      <IconPosition>
        <Image width={16} height={16} src={SearchIcon.src} />
      </IconPosition>
    </InputContainer>
  );
};
export default index;
