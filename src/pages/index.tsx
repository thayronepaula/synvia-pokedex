import Header from "../components/Header";
import PokemonInfo from "../components/PokemonInfo";
import Search from "../components/Search";
import Select from "../components/Select";
import FilterPokemons from "../components/FilterPokemons";
import SwitchFavorites from "../components/SwitchFavorites";

import { PokemonGrid } from "../styles/home";

import { usePokemonData } from "../context/pokemonData";
import { useEffect, useState } from "react";

import { useInView } from "react-intersection-observer";
import { useTypePokemonData } from "../context/filterType";

export default function Home() {
  const { typesPokemons } = useTypePokemonData();

  const [isToggled, setIsToggled] = useState(false);
  const { filteredData, bySearch } = usePokemonData();
  const [currentPokemons, setCurrentPokemons] = useState(4);
  const [clickedIndex, setClickedIndex] = useState({});

  const { ref, inView } = useInView({
    threshold: 0,
  });

  const handleClick = (index: number) => {
    setClickedIndex((state) => ({
      ...state,
      [index]: !state[index],
    }));
  };

  useEffect(() => {
    if (inView) setCurrentPokemons((old) => old + 10);
  }, [inView]);

  if (!filteredData) return null;

  let Pokemons = filteredData?.filter(({ type }) => {
    if (!typesPokemons.length) return filteredData;
    return type.some((type) => typesPokemons?.includes(type));
  });

  if (isToggled) {
    Pokemons = Pokemons.filter(({ id }) => clickedIndex[id]);
  }

  return (
    <div>
      <Header />
      <SwitchFavorites
        id="favorites-switch"
        toggled={isToggled}
        onChange={({ target }) => setIsToggled(target.checked)}
      />
      <Search />
      <Select />
      <button onClick={bySearch}>test</button>
      <FilterPokemons />
      <PokemonGrid>
        {Pokemons.slice(0, currentPokemons).map((pokemon) => (
          <PokemonInfo
            key={pokemon.id}
            {...pokemon}
            selected={clickedIndex[pokemon.id]}
            onClick={() => handleClick(pokemon.id)}
          />
        ))}
      </PokemonGrid>

      {Pokemons.length > currentPokemons ? (
        <p ref={ref}>Carregando mais Pokemons...</p>
      ) : (
        <p>Todos pokemons carregados</p>
      )}
    </div>
  );
}
