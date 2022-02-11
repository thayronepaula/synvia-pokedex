import {
  createContext,
  useContext,
  ReactNode,
  useState,
  SetStateAction,
  Dispatch,
  useEffect,
} from "react";

import useAxios from "../hooks/useAxios";
import { awesomeSortAsc, awesomeSortDesc } from "../hooks/useSort";
import { PokemonResults, Colors } from "../types/index";

type PokemonContextData = {
  filteredData: PokemonResults[] | null | undefined;
  colors: Colors | null;
  bySearch: () => any;
  search: string;
  category: string;
  setSearch: Dispatch<SetStateAction<string>>;
  setCategory: Dispatch<SetStateAction<string>>;
};

const PokemonContext = createContext({} as PokemonContextData);

type PokemonsProviderProps = {
  children: ReactNode;
};

export function PokemonProvider({ children }: PokemonsProviderProps) {
  const { data: pokemons } = useAxios<PokemonResults[] | undefined>(
    "https://unpkg.com/pokemons@1.1.0/pokemons.json"
  );
  const { data: colors } = useAxios<Colors>("/api/typecolors");

  const [filteredData, setFilteredData] = useState<PokemonResults[]>();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Menor número primeiro");

  const bySearch = () => {
    if (!search.trim()) return;
    const searchLower = search.toLowerCase().trim();
    const dataFilter = pokemons?.filter(
      ({ name, national_number }) =>
        name.toLowerCase().trim().includes(searchLower) ||
        national_number.trim().includes(searchLower)
    );
    setFilteredData(dataFilter);
  };

  useEffect(() => {
    if (pokemons && !search.trim()) {
      setFilteredData(pokemons);
      return;
    } else {
      bySearch();
    }
  }, [search, category, pokemons]);

  switch (category) {
    case "Nome(cres)":
      awesomeSortAsc("name", filteredData);
      break;

    case "Nome(decres)":
      awesomeSortDesc("name", filteredData);
      break;

    case "Maior número primeiro":
      awesomeSortDesc("national_number", filteredData);
      break;

    default:
      awesomeSortAsc("national_number", filteredData);
      break;
  }

  return (
    <PokemonContext.Provider
      value={{
        filteredData,
        colors,
        bySearch,
        category,
        search,
        setSearch,
        setCategory,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

export function usePokemonData() {
  return useContext(PokemonContext);
}
