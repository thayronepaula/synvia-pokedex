import { createContext, useContext, ReactNode, useState } from "react";

type TypesPokemonContextData = {
  typesPokemons: String[];
  onToggleArray: (item: string) => void;
};

const TypesPokemonContext = createContext({} as TypesPokemonContextData);

type TypesPokemonProviderProps = {
  children: ReactNode;
};

export function TypesProvider({ children }: TypesPokemonProviderProps) {
  const [typesPokemons, setTypesPokemons] = useState<String[]>([]);
  const onToggleArray = (item: string) => {
    setTypesPokemons((state) => {
      let arr = [...state];

      arr = arr.includes(item)
        ? arr.filter((type) => type !== item)
        : [...arr, item];
      return arr;
    });
  };
  return (
    <TypesPokemonContext.Provider value={{ typesPokemons, onToggleArray }}>
      {children}
    </TypesPokemonContext.Provider>
  );
}

export function useTypePokemonData() {
  return useContext(TypesPokemonContext);
}
