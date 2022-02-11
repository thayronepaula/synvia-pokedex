import Header from "../components/Header";
import FirstFilter from "../components/FirstFilter";

import PokemonInfo from "../components/PokemonInfo";
import FilterPokemons from "../components/FilterPokemons";
import SwitchFavorites from "../components/SwitchFavorites";

import { PokemonGrid, Main, MainSection } from "../styles/home";

import { usePokemonData } from "../context/pokemonData";
import { useEffect, useState } from "react";

import { useInView } from "react-intersection-observer";
import { useTypePokemonData } from "../context/filterType";

export default function Home() {
  const { typesPokemons } = useTypePokemonData();

  const [isToggled, setIsToggled] = useState(false);
  const { filteredData } = usePokemonData();
  const [currentPokemons, setCurrentPokemons] = useState(15);
  const [clickedIndex, setClickedIndex] = useState(() => {
    //trying get data on local storage
    if (typeof window !== "undefined") {
      const getPokemonFavorite = window.localStorage.getItem(
        "@favoritesPokemonSynvia"
      );

      if (getPokemonFavorite) return JSON.parse(getPokemonFavorite);
    }

    return {};
  });

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    //set favorites on local storage
    window.localStorage.setItem(
      "@favoritesPokemonSynvia",
      JSON.stringify(clickedIndex)
    );
  }, [clickedIndex]);

  const handleClick = (index: number) => {
    setClickedIndex((state) => ({
      ...state,
      [index]: !state[index],
    }));
  };

  useEffect(() => {
    if (inView) setCurrentPokemons((old) => old + 5);
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
    <>
      <Header />
      <Main>
        <FirstFilter />

        <MainSection>
          <FilterPokemons>
            <SwitchFavorites
              id="favorites-switch"
              toggled={isToggled}
              onChange={({ target }) => setIsToggled(target.checked)}
            />
          </FilterPokemons>

          <PokemonGrid>
            {Pokemons.slice(0, currentPokemons).map((pokemon) => (
              <PokemonInfo
                key={pokemon.id}
                {...pokemon}
                selected={clickedIndex[pokemon.id]}
                onClick={() => handleClick(pokemon.id)}
              />
            ))}
            <div>
              {Pokemons.length > currentPokemons && (
                <p ref={ref}>Carregando mais Pokemons...</p>
              )}

              {Pokemons.length === 0 && <p>Nenhum pokemon encontrado</p>}
            </div>
          </PokemonGrid>
        </MainSection>
      </Main>
    </>
  );
}
